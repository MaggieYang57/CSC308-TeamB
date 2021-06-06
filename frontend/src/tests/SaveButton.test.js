import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from 'react';
import { MemoryRouter } from 'react-router';
import SaveButton from "../components/singlepage/SaveButton";

function createFetchSpy(fetchRes, jsonRes) {
    const fetchSpy = jest.spyOn(window, 'fetch')
    const jsonSpy = jest.fn();
    
    fetchSpy.mockReturnValue(new Promise((resolve, reject) => {
      resolve({
        json: jsonSpy,
        ...fetchRes
      });
    }))

    jsonSpy.mockReturnValue(new Promise((resolve, reject) => {
      resolve(jsonRes);
    }))

    return [fetchSpy, jsonSpy];
}

describe("Save Button", () => {
  let fetchSpy;
  let jsonFn;

  beforeEach(() => {
    [fetchSpy, jsonFn] = createFetchSpy({
        ok: true,
      }, [{ test: 'dumb' }])
  })

  afterEach(() => {
    cleanup();
  });

  test("fetch works correctly", async () => {
    render(<MemoryRouter> <SaveButton saved={true}/> </MemoryRouter>);

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    })

    expect(jsonFn).toHaveBeenCalledTimes(1);
  });

  test("renders button in saved state correctly", async () => {
    render(<MemoryRouter> <SaveButton saved={true}/> </MemoryRouter>);

    expect(await screen.findByText("Saved!")).toBeTruthy();
  });

  test("renders button in not saved state correctly", async () => {
    render(<MemoryRouter> <SaveButton saved={false}/> </MemoryRouter>);

    expect(await screen.findByText("Save Hike")).toBeTruthy();
  });
  
  // test("clicking the button toggles to unsaved", async () => {
  //   render(<MemoryRouter> 
  //       <SaveButton 
  //         saved={true}
  //         hike={"1234"}
  //       /> 
  //     </MemoryRouter>);

  //   const button = document.querySelector("button[id='save-hike']");
  //   expect(button).toBeTruthy();

  //   fireEvent.click(button);

  //   expect(screen.getByText("Save Hike")).toBeTruthy();
  //   await waitFor(() => {
  //     expect(fetchSpy).toHaveBeenCalledTimes(2);
  //   })

  //   expect(jsonFn).toHaveBeenCalledTimes(2);
  // });
  
  test("clicking the button toggles to saved", async () => {
    render(<MemoryRouter> 
        <SaveButton 
          saved={false}
          hike={"1234"}
        /> 
      </MemoryRouter>);

    const button = document.querySelector("button[id='save-hike']");
    expect(button).toBeTruthy();

    fireEvent.click(button);

    expect(screen.getByText("Saved!")).toBeTruthy();

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledTimes(2);
    })

    expect(jsonFn).toHaveBeenCalledTimes(2);
  });
})
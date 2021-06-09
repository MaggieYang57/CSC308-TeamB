/* eslint-disable no-undef */

import { render } from "@testing-library/react";
import React from 'react';
import Navigation from "../components/navbars/Navigation";

describe("Navigation", () => {

  test("renders correctly", () => {
    render(<Navigation />)
    const nav = document.querySelector("div");
    expect(nav).toBeTruthy();
  })

  test("renders admin navbar", async () => {
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: jest.fn(() => null)
        },
        writable: true
      });
    render(<Navigation />)

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith("user_type");
  });

});

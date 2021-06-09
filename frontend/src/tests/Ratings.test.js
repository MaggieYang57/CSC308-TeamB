import React from 'react';
import { render } from '@testing-library/react';
import { Ratings } from '../components/Ratings';

describe("Ratings", () => {

  it("renders the correct star fraction", () => {
    let numFulls = 0;
    let j = 0;
    for (; j <= 5; j++) {
      for(let i = 0; i <= 10; i++) {
        const fraction = (i / 10) + j;
        render(<Ratings rating={fraction} />);

        let type;
        if (i === 0) {
          type = "empty";
        }
        else if (i === 10) {
          type = "full";
          numFulls++;
        }
        else {
          type = "p" + String(i)
        }

        const star = document.querySelector("img[src='/images/stars/" + type + ".png']");
        expect(star).toBeTruthy();
      }
    }
    expect(numFulls).toBe(j);
  })

})
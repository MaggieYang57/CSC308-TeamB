/* eslint-disable no-undef */

import { debug, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from 'react';
import Navigation from "./Navigation";

test("clicking the logo takes you to home", () => {

  render(<Navigation />)
  fireEvent.click(screen.getByRole('img'))

})

test("clicking on HikeFinder takes you to the HikeFinder page", () => {
  render(<Navigation />)
  fireEvent.click(screen.getAllByRole('link', { name: 'HikeFinder'})[1])
})

test("clicking on Login button takes you to the Login Page", () => {
  render(<Navigation />)
  fireEvent.click(screen.getByRole('link', { name: 'Login'}))
  
  waitFor(() =>
    screen.getByRole('form', { name: 'auth-form'})
  )

})

test("clicking on Sign-Up button takes you to the Sign-Up Page", () => {
  render(<Navigation />)
  fireEvent.click(screen.getByRole('link', { name: 'Sign Up'}))
  
  waitFor(() =>
    screen.getByRole('div', { name: 'signup-form'})
  )

})


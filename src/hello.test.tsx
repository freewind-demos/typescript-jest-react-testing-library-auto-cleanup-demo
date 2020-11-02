import {render} from "@testing-library/react";
import React from 'react';
import Hello from "./hello";

describe('Hello', () => {

  it('check content', () => {
    render(<Hello/>)
    const hellos = Array.from(document.querySelectorAll('.hello'))
    expect(hellos).toHaveLength(1);
  });

  it('check content again to see if it is cleaned up', () => {
    render(<Hello/>)
    const hellos = Array.from(document.querySelectorAll('.hello'))
    expect(hellos).toHaveLength(1);
  });

})

import React from 'react';
import { replaceMask } from "../src/helper/helper";

describe('Test replaceMask function', () => {
  it('Empty input', () => {
    expect(replaceMask('')).toEqual('');
  })
  it('All letters without numbers', () => {
    expect(replaceMask('test')).toEqual('test');
  })
  it('All numbers without letters', () => {
    expect(replaceMask('1234')).toEqual('****');
  })
  it('less than 4 numbers', () => {
    expect(replaceMask('t1e2s3t')).toEqual('t*e*s*t');
  })
  it('more than 4 numbers', () => {
    expect(replaceMask('t1e2s3t4s5')).toEqual('t1e*s*t*s*');
  })
});

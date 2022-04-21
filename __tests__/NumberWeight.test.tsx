import React from 'react';
import { reorderByWeight } from "../src/helper/helper";

describe('Test reorderByWeight function', () => {
  it('Empty input', () => {
    expect(reorderByWeight('')).toEqual('');
  })
  it('string that includes letters', () => {
    expect(reorderByWeight('81 31 F')).toEqual('');
  })
  it('string that includes special characters', () => {
    expect(reorderByWeight('81 31 %$#!&@(#^')).toEqual('');
  })
  it('string that does not include white spaces', () => {
    expect(reorderByWeight('8131')).toEqual('8131');
  })
  it('string with equal weight and zero', () => {
    expect(reorderByWeight('81 18 27 72 99 0')).toEqual('0 81 18 27 72 99');
  })
  it('string with no equal weight', () => {
    expect(reorderByWeight('56 78 12 34 0 999 555')).toEqual('0 12 34 56 78 555 999');
  })
  it('string with negative integer', () => {
    expect(reorderByWeight('-12 34')).toEqual('');
  })
});

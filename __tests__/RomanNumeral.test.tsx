import React from 'react';
import { convertRomanToInt } from "../src/helper/helper";

describe('Test convertRomanToInt function', () => {
  it('Empty input', () => {
    expect(convertRomanToInt('')).toEqual(-1);
  })
  it('Proper input without special scenario', () => {
    expect(convertRomanToInt('MDIV')).toEqual(1504);
  })
  it('Proper input with special scenario', () => {
    expect(convertRomanToInt('MDCLXVI')).toEqual(1666);
  })
  it('Input with number', () => {
    expect(convertRomanToInt('MDCLXVI45')).toEqual(-1);
  })
  it('Input with special characters', () => {
    expect(convertRomanToInt('MDCLXVI$*(&^!@&#^')).toEqual(-1);
  })
  it('Input with letters outside roman numerals', () => {
    expect(convertRomanToInt('MDCLXVIAZX')).toEqual(-1);
  })
});

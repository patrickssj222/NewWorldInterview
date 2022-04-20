export const replaceMask = (input: string, count = 0):string => {
  if(count === 4)
    return input;
  return replaceMask(input.replace(/([0-9])(?!.*[0-9])/, '*', ), count+1);
}

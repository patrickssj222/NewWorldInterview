import { useEffect, useState } from "react";
import React from 'react';
import {convertRomanToInt, reorderByWeight, replaceMask} from "../../helper/helper";

interface Props {
  input: string;
}
export const RomanNumeral = (props: Props) => {
  const { input } = props;
  const [answer, setAnswer] = useState<number>(0);

  useEffect(() => {
    setAnswer(convertRomanToInt(input))
  },[input])

  return (
    <div className={'answer-wrapper'}>
      {`Answer: ${answer}`}
    </div>
  )
}

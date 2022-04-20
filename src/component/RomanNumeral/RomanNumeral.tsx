import { useEffect, useState } from "react";
import React from 'react';
import { convertRomanToInt } from "../../helper/helper";
import '../AnswerComponents.css'

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
      {
        answer!==-1 ? `Answer: ${answer}` :
          <text className={'error-text'}>'Please enter a valid Roman Numeral'</text>
      }
    </div>
  )
}

import { useEffect, useState } from "react";
import React from 'react';
import { replaceMask } from "../../helper/helper";
import '../AnswerComponents.css'

interface Props {
  input: string;
}
export const StringMask = (props: Props) => {
  const { input } = props;
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    setAnswer(replaceMask(input))
  },[input])

  return (
    <div className={'answer-wrapper'}>
      {
        answer!=='' ? `Answer: ${answer}` :
          <text className={'error-text'}>Please enter any string</text>
      }
    </div>
  )
}

import { useEffect, useState } from "react";
import React from 'react';
import {reorderByWeight, replaceMask} from "../../helper/helper";
import '../AnswerComponents.css'

interface Props {
  input: string;
}
export const NumberWeight = (props: Props) => {
  const { input } = props;
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    setAnswer(reorderByWeight(input))
  },[input])

  return (
    <div className={'answer-wrapper'}>
      {
        answer!=='' ? `Answer: ${answer}` :
          <text className={'error-text'}>Please enter a string of numbers separated by whitespace</text>
      }
    </div>
  )
}

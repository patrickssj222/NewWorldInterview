import {useEffect, useState} from "react";
import React from 'react';
interface Props {
  input: string;
}
export const StringMask = (props: Props) => {
  const { input } = props;
  const [answer, setAnswer] = useState<string>('');
  useEffect(() => {
    setAnswer(input.replaceAll('.{4}$','*****'))
  },[input])

  return (
    <div className={'stringMaskContainer'}>{`Answer: ${input}`}</div>
  )
}

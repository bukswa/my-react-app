import React, { useEffect, useState, useTransition } from "react";

// export function TestFile() {

function hOCFunction(Component) {
  return function (props) {
    return <Component greeting="hello" />;
  };
}

function ChildComponent(props) {

  const [s1, setS1] = useState('');
  const something = props.greeting + "world";

  useEffect(() => {
    console.log(props.greeting, something);
    setS1('2');
  }, [props.greeting, something]);

  return <div>{props.greeting}</div>;
}

export const TestFile = hOCFunction(ChildComponent);

//  export function TestFile() {

import React from "react";

type GreetProps = {
  name: string
  message?: number
  isLogged: boolean
};

export const Greet = (props: GreetProps) => {
  const {message = 0} = props;
  return (
    <div>
      <h1>
        {props.isLogged
          ? `Welcome ${props.name}! You have ${message} mesages`
          : `Welcome Guest`}
      </h1>
    </div>
  );
};

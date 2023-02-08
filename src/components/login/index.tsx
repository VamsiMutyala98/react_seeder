import React, { FC, ReactElement } from "react";

interface IProps {
  componentName: string;
}

const Login: FC<IProps> = ({ componentName }): ReactElement => {
  return (
    <div>
      <h1 data-testid="login-heading">{componentName}</h1>
    </div>
  );
};

export default Login;

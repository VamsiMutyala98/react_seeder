import React from "react";
import { render, screen } from "@testing-library/react";
import Login from ".";

test("Dashboard", () => {
  const props = {
    componentName: "Login Page",
  };
  render(<Login {...props} />);
  const loginHeading = screen.getByTestId("login-heading");
  expect(loginHeading).toHaveTextContent("Login Page");
});

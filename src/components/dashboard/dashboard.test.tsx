import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from ".";

test("Dashboard", () => {
  render(<Dashboard />);
  const dashboardHeading = screen.getByTestId("dashboard-heading");
  expect(dashboardHeading).toHaveTextContent("Dashboard Page");
});

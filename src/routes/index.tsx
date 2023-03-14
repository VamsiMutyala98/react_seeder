import React, { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Loadable";
import { Login } from "../components/login/Loadable";

export const AutoRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

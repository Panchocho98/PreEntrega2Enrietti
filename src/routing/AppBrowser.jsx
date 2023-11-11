import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { rutas } from "./rutasMenu";

const browser = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {rutas.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
        <Route path="*" element={<h1>Error 404</h1>} />
      </Route>
    </Routes>
  );
};

export default browser;

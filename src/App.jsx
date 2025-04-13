// import React from 'react'

import { Navigate, Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Detail from "./components/Detail";
import { useEffect, useState } from "react";
import Rout from "./utils/Route";
import Layout from "./components/Layout";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-red-500">
      {/* <Home /> */}

      <Routes>
        {/* Parent Route (Layout) */}
        <Route path="/" element={<Layout />}>
          {/* Index Route - Home component */}
          <Route index element={<Home />} />
          {/* Dynamic Route for movies */}
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

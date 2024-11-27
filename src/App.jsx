// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseStateComp from "./ReactHooksComp/UseStateComp";
import UseEffectComp from "./ReactHooksComp/UseEffectComp";
import UseRefComp from "./ReactHooksComp/UseRefComp";
import UseMemoComp from "./ReactHooksComp/UseMemoComp";
import UseCallbackComp from "./ReactHooksComp/UseCallBackComp/UseCallbackComp"
import MainComp from "./ReactHooksComp/UseContext/MainComp"
import UseReducerComp from "./ReactHooksComp/UseReducerComp"
import UseLayoutEffect from "./ReactHooksComp/UseLayoutEffect"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/UseStateComp" element={<UseStateComp />} />
        <Route path="/UseEffectComp" element={<UseEffectComp />} />
        <Route path="/UseRefComp" element={<UseRefComp />} />
        <Route path="/UseMemoComp" element={<UseMemoComp />} />
        <Route path="/UseCallbackComp" element={<UseCallbackComp />} />
        <Route path="/MainComp" element={<MainComp />} />
        <Route path="/UseReducerComp" element={<UseReducerComp />} />
        <Route path="/UseLayoutEffect" element={<UseLayoutEffect />} />


        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
    </Router>
  );
};

export default App;

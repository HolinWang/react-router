import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Index from "./pages/index";
import List from "./pages/list";

function AppRouter() {
  return (
    <Router>
      <ul>
        <li> <Link to="/">首页</Link> </li>
        <li><Link to="/list/">列表</Link> </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/list/" element={<List />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Index() {
  return <h2>Holin.com</h2>;
}

function List() {
  return <h2>First-Page</h2>;
}

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
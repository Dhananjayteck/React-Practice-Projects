import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
// import { githubInfoLoader } from "./components/Github";
import User from "./components/User";

const ReactRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user" element={<User />} />
            {/* <Route path="user/:userId" element={<User />} /> */}
            <Route path="github" element={<Github />} />
            <Route
              // loader={githubInfoLoader}
              path="github"
              element={<Github />}
            />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ReactRouter;

import Apply from 'pages/apply';
import Home from 'pages/Home';
import Result from 'pages/result';
import Test from 'pages/test';
import TestLink from 'pages/test/link';
import TestMain from 'pages/test/main';
import ApplyName from 'pages/test/name';
import TestSub from 'pages/test/sub';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/result" element={<Result />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/sub" element={<TestSub />} />
        <Route path="/test/name" element={<ApplyName />} />
        <Route path="/test/link" element={<TestLink />} />
        <Route path="/test/main" element={<TestMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

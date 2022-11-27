import Apply from 'pages/apply';
import Home from 'pages/Home';
import Result from 'pages/result';
import TestLink from 'pages/test/link';
import ApplyName from 'pages/test/name';
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
        <Route path="/test/name" element={<ApplyName />} />
        <Route path="/test/link" element={<TestLink />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

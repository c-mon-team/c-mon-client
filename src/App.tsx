import Home from 'pages/Home';
import Result from 'pages/result';
import ResultDetail from 'pages/result/Detail';
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
        <Route path="/result/detail" element={<ResultDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

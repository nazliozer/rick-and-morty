import Home from "./Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {React} from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

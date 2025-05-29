import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/pages/Home";
import Test from "./assets/pages/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="test" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
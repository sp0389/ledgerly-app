import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/pages/Home";
import Test from "./assets/pages/Test";
import { useEffect } from "react";
import CreateTransaction from "./assets/pages/CreateTransaction";
import ViewTransactions from "./assets/pages/ViewTransactions";
import CreateBudgetCategory from "./assets/pages/CreateBudgetCategory";

const App = () => {
  //TODO: fetch the data on page load for main page.
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="transactions" element={<ViewTransactions />} />
        <Route path="newtransaction" element={<CreateTransaction />} />
        <Route path="newbudget" element={<CreateBudgetCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

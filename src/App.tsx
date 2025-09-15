import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/pages/Home";
import ViewCalendar from "./assets/pages/ViewCalendar";
import { useEffect } from "react";
import CreateTransaction from "./assets/pages/CreateTransaction";
import ViewTransactions from "./assets/pages/ViewTransactions";
import CreateBudgetCategory from "./assets/pages/CreateBudgetCategory";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Logout from "./assets/pages/Logout";

const App = () => {
  //TODO: fetch the data on page load for main page.
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="calendar" element={<ViewCalendar />} />
        <Route path="transactions" element={<ViewTransactions />} />
        <Route path="newtransaction" element={<CreateTransaction />} />
        <Route path="newbudget" element={<CreateBudgetCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

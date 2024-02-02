import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "../component/menupage";
import IntroPage from "../component/introPage";
import Categories from "../component/indexcategory";
import Account from "../component/indexaccount";
import "./App.css";
import Feed from "../component/indexfeed";
import Help from "../component/indexhelp";
import CategoryPage from "../component/categoryPage";
import ErrorPage from "../error-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<IntroPage />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/Categories" element={<Categories />}>
          <Route
            path=":id"
            element={<CategoryPage />}
            errorElement={<ErrorPage />}
          />{" "}
        </Route>
        
        <Route path="/Interaction" element={<Account />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Helpcenter" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
//errorElement=<ErrorPage />

import React from "react";
import Header from "./common/Header/Header";
import "./App.scss";
import Menu from "./common/Menu/Menu";
import Users from "./modules/Users/Users";
import Hotels from "./modules/Hotels/Hotels";
import { Routes, Route } from "react-router";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-container">
                <Menu />
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path="/hotels" element={<Hotels />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

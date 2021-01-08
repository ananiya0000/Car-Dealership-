import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//Screens
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import HouseScreen from "./Screens/HouseScreen";
import CarScreen from "./Screens/CarScreen";
import CarDesc from "./Screens/CarDesc";
import HouseDesc from "./Screens/HouseDesc";
import AdminScreen from "./Screens/AdminScreen";
/*








*/

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/Cars" component={CarScreen} exact />
        <Route path="/House" component={HouseScreen} exact />
        <Route path="/cardesc" component={CarDesc} exact />
        <Route path="/housedesc" component={HouseDesc} exact />
        <Route path="/admin" component={AdminScreen} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Pages/Home";
import FindTutor from "./Pages/FindTutor";
import FindStudent from "./Pages/FindStudent";
import PricePlan from "./Pages/PricePlan";
import Quran from "./Pages/Quran";
import Qaida from "./Pages/Qaida";
import Aboutus from "./Pages/Aboutus";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import PrivacyP from "./Pages/PrivacyP";
import ToS from "./Pages/ToS";
import Error from "./Pages/Error";
import FaQ from "./Pages/FaQ";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ChatPage from "./Pages/ChatPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/findtutors" component={FindTutor}></Route>
        <Route path="/findstudents" component={FindStudent}></Route>
        <Route path="/priceplan" component={PricePlan}></Route>
        <Route path="/quran" component={Quran}></Route>
        <Route path="/qaida" component={Qaida}></Route>
        <Route path="/aboutus" component={Aboutus}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/privacypolicy" component={PrivacyP}></Route>
        <Route path="/tos" component={ToS}></Route>
        <Route path="/faqs" component={FaQ}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/chats" component={ChatPage} />
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;

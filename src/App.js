import Homepage from "./Homepage";
import "./App.scss";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contactpage from "./Contactpage";
import Portfolios from "./Portfolios";
import Blog from "./Blog";
import Terminals from "./Terminal";
import { useEffect, useState } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
function App() {
  const [homepath, sethomepath] = useState("/");
  const [navigationState, setnavigationState] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("path") == "rm") {
      sethomepath("rm");
    }
  }, []);

  const navigationFunction = () => {
    var x = document.getElementById("navigationpage");

    if (navigationState == false) {
      x.style.display = "block";
      setnavigationState(true);
    } else {
      x.style.display = "none";
      setnavigationState(false);
    }
  };

  return (
    <div className="App">
      <div
        className="menuIcon"
        onClick={() => {
          navigationFunction();
        }}
      >
        <img
          className="menu-icon-image"
          src="https://image.flaticon.com/icons/png/128/1636/1636053.png"
        ></img>
      </div>
      <div className="overlay-content" id="navigationpage">
        <div className="overlay-content-section">
          <Link
            to="/homepage"
            onClick={() => {
              setnavigationState(false);
              navigationFunction();
            }}
            className="naviagate"
          >
            {" "}
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setnavigationState(false);
              navigationFunction();
            }}
            className="naviagate"
          >
            About
          </Link>
          <Link
            to="/portfolios"
            onClick={() => {
              setnavigationState(false);
              navigationFunction();
            }}
            className="naviagate"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setnavigationState(false);
              navigationFunction();
            }}
            className="naviagate"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            onClick={() => {
              setnavigationState(false);
              navigationFunction();
            }}
            className="naviagate"
          >
            Blog
          </Link>
        </div>
      </div>
      <div className="sidebar">{homepath == "/" ? "" : <Navbar></Navbar>}</div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Terminals removepath={sethomepath}></Terminals>
            </Route>
            <Route path="/homepage">
              <Homepage></Homepage>
            </Route>
            <Route path="/about" exact>
              <About></About>
            </Route>
            <Route path="/contact" exact>
              <Contactpage></Contactpage>
            </Route>
            <Route path="/portfolios" exact>
              <Portfolios></Portfolios>
            </Route>
            <Route path="/blog" exact>
              <Blog></Blog>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

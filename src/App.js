import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import UploadPage from "./pages/UploadPage/UploadPage";

class App extends React.Component {
  state = {
    didLoad: true
  };

  render() {
    //ONLY RENDERS WHEN THE DATA FROM API HAS COME IN
    if (this.state.didLoad) {
      return (
        <>
          <Router>
            <NavBar />
            <Switch>
              <Route path={"/home/:id"} render={(pathID) => <HomePage pathId={pathID} />} />
              <Route path={"/home"} component={HomePage} pathId={"/home"}/>
              <Route path={"/upload-page"} component={UploadPage} pathId={"/home"}/>
              <Route path={"/"} component={HomePage} pathId={"/"}/>
            </Switch>
          </Router>
        </>
      );
    } else {
      return (<></>)
    }
  }
}

export default App;

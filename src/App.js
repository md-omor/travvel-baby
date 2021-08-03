import { Header } from "./components";
import { SignUpPage, LoginPage, PassRestPage, Home } from "./screen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/rest_pass">
          <PassRestPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

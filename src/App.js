import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetail from "./component/UserDetail";
import UserName from "./component/UserName";
import MainComponent from "./component/MainComponent";
import MainComponentConnet from "./component/MainComponentConnet";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainComponent} />
          {/* <Route path='/' exact component={MainComponentConnet}/> */}
          <Route path="/username" component={UserName} />
          <Route path="/userdetail/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bills from "./pages/Bills";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route  path="/" exact component={Bills} />
        {/*  
        <Route  path="/cadDespesa" component={Bills} />
        <Route  path="/cadReceita" component={Bills} />
        */}
      </Switch>
    </Router>
  )
};

export default App;

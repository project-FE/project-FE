import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import {history} from "./redux/configstore";
import BoardDetail from './pages/BoardDetail';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

        <ConnectedRouter history={history}>

          <Route path="/detail/" exact component={BoardDetail}/>

        </ConnectedRouter>

    </div>
  );
}

export default App;

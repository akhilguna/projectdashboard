import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/Sidebar';
import './styles.css';

import { Menu } from 'styled-icons/feather/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasicTable from './components/Table';
import Update from './components/update'

function App() {
  const [on, setOn] = React.useState(false);

  const handleOn = () => {
    setOn(!on);
  };
  return (
    <div className="App">
      <aside className={on ? 'to-right' : 'no-right'}>
        <a href="#" onClick={handleOn}>
          <Menu size="35" />
        </a>
        <Router>
        <Switch>
          <Route exact path="/">
          <BasicTable/>
          </Route>
          <Route path="/slot">
            <Update />
          </Route>
        </Switch>
        </Router>
      </aside>
      {on && <SideBar openClass="open" />}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

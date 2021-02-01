import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/Sidebar';
import './styles.css';

import { Menu } from 'styled-icons/feather/Menu';
import BasicTable from './components/Table';

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

       <BasicTable/>
      </aside>
      {on && <SideBar openClass="open" />}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

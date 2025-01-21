import './App.css';
import {useState} from 'react';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import { Box, Rss, ShoppingBag, ShoppingCart } from 'lucide-react';
import MenuItem from './components/MenuItem/MenuItem';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <div className="App">
      <SideBar isOpen={sideBarOpen}>
        <MenuItem isCategory>Home</MenuItem>
        <MenuItem><Box /> {sideBarOpen && <p className="menu-text">Modern</p>}</MenuItem>
        <MenuItem><ShoppingBag /> {sideBarOpen && <p className="menu-text">E-commerce</p>}</MenuItem>
        <MenuItem className="mt-20" isCategory>App</MenuItem>
        <MenuItem><Box /> {sideBarOpen && <p className="menu-text">Contacts</p>}</MenuItem>
        <MenuItem><Rss /> {sideBarOpen && <p className="menu-text">Blog </p>}</MenuItem>
        <MenuItem><ShoppingCart /> {sideBarOpen && <p className="menu-text">E-commerce</p>}</MenuItem>
      </SideBar>
      <main className={`App-main ${sideBarOpen && 'sidebar-open'}`}>
        <Header>
          <MenuItem>
            <Button className={`font-lg ${sideBarOpen && 'rotate'}`} onClick={() => setSideBarOpen(!sideBarOpen)}>+</Button>
          </MenuItem>
          <MenuItem>Apps</MenuItem>
          <MenuItem>Chat</MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>Email</MenuItem>
        </Header>
        <div className="dash">
          <Card title="My Chart" subtitle="The best">
            <p>content</p>
          </Card>

        </div>
      </main>
    </div>
  );
}

export default App;

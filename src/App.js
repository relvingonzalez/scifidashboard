import './App.css';
import { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import { Box, Rocket, ShoppingCart } from 'lucide-react';
import MenuItem from './components/MenuItem/MenuItem';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [active, setActive] = useState('home');
  const navigate = useNavigate();
  const handleNavigate = (name, route) => {
    navigate(route);
    setActive(name);
  };
  return (
    <div className="App">
      <SideBar isOpen={sideBarOpen} onToggleOpen={() => setSideBarOpen(!sideBarOpen)}>
        <MenuItem isCategory>{sideBarOpen ? 'Headquarters' : 'HQ'}</MenuItem>
        <MenuItem isActive={active === 'home'} onClick={() => handleNavigate('home', '/')}><Rocket /> {sideBarOpen && <p className="menu-text">Home</p>}</MenuItem>
        <MenuItem className="mt-20" isCategory>{sideBarOpen ? 'International' : 'Intl'}</MenuItem>
        <MenuItem isActive={active === 'contacts'} onClick={() => handleNavigate('contacts', '/contacts')}><Box /> {sideBarOpen && <p className="menu-text">Contacts</p>}</MenuItem>
        <MenuItem isActive={active === 'shop'} onClick={() => handleNavigate('shop', '/shop')}><ShoppingCart /> {sideBarOpen && <p className="menu-text">Market</p>}</MenuItem>
      </SideBar>
      <main className={`App-main ${sideBarOpen && 'sidebar-open'}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

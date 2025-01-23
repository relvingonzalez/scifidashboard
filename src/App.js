import './App.css';
import { useState, useEffect } from 'react';
import SideBar from './components/SideBar/SideBar';
import { Box, Rocket, Store } from 'lucide-react';
import MenuItem from './components/MenuItem/MenuItem';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [active, setActive] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (name, route) => {
    navigate(route);
    setActive(route);
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className="App">
      <SideBar isOpen={sideBarOpen} onToggleOpen={() => setSideBarOpen(!sideBarOpen)}>
        <MenuItem isCategory>{sideBarOpen ? 'Headquarters' : 'HQ'}</MenuItem>
        <MenuItem isActive={active === '/'} onClick={() => handleNavigate('home', '/')}><Rocket /> {sideBarOpen && <p className="menu-text">Home</p>}</MenuItem>
        <MenuItem className="mt-20" isCategory>{sideBarOpen ? 'International' : 'Intl'}</MenuItem>
        <MenuItem isActive={active === '/bounties'} onClick={() => handleNavigate('bounties', '/bounties')}><Box /> {sideBarOpen && <p className="menu-text">Bounties</p>}</MenuItem>
        <MenuItem isActive={active === '/market'} onClick={() => handleNavigate('market', '/market')}><Store /> {sideBarOpen && <p className="menu-text">Market</p>}</MenuItem>
      </SideBar>
      <main className={`App-main ${sideBarOpen && 'sidebar-open'}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

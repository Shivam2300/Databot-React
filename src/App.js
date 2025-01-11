import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
        <SideBar />
        <LeftPanel />
        <RightPanel />
     </div>
  );
}

export default App;

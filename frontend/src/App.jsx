import Topbar from './Dashboard/Topbar';
import Sidebar from './Dashboard/Sidebar';
import Home from './Dashboard/Home';
import Rightbar from './Dashboard/RIghtbar';
import Addpost from './Dashboard/Addpost';
import { useState } from 'react';

function App() {
    const [clicked, setClicked] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const handleClick = (index) => {
    setClicked({
      ...Object.fromEntries(Object.keys(clicked).map((key) => [key, false])), 
      [index]: true,
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar clicked={clicked} handleClick={handleClick} />
        {clicked[0] && <Home />}
        {clicked[3] && <Addpost />}
         <Rightbar />
      </div>
    </div>
  );
}

export default App;

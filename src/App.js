import { useState } from "react";
import { sourdoughContext } from "./helpers/sourdoughContext";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import NameStarter from "./Components/NameStarter/NameStarter";

const App = () => {
  const [sourdough, setSourdough] = useState({});
  return (
    <sourdoughContext.Provider value={{ sourdough, setSourdough }}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/name-starter' element={<NameStarter />} />
        </Routes>
      </div>
    </sourdoughContext.Provider>
  );
};

export default App;

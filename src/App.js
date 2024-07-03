import Create from './Views/Create';
import Forgot from './Views/Forgot';
import Login from './Views/Login';
import logo from './logo.svg';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Create/>}/>
      <Route path='/forgot-password' element={<Forgot/>}/>
     </Routes>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home, Login } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;

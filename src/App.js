import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CreateRaffle from "./Pages/CreateRaffle/CreateRaffle";
import RafflePage from "./Pages/RafflePage/RafflePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateRaffle />}/>
          <Route path="/rafflepage:id" element={<RafflePage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

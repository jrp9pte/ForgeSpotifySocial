import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
<<<<<<< HEAD
import Discussion from "./Components/Discussion/Discussion";
=======
import Login from "./Components/Login/Login.js";
>>>>>>> 9132b623b3017adcfc6007725007febfe5d20dca
import NavigationBar from "./Components/Navigation/NavigationBar";
import SignUp from "./Components/SignUp/Signup";
import UserAccountCreation from "./Components/SignUp/UserAccountCreation"
import TopArtists from "./Components/Discover/topArtists";
import Discover from "./Components/Discover/Discover";
import MyMusic from "./Components/MyMusic/MyMusic";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
        </Routes>
      </Box>
      <Discussion />
=======
          <Route path="/my-music" element={<MyMusic />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Discover />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/accountcreation" element={<UserAccountCreation />} />
          </Routes>
        {/* <TopArtists></TopArtists> */}
>>>>>>> 9132b623b3017adcfc6007725007febfe5d20dca
    </div>
  );
}

export default App;

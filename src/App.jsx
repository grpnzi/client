import "./App.css";
import { Routes, Route, Link} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExperienceDetail from "./pages/ExperienceDetail/ExperienceDetail";


import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import AddToCart from "./pages/Cart/AddToCart";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/country/:location/:experienceId"
          element={
            <IsAnon>
              <ExperienceDetail />
            </IsAnon>
          }
        />
        <Route
          path="/cart"
          element={
            <IsAnon>
              <AddToCart />
            </IsAnon>
          }
        />

      </Routes>
    </div>
  );
}

export default App;

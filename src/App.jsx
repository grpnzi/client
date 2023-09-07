import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExperienceDetail from "./pages/ExperienceDetail/ExperienceDetail";
import Footer from "./components/Footer";
import Experiences from "./pages/Experiences/Experiences";
import AllExperiences from "./pages/AllExperiences";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import AddToCart from "./pages/Cart/AddToCart";
import UserProfile from "./components/Profile/UserProfile";
import AddExperience from "./pages/CreateExperience";
import EditExperience from "./pages/EditExperience";

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
          element={<ExperienceDetail />}
        />
        <Route
          path="/country/:location/experiences"
          element={<Experiences />}
        />

        <Route path="/cart" element={<AddToCart />} />

        <Route path="/profile/:profileId" element={<UserProfile />} />

        <Route path="/create" element={<AddExperience />} />

        <Route path="/country/:location/:experienceId/edit" element={<EditExperience />} />

        <Route path="/search" element={<AllExperiences />}></Route>

        <Route path="/search" element={<SearchBar />}></Route>

        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

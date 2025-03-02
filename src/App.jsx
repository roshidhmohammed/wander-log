import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import GameExperience from "./components/GameExperience";
import DestinationClue from "./components/DestinationClue";
import store from "./utils/store";
import { Provider } from "react-redux";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ResultSuccess from "./components/ResultSuccess";
import ResultFail from "./components/ResultFail";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/game-experience" element={<GameExperience />} />
            <Route path="/destination/:number" element={<DestinationClue />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/success/:destinationId" element={<ResultSuccess />} />
            <Route path="/failed/:destinationId" element={<ResultFail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

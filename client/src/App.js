import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage"; //because of the jsonconfig we dont have to add ./src
import ProfilePage from "scenes/profilePage";


function App() {
  const mode = useSelector((state) => state.mode);
  return (
    <div className="app">
      <BrowserRouter>
      <Router>
        <Route path="/" element = {<LoginPage />} />
        <Route path="/" element = {<HomePage />} />
        <Route path="/" element = {<ProfilePage />} />
       
      </Router>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

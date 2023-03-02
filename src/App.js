import { Route,Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./app.css"
import LandingPage from "./pages/LandingPage";
import Title from "./pages/Title";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="" element={<LandingPage/>}></Route>
          <Route path="/title" element={<Title/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

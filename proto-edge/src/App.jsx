import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Layout/Home";
import Login from "./components/Layout/Login";
import MainPage from "./components/Layout/MainPage";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"*"} element={<Home />}></Route>
        <Route
          path={"/login"}
          element={<Login type="login"></Login>}
        ></Route>{" "}
        <Route
          path={"/registrar"}
          element={<Login type="register"></Login>}
        ></Route>{" "}
        <Route path={"/home"} element={<MainPage></MainPage>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

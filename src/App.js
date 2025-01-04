import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Info from "./pages/info";
import Datail from "./pages/detail";
import Layout from "./components/layout";
import Menu from "./pages/menu";
import Admin from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
          <Route path="/detail/:id" element={<Datail />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

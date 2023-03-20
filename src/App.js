import "./styles.css";
import { useEffect, useState } from "react";
import Favoritos from "./views/Favoritos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Context from "./Context";
import Home from "./views/Home";

export default function App() {


  const [imagenes, setImagenes] = useState([])
  const estadoGlobal = { imagenes, setImagenes }

  const imagenesApi = async () => {
    const endpoint = "/fotos.json";
    const response = await fetch(endpoint)
    const data = await response.json()
    setImagenes(data.photos)
  }
  useEffect(() => {
    imagenesApi();
  }, [])

  return (
    <div className="App">
      <Context.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

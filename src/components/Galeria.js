import Heart from "./Heart";
import { useContext } from "react";
import "../assets/css/galeria.css";
import Context from "../Context";


export default function Home() {

  const { imagenes, setImagenes } = useContext(Context)

  const click = (id) => {
    const actualizar = imagenes.map(e => {
      if (e.id == id) {
        return { ...e, enRojo: !e.enRojo }
      }

      return e
    });
    setImagenes(actualizar)
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {imagenes.map(e => (
        <div className="foto" key={e.id} style={{ backgroundImage: `url(${e.src.tiny})` }} onClick={() => click(e.id)}>
          <Heart filled={e.enRojo} />
        </div>
      ))}
    </div>
  );
}
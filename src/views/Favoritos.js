import Context from "../Context";
import { useContext } from "react";


export default function Favoritos() {

  const { imagenes } = useContext(Context)


  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {
          imagenes.filter(e => e.enRojo).map(e => (
            <div className="foto" key={e.id} style={{ backgroundImage: `url(${e.src.tiny})` }}></div>
          ))
        }
      </div>
    </div>
  );
}
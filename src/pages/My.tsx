import { Link } from "react-router-dom";
import Diagrama from "../assets/diagrama.png";
import "../css/my.css";

export default function My() {
  return (
    <section className="container-main">
      <div className="d-flex-column gap-5">
        <div className="informacion-personal">
          <h2>Datos sobre mí:</h2>
          <ul>
            <li>
              <strong>Creador:</strong> Jhoan Avila Gutierrez
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <Link to="mailto:joria94@hotmail.com"></Link>joria94@hotmail.com
            </li>
            <li>
              <strong>Telefono:</strong> (+57)3203645490
            </li>
            <li>
              <strong>Github:</strong>{" "}
              <Link to="https://github.com/jhoanrcode" target="_blank">
                @jhoanrcode
              </Link>
            </li>
            <li>
              <strong>Linkedin:</strong>{" "}
              <Link to="https://co.linkedin.com/in/jhoanravila" target="_blank">
                HV - Jhoan Avila
              </Link>
            </li>
          </ul>
        </div>
        <div className="informacion-personal">
          <h2>Info del proyecto:</h2>
          <ul>
            <li>
              <strong>Code:</strong> Vite + React v19 + TypeScript
            </li>
            <li>
              <strong>Servicios:</strong> Actualmente se esta consumiendo un{" "}
              <Link to="/data.json" target="_blank">
                data.json
              </Link>{" "}
              que se encuentra en la carpeta <i>'/public'</i>. <br></br>
              Pero el servicio puede ser editado desde <i>
                'services/api.ts'
              </i>{" "}
              cambiando la ruta de la API.<br></br>
              <i>(Editar nombres de object keys)</i>
            </li>
            <li>
              <strong>Responsive:</strong> Proyecto multiplataforma y
              responsive.
            </li>
            <li>
              <strong>Base de datos:</strong> Se ha creado dos tablas{" "}
              <i>'Noticia'</i> y <i>'Seccion'</i>.<br></br>Contienen la info
              presentada para ser consultada desde peticiones. Descargar BD:{" "}
              <Link to="/rest_api.sql" target="_blank">
                BD.sql
              </Link>
            </li>
            <li>
              <img src={Diagrama} alt="Diagrama Base de Datos" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

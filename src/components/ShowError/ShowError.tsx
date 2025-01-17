import "./index.css";
import NotFound from "../../assets/404.svg";
import Empty from "../../assets/Empty.svg";
import { Link } from "react-router-dom";

interface ErrorProps {
  data?: boolean;
  message?: string;
}

export const ShowError = (props: ErrorProps) => {
  return (
    <section className="container-main pageerror">
      <div>
        {props.data ? (
          <img src={Empty} alt="Not Data" />
        ) : (
          <img src={NotFound} alt="Page Not Found" />
        )}
      </div>
      <h2>
        {" "}
        {props.data
          ? "No hay datos. Verifica la conexión API."
          : "Oooops. Lo sentimos!"}
      </h2>
      <Link to={`/`} target="_self" className="btn">
        Ir al inicio
      </Link>
    </section>
  );
};

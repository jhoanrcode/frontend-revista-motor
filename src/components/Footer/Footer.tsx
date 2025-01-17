import "./index.css";
import Icons from "../Icons/Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container d-flex-column">
        <div className="d-flex-row gap-1 py-4">
          <span>Siguenos </span>
          <Icons></Icons>
        </div>
        <span className="py-4 px-2 text-center">
          Poyecto realizado por Jhoan Avila Gutierrez. Contactarme desde mi
          telefono (+57)3203645490 o desde mi email
          <a href="mailto:joria94@hotmail.com" className="link-email">
            joria94@hotmail.com
          </a>
        </span>
        <div className="terminos py-4 d-flex-row justify-content-center gap-2">
          <a href="#" title="Términos y condiciones">
            Términos y condiciones
          </a>
          |
          <a href="#" title="Aviso de privacidad">
            Aviso de privacidad
          </a>
          |
          <a href="#" title="Contáctenos">
            Contáctenos
          </a>
        </div>
        <div className="copyright py-4 px-2">
          COPYRIGHT © 2025 EL TIEMPO Casa Editorial NIT. 860.001.022-7.
          Prohibida su reproducción total o parcial, o su uso para el desarrollo
          de programas de inteligencia artificial o aprendizaje automático, así
          como su traducción a cualquier idioma, sin autorización escrita de su
          titular
        </div>
      </div>
    </footer>
  );
}

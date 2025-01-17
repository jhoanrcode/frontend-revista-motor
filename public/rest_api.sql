-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-01-2025 a las 18:47:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(6) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `resumen` longtext NOT NULL,
  `contenido` longtext NOT NULL,
  `id_seccion` int(6) NOT NULL,
  `img` varchar(255) NOT NULL,
  `autor` varchar(124) NOT NULL,
  `fecha` date NOT NULL,
  `fecha_create` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `resumen`, `contenido`, `id_seccion`, `img`, `autor`, `fecha`, `fecha_create`) VALUES
(1, 'Chrysler Halcyon en camino a producción', 'La compañía planea una versión de producción del futurista cupé de cuatro puertas Halcyon.', '<h2>Zeekr X, el mejor eléctrico de 2024</h2><p>Esta camioneta del grupo Geely fue la ganadora con sus máximas calificaciones en seguridad tanto para adultos, niños, protección a usuarios vulnerables de la vía y asistencias a la conducción en su categoría, que fue la más abultada en las pruebas de Euro NCAP 2024.</p><p>La Zeekr X fue la mejor entre 20 de las camionetas de su categoría, una impresionante cifra y desempeño, si se tiene en cuenta que en 2024 pasaron por las pruebas de Euro NCAP 44 vehículos.<p><figure><img loading=\'lazy\' alt=\'Mercedes Benz Clase E, el carro más seguro de 2024 para Euro NCAP\' src=\'https://www.motor.com.co/__export/1736980141961/sites/motor/img/2025/01/15/captura_de_pantalla_2025-01-15_171959.png_426391372.png\'><figcaption>Aston Martin Vantage Roadster 2026</figcaption></figure>', 1, 'https://www.motor.com.co/__export/1736980320248/sites/motor/img/2025/01/15/captura_de_pantalla_2025-01-15_172041.png_172596871.png', 'Giovanni Avendaño', '2025-01-15', '2025-01-15'),
(2, 'Aston Martin Vantage Roadster 2026: capota veloz y más de 650 HP', 'El deportivo más pequeño de Aston llega equipado con un motor V8 biturbo de 656 caballos de potencia que le permite alcanzar una velocidad máxima de 325 kilómetros por hora. La firma asegura que su capota es la más rápida del mundo.', '<p>Hace casi un año <strong>Aston Martin  </strong>  presentó el nuevo <strong>Vantage  </strong>  . <u> Hoy revela el modelo 2026 en versión descapotable: el<b>Vantage Roadster</b> </u> , el deportivo más pequeño de la marca, fue diseñado y fabricado en paralelo con el cupé, lo que le permitió mantener su peso bajo control sin perder rigidez estructural. El nuevo<em>roadster</em>pesa solo 60 kilos más que su hermano cupé.</p><figure><img loading=\'lazy\' src=\'https://www.motor.com.co/__export/1736964432768/sites/motor/img/2025/01/15/arrod_02.jpg_305410121.jpg\'><figcaption>Aston Martin Vantage Roadster 2026</figcaption></figure><p> <strong>Usa el motor V8 biturbo de 4.0 litros de Aston que genera 656 caballos de potencia y 800 Nm de torque  </strong>  . Alcanza 325 kilómetros por hora y acelera de 0 a 100 km/h en 3.5 segundos. La caja de cambios automática (se opera con levas) de ocho velocidades, va montada en la parte trasera y envía la potencia al diferencial de deslizamiento limitado controlado electrónicamente de&nbsp;las ruedas traseras.</p>', 2, 'https://www.motor.com.co/__export/1736964520182/sites/motor/img/2025/01/15/arrod_01.jpg_172596871.jpg', 'José Durán', '2025-01-12', '2025-01-12'),
(3, 'Tatiana Calderón a las pistas, se retiró Javier Vélez del Dakar 2025', 'Calderón participará este fin de semana en el Road Before 24H de Daytona del IMSA 2025, campeonato en el que estará este año. El motor del carro de Vélez se fundió y lo dejó por fuera del rally.', '<h2>Calderón en IMSA 2025</h2><p>Este fin de semana se encenderán los motores en la pista de Daytona con los entrenamientos para la edición 63 de las 24 Horas de Daytona, prueba del IMSA que se disputará del 23 al 25 de enero y en donde estará presente la piloto colombiana Tatiana Calderón.</p><p>Este llamado Road Before está programado desde el viernes 17 hasta el domingo 18 de enero, con siete sesiones de prácticas en el circuito de 5.6 kilómetros. Tatiana participará a bordo del auto Ford Mustang GT3 #66 del Gradient Racing, hará parte del grupo de pilotos que estarán probando en la categoría GT Daytona, junto con sus compañeros Joey Hand, de Estados Unidos y el británico Till Bechtolsheimer.<p><p>En días pasados la piloto colombiana había confirmado su calendario de temporada 2025 en IMSA que se correrá de la siguiente forma:<p><figure><img loading=\'lazy\' alt=\'Mercedes Benz Clase E, el carro más seguro de 2024 para Euro NCAP\' src=\'https://www.motor.com.co/__export/1706024732369/sites/motor/img/2024/01/23/whatsapp_image_2024-01-22_at_8_10_40_am_1_crop1706024731754.jpeg_307257163.jpeg\'><figcaption>Tatiana Calderon en las 24 horas de Daytona 2024</figcaption></figure><p>Esta edición hasta la etapa 6 fue la de mejor presentación para Vélez, quien cumplía su quinta participación en el rally más duro del mundo. Avanzaban en el P.19 de su categoría, la de Prototipos Ligeros UTV a bordo de una Can Am Maverick X3, entre más de 50 tripulaciones que habían tomado la partida.</p>', 1, 'https://www.motor.com.co/__export/1737048201840/sites/motor/img/2025/01/16/hennessey_warhawk_01_1.jpg_172596871.jpg', 'Giovanni Avendaño', '2025-01-15', '2025-01-15'),
(4, 'Toyota estaría desarrollando un deportivo con motor central y tracción total', 'Sería un bólido tipo MR impulsado por un bloque de 2.0 litros turbo con hasta 600 HP resultado del trabajo de ingenieros y pilotos de carreras de la marca. ¿Sería el nuevo Celica?', '<h2>Zeekr X, el mejor eléctrico de 2024</h2><p>Esta camioneta del grupo Geely fue la ganadora con sus máximas calificaciones en seguridad tanto para adultos, niños, protección a usuarios vulnerables de la vía y asistencias a la conducción en su categoría, que fue la más abultada en las pruebas de Euro NCAP 2024.</p><p>La Zeekr X fue la mejor entre 20 de las camionetas de su categoría, una impresionante cifra y desempeño, si se tiene en cuenta que en 2024 pasaron por las pruebas de Euro NCAP 44 vehículos.<p><figure><img loading=\'lazy\' alt=\'Mercedes Benz Clase E, el carro más seguro de 2024 para Euro NCAP\' src=\'https://www.motor.com.co/__export/1736980141961/sites/motor/img/2025/01/15/captura_de_pantalla_2025-01-15_171959.png_426391372.png\'><figcaption>Aston Martin Vantage Roadster 2026</figcaption></figure>', 3, 'https://www.motor.com.co/__export/1736960245066/sites/motor/img/2025/01/15/captura_de_pantalla_2025-01-15_114657.png_172596871.png', 'Giovanni Avendaño', '2025-01-15', '2025-01-15'),
(5, 'El ‘fantasma’ de Rolls-Royce cumple 100 años', 'Tras ocho generaciones, Phantom es el nombre más antiguo que el fabricante aún utiliza. La próxima generación podría ser totalmente eléctrica. ', '<p>Hace casi un año <strong>Aston Martin  </strong>  presentó el nuevo <strong>Vantage  </strong>  . <u> Hoy revela el modelo 2026 en versión descapotable: el<b>Vantage Roadster</b> </u> , el deportivo más pequeño de la marca, fue diseñado y fabricado en paralelo con el cupé, lo que le permitió mantener su peso bajo control sin perder rigidez estructural. El nuevo<em>roadster</em>pesa solo 60 kilos más que su hermano cupé.</p><figure><img loading=\'lazy\' src=\'https://www.motor.com.co/__export/1736964432768/sites/motor/img/2025/01/15/arrod_02.jpg_305410121.jpg\'><figcaption>Aston Martin Vantage Roadster 2026</figcaption></figure><p> <strong>Usa el motor V8 biturbo de 4.0 litros de Aston que genera 656 caballos de potencia y 800 Nm de torque  </strong>  . Alcanza 325 kilómetros por hora y acelera de 0 a 100 km/h en 3.5 segundos. La caja de cambios automática (se opera con levas) de ocho velocidades, va montada en la parte trasera y envía la potencia al diferencial de deslizamiento limitado controlado electrónicamente de&nbsp;las ruedas traseras.</p>', 2, 'https://www.motor.com.co/__export/1736976373485/sites/motor/img/2025/01/15/poman_01.jpg_172596871.jpg', 'José Durán', '2025-01-12', '2025-01-12'),
(6, 'Mazda CX-60 recibe una inspiración rally en el Salón de Tokio\r\n', 'La marca presentó un prototipo sobre esta camioneta para los rally sobre asfalto. Es el tercer Spirit Racing y cuenta con un alerón trasero y piezas Recaro en fibra de carbono.\r\n', '<h2>Calderón en IMSA 2025</h2><p>Este fin de semana se encenderán los motores en la pista de Daytona con los entrenamientos para la edición 63 de las 24 Horas de Daytona, prueba del IMSA que se disputará del 23 al 25 de enero y en donde estará presente la piloto colombiana Tatiana Calderón.</p><p>Este llamado Road Before está programado desde el viernes 17 hasta el domingo 18 de enero, con siete sesiones de prácticas en el circuito de 5.6 kilómetros. Tatiana participará a bordo del auto Ford Mustang GT3 #66 del Gradient Racing, hará parte del grupo de pilotos que estarán probando en la categoría GT Daytona, junto con sus compañeros Joey Hand, de Estados Unidos y el británico Till Bechtolsheimer.<p><p>En días pasados la piloto colombiana había confirmado su calendario de temporada 2025 en IMSA que se correrá de la siguiente forma:<p><figure><img loading=\'lazy\' alt=\'Mercedes Benz Clase E, el carro más seguro de 2024 para Euro NCAP\' src=\'https://www.motor.com.co/__export/1706024732369/sites/motor/img/2024/01/23/whatsapp_image_2024-01-22_at_8_10_40_am_1_crop1706024731754.jpeg_307257163.jpeg\'><figcaption>Tatiana Calderon en las 24 horas de Daytona 2024</figcaption></figure><p>Esta edición hasta la etapa 6 fue la de mejor presentación para Vélez, quien cumplía su quinta participación en el rally más duro del mundo. Avanzaban en el P.19 de su categoría, la de Prototipos Ligeros UTV a bordo de una Can Am Maverick X3, entre más de 50 tripulaciones que habían tomado la partida.</p>', 3, 'https://www.motor.com.co/__export/1736888663174/sites/motor/img/2025/01/14/captura_de_pantalla_2025-01-14_115314.png_172596871.png', 'Giovanni Avendaño', '2025-01-15', '2025-01-15'),
(7, 'Volkswagen Golf R 2025: con 328 HP es el más potente de la historia', 'Esta edición deportiva del Golf debutó en Estados Unidos con esa impresionante cifra de potencia y lo hizo al tiempo que la edición GTI, más ‘civilizada’, de 242HP.', '<p>Hace casi un año <strong>Aston Martin  </strong>  presentó el nuevo <strong>Vantage  </strong>  . <u> Hoy revela el modelo 2026 en versión descapotable: el<b>Vantage Roadster</b> </u> , el deportivo más pequeño de la marca, fue diseñado y fabricado en paralelo con el cupé, lo que le permitió mantener su peso bajo control sin perder rigidez estructural. El nuevo<em>roadster</em>pesa solo 60 kilos más que su hermano cupé.</p><figure><img loading=\'lazy\' src=\'https://www.motor.com.co/__export/1736964432768/sites/motor/img/2025/01/15/arrod_02.jpg_305410121.jpg\'><figcaption>Aston Martin Vantage Roadster 2026</figcaption></figure><p> <strong>Usa el motor V8 biturbo de 4.0 litros de Aston que genera 656 caballos de potencia y 800 Nm de torque  </strong>  . Alcanza 325 kilómetros por hora y acelera de 0 a 100 km/h en 3.5 segundos. La caja de cambios automática (se opera con levas) de ocho velocidades, va montada en la parte trasera y envía la potencia al diferencial de deslizamiento limitado controlado electrónicamente de&nbsp;las ruedas traseras.</p>', 2, 'https://www.motor.com.co/__export/1732135990769/sites/motor/img/2024/11/20/captura_de_pantalla_2024-11-20_152938.png_172596871.png', 'José Durán', '2025-01-12', '2025-01-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seccion`
--

CREATE TABLE `seccion` (
  `1` int(6) NOT NULL,
  `seccion` varchar(125) NOT NULL,
  `date_created` date NOT NULL,
  `date_update` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `seccion`
--

INSERT INTO `seccion` (`1`, `seccion`, `date_created`, `date_update`) VALUES
(1, 'tecnologia', '2025-01-17', '2025-01-17'),
(2, 'deportes', '2025-01-17', '2025-01-17'),
(3, 'industria', '2025-01-17', '2025-01-17');

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `seccion`
--
ALTER TABLE `seccion`
  ADD PRIMARY KEY (`1`);

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `seccion`
--
ALTER TABLE `seccion`
  MODIFY `1` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

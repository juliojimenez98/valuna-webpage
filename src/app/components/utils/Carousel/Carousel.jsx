import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quincho2 from "../../../assets/imgs/carousel/Quincho2.jpg";
import Ducha from "../../../assets/imgs/carousel/Ducha.jpg";
import Lavamanos from "../../../assets/imgs/carousel/Lavamanos.jpg";
import Tragaluz from "../../../assets/imgs/carousel/Tragaluz.jpg";
import Desague from "../../../assets/imgs/carousel/Desague.jpg";
import Ampliacion2 from "../../../assets/imgs/carousel/Ampliacion2.jpg";
import Gasfiteria2 from "../../../assets/imgs/carousel/Gasfiteria2.jpg";
import EntradaCasa from "../../../assets/imgs/carousel/EntradaCasa.jpg";
import Escalera from "../../../assets/imgs/carousel/Escalera.jpg";
import InstalandoCeramicas from "../../../assets/imgs/carousel/InstalandoCeramicas.jpg";
import Panel from "../../../assets/imgs/carousel/Panel.jpg";
import Quincho3 from "../../../assets/imgs/carousel/Quincho3.jpg";
import Urinarios from "../../../assets/imgs/carousel/Urinarios.jpg";
import Baño from "../../../assets/imgs/carousel/Baño.jpg";

const settings = {
  arrows: true, // muestra las flechas de navegación
  dots: true,
  infinite: true, // permite navegar infinitamente por las diapositivas
  speed: 500, // velocidad de transición entre diapositivas en milisegundos
  slidesToShow: 1, // número de diapositivas a mostrar a la vez
  slidesToScroll: 1, // número de diapositivas a desplazar en cada cambio de diapositiva
  autoplay: {
    delay: 5000, // tiempo de espera entre cada cambio de diapositiva
    autoplaySpeed: 1000, // velocidad de transición entre diapositivas en milisegundos
    pauseOnHover: true, // detener el carousel al pasar el cursor sobre él
  },
  responsive: [
    {
      // Configuración para pantallas grandes (md y superiores)
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const Carousel = () => {
  const imagenes = [
    {
      nombre: "Quincho2",
      ruta: Quincho2,
    },
    {
      nombre: "Ducha",
      ruta: Ducha,
    },
    {
      nombre: "Lavamanos",
      ruta: Lavamanos,
    },
    {
      nombre: "Tragaluz",
      ruta: Tragaluz,
    },
    {
      nombre: "Desague",
      ruta: Desague,
    },
    {
      nombre: "Ampliacion2",
      ruta: Ampliacion2,
    },
    {
      nombre: "Gasfiteria2",
      ruta: Gasfiteria2,
    },
    {
      nombre: "EntradaCasa",
      ruta: EntradaCasa,
    },
    {
      nombre: "Escalera",
      ruta: Escalera,
    },
    {
      nombre: "InstalandoCeramicas",
      ruta: InstalandoCeramicas,
    },
    {
      nombre: "Panel",
      ruta: Panel,
    },
    {
      nombre: "Quincho3",
      ruta: Quincho3,
    },
    {
      nombre: "Urinarios",
      ruta: Urinarios,
    },
    {
      nombre: "Baño",
      ruta: Baño,
    },
  ];

  return (
    <div className="mx-auto w-full md:w-1/2">
      <h1 className="text-3xl my-10 font-semibold text-center text-black capitalize lg:text-4xl ">
        Trabajos Nuestros
      </h1>
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div className="h-72 md:h-128 ">
            <img
              key={index}
              src={imagen.ruta}
              className="h-full w-full object-contain"
              alt={imagen.nombre}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

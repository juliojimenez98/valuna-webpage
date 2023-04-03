import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ampliaciones from "../../../assets/imgs/carousel/Ampliaciones.jpg";
import Cobertizos from "../../../assets/imgs/carousel/Cobertizos.jpg";
import Ceramicas from "../../../assets/imgs/carousel/Ceramicas.jpg";

const settings = {
  dots: true, // muestra los puntos de navegación
  arrows: true, // muestra las flechas de navegación
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
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
  ],
};

const Carousel = () => {
  const imagenes = [
    {
      nombre: "Ampliaciones",
      ruta: Ampliaciones,
    },
    {
      nombre: "Cobertizos",
      ruta: Cobertizos,
    },
    {
      nombre: "Ceramicas",
      ruta: Ceramicas,
    },
  ];

  return (
    <div className="mx-auto w-full md:w-1/2">
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div className="h-64 md:h-96">
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

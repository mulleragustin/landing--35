import svgPaths from "@/imports/svg-vb92qfgzf4";
import svgPathsLogo from "@/imports/svg-lhr0446dji";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logos from "@/imports/Logos";
import rominaImage from "@/assets/foto-romina.jpg";
import ctaVideo from "@/assets/bg +35 optimizado.mp4";
import tinyIcon from "@/assets/Icon-tiny.svg";

// Logo Component
function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[126px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 32">
        <g clipPath="url(#clip0_1_411)">
          <path d={svgPaths.p31420780} fill="black" />
          <path d={svgPaths.p221d2e00} fill="black" />
          <path d={svgPaths.p1810d700} fill="black" />
          <path d={svgPaths.p33d78000} fill="black" />
          <path d={svgPaths.p3681d300} fill="black" />
          <g>
            <path d={svgPaths.p326df800} fill="black" />
            <path d={svgPaths.p3033a680} fill="black" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_411">
            <rect fill="white" height="32" width="126" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="bg-[#00ef9c] flex items-center justify-between px-[20px] md:px-[109px] py-[15px] sticky top-0 z-50 w-full">
      <Logo />
      <div className="font-['Montserrat'] font-bold hidden md:flex gap-[90px] text-[14px] text-black">
        <p>SUSCRIPCIONES</p>
        <p>PROGRAMAS</p>
        <p className="text-[16px]">SHOP</p>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="size-[36px]">
          <svg className="block size-full" fill="none" viewBox="0 0 36 36">
            <path d={svgPaths.p1deabc00} fill="black" />
          </svg>
        </div>
        <div className="bg-[#002216] px-[12px] md:px-[16px] py-[10px] md:py-[14px] rounded-[4px]">
          <p className="font-['Montserrat'] font-bold text-[12px] md:text-[16px] text-white">
            MI CUENTA
          </p>
        </div>
      </div>
    </div>
  );
}

const getHookIndexFromPath = (pathname: string) => {
  const normalizedPath = pathname.toLowerCase().replace(/\/+$/, "");
  const segment = normalizedPath.split("/").filter(Boolean).pop();

  if (segment === "add2") {
    return 1;
  }

  if (segment === "add3") {
    return 2;
  }

  return 0;
};

const productUrl = "https://rominatraetta.com/producto/35-fuerza-sin-impacto/";
const productUrlUsd = "https://rominatraetta.com/producto/35-fuerza-sin-impacto/?currency=USD";

// Hero Section
function HeroSection() {
  const hookOptions = [
    {
      id: "hook-1",
      label: "Hook 1",
      text: "El método secreto para mujeres de +35 años para volver a sentirse jóvenes y bellas con su cuerpo",
    },
    {
      id: "hook-2",
      label: "Hook 2",
      text: "Cómo cambiar tu cuerpo después de los 35 usando fuerza sin impacto",
    },
    {
      id: "hook-3",
      label: "Hook 3",
      text: "El método de fuerza sin impacto que permite a mujeres +35 verse más firmes sin dolor ni exigencia extrema",
    },
  ];
  const [hookIndex, setHookIndex] = React.useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    return getHookIndexFromPath(window.location.pathname);
  });

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handlePopState = () => {
      setHookIndex(getHookIndexFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-[#fdf5ff] to-white py-[30px] md:py-[50px] px-[20px] md:px-[109px]">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[150px] left-[50px] md:left-[100px] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#cd7fea] opacity-[0.06] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[150px] right-[50px] md:right-[100px] w-[180px] md:w-[350px] h-[180px] md:h-[350px] bg-[#6e2682] opacity-[0.06] rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Logo RTFIT + 35 Fuerza Sin Impacto - Más compacto */}
        <div className="mb-[20px] md:mb-[30px] flex justify-center w-full">
          <div className="h-[100px] md:h-[180px] w-[212px] md:w-[382px]">
            <Logos />
          </div>
        </div>

        {/* Headline Text - Mejorada jerarquía */}
        <div className="text-center mb-[25px] md:mb-[40px] w-full">
          <h1 className="font-['EB Garamond'] font-bold text-[#6e2682] text-[28px] md:text-[62px] leading-[1.15] mb-4 md:mb-6 px-2 text-balance">
            {hookOptions[hookIndex]?.text ?? hookOptions[0].text}
          </h1>

          {/* Prueba Social - Badge destacado */}
          <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#cd7fea] to-[#b968d1] rounded-full px-[16px] md:px-[32px] py-[12px] md:py-[16px] mb-4 md:mb-6 shadow-lg max-w-full">
            <div className="flex -space-x-1 md:-space-x-2">
              <div className="w-[26px] md:w-[36px] h-[26px] md:h-[36px] rounded-full bg-white border-2 border-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/avatars/avatar-1.png"
                  alt="Alumna 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[26px] md:w-[36px] h-[26px] md:h-[36px] rounded-full bg-white border-2 border-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/avatars/avatar-2.png"
                  alt="Alumna 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[26px] md:w-[36px] h-[26px] md:h-[36px] rounded-full bg-white border-2 border-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/avatars/avatar-3.png"
                  alt="Alumna 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="font-['Montserrat'] font-bold text-white text-[13px] md:text-[18px] leading-tight">
              +5000 alumnas ya transformaron su cuerpo
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <p className="font-['Montserrat'] font-bold text-[#cd7fea] text-[19px] md:text-[30px] leading-[1.3] text-balance">
              SIN impacto, cuidando tus articulaciones
            </p>
            <p className="font-['Montserrat'] font-semibold text-[#6e2682] text-[16px] md:text-[24px] leading-[1.4] text-balance">
              En 4 semanas · 20 minutos por día · sin dietas restrictivas · fuerza sin impacto
            </p>
          </div>
        </div>

        {/* VSL Video Container */}

        <div className="relative w-full max-w-[800px] mb-[30px] md:mb-[40px] rounded-[10px] overflow-hidden border-[3px] md:border-[6px] border-[#cd7fea]">
          <div className="relative w-full pt-[56.2%]">
            <iframe
              title="VSL"
              src="https://iframe.mediadelivery.net/embed/245855/a9ffd09a-2a97-4fad-83f1-bdaabf746483?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom Text and CTA */}
        <div className="text-center w-full">
          <p className="font-['Montserrat'] font-semibold text-[#6e2682] text-[16px] md:text-[24px] mb-[20px] md:mb-[30px] leading-[1.4] text-balance">
            Un plan simple, pensado para que esta vez sí lo sostengas
          </p>

          <a
            href={productUrl}
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] transition-all duration-300 px-[32px] md:px-[70px] py-[18px] md:py-[26px] rounded-[12px] font-['Montserrat'] font-bold text-white text-[18px] md:text-[24px] shadow-2xl hover:shadow-[0_20px_60px_rgba(205,127,234,0.5)] hover:scale-[1.05] transform w-full md:w-auto"
          >
            Quiero entrenar sin exigirme
          </a>
        </div>
      </div>
    </div>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = React.useState<{ url: string; label: string } | null>(
    null,
  );

  // Componentes de flechas personalizadas
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <svg
          className="w-[20px] h-[20px] text-white transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <svg
          className="w-[20px] h-[20px] text-white transition-transform duration-300 group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    arrows: true, // Las flechas están ocultas en mobile con CSS
  };

  // Array de testimonios - solo con antes/después
  const testimonials = [
    {
      id: 1,
      name: "Carla, 39 años",
      subtitle: "Trabaja sentada todo el día",
      initial: "C",
      quote: "Tenía poca energía, se sentía inflamada",
      beforeImage: "/casos/CASO-1-ANTES.jpg",
      afterImage: "/casos/CASO-1-DESPUES.jpg",
      resultTitle: "En 4 semanas con fuerza sin impacto:",
      resultText:
        "se sintió más firme, más liviana, ganó fuerza y volvió a entrenar sin miedo a lesionarse.",
    },
    {
      id: 2,
      name: "Sole, 46 años",
      subtitle: "Probó rutinas intensas",
      initial: "S",
      quote: "Probó rutinas intensas y solo conseguía cansancio y frustración",
      beforeImage: "/casos/caso-2-antes.jpg",
      afterImage: "/casos/CASO-2-DESPUES.jpg",
      resultTitle: "Con el plan sin impacto:",
      resultText: "volvió a sentirse constante y notó cambios reales en su cuerpo.",
    },
    {
      id: 3,
      name: "Sole, 46 años",

      initial: "S",
      quote: "Probó rutinas intensas y solo conseguía cansancio y frustración",
      beforeImage: "/casos/CASO-3-ANTES.jpg",
      afterImage: "/casos/CASO-3-DESPUES.jpg",
      resultTitle: "Con el programa +35:",
      resultText: "vió cambios reales y mantuvo hábitos saludables a lo largo del tiempo.",
    },
    {
      id: 4,
      name: "Sole, 46 años",

      initial: "S",
      quote: "Probó rutinas intensas y solo conseguía cansancio y frustración",
      beforeImage: "/casos/CASO-4-ANTES.jpg",
      afterImage: "/casos/CASO-4-DESPUES.jpg",
    },
    // Aquí puedes agregar más testimonios fácilmente
    {
      id: 5,
      name: "Sole, 46 años",

      initial: "S",
      quote: "Probó rutinas intensas y solo conseguía cansancio y frustración",
      beforeImage: "/casos/CASO-5-ANTES.jpg",
      afterImage: "/casos/CASO-5-DESPUES.jpg",
    },
    {
      id: 6,
      name: "Sole, 46 años",

      initial: "S",
      quote: "Probó rutinas intensas y solo conseguía cansancio y frustración",
      beforeImage: "/casos/CASO-6-ANTES.jpg",
      afterImage: "/casos/CASO-6-DESPUES.jpg",
    },
    {
      id: 7,
      name: "Sole, 46 años",

      initial: "S",
      quote: "Probó rutinas intensas y solo conseguía cansancio y frustración",
      beforeImage: "/casos/CASO-7-ANTES.jpg",
      afterImage: "/casos/CASO-7-DESPUES.jpg",
    },
  ];

  return (
    <div className="relative py-[30px] md:py-[60px] px-[16px] md:px-[109px] bg-gradient-to-b from-[#f6eafd] via-[#fdf5ff] to-[#f6eafd]">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[100px] left-[20px] md:left-[80px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#cd7fea] opacity-[0.08] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[150px] right-[20px] md:right-[80px] w-[200px] md:w-[350px] h-[200px] md:h-[300px] bg-[#6e2682] opacity-[0.08] rounded-full blur-[100px]"></div>

      <div className="relative z-10">
        <div className="text-center mb-[25px] md:mb-[50px]">
          <div className="inline-block bg-white border-2 border-[#cd7fea] rounded-full px-[16px] md:px-[28px] py-[8px] md:py-[12px] mb-3 md:mb-6">
            <p className="font-['Montserrat'] font-bold text-[#cd7fea] text-[11px] md:text-[14px] tracking-wider uppercase">
              Testimonios Reales
            </p>
          </div>

          <h2 className="font-['EB Garamond'] font-bold text-[#6e2682] text-[26px] md:text-[52px] text-balance">
            Así podes cambiar en 4 semanas
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2 md:px-4">
                <div className="bg-white rounded-[20px] md:rounded-[30px] p-[20px] md:p-[50px] border-2 md:border-4 border-[#cd7fea] shadow-xl flex flex-col">
                  {/* Imágenes antes/después con aspect ratio fijo */}
                  <div className="grid grid-cols-2 gap-[12px] md:gap-[30px] mb-[18px] md:mb-[30px]">
                    <div
                      className="relative md:cursor-default cursor-pointer active:scale-95 md:active:scale-100 transition-transform"
                      onClick={() =>
                        setSelectedImage({ url: testimonial.beforeImage, label: "ANTES" })
                      }
                    >
                      <div className="absolute top-[10px] md:top-[15px] left-[10px] md:left-[15px] bg-white border-2 border-[#6e2682] rounded-full px-[10px] md:px-[16px] py-[5px] md:py-[8px] z-10 pointer-events-none shadow-lg">
                        <p className="font-['Montserrat'] font-bold text-[#6e2682] text-[11px] md:text-[14px]">
                          ANTES
                        </p>
                      </div>
                      {/* Icono de zoom solo en mobile */}
                      <div className="md:hidden absolute bottom-[10px] right-[10px] bg-white/95 rounded-full p-[7px] z-10 pointer-events-none shadow-md">
                        <svg
                          className="w-[16px] h-[16px]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#6e2682"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                          />
                        </svg>
                      </div>
                      <div className="aspect-[3/4] rounded-[12px] md:rounded-[20px] border-2 border-[#e1b4f3] overflow-hidden bg-[#F6EAFD]">
                        <img
                          src={testimonial.beforeImage}
                          alt={`Antes - Caso ${testimonial.id}`}
                          className="w-full h-full object-cover scale-[1.06] md:scale-[1.08] origin-center transform"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div
                      className="relative md:cursor-default cursor-pointer active:scale-95 md:active:scale-100 transition-transform"
                      onClick={() =>
                        setSelectedImage({ url: testimonial.afterImage, label: "DESPUÉS" })
                      }
                    >
                      <div className="absolute top-[10px] md:top-[15px] left-[10px] md:left-[15px] bg-gradient-to-br from-[#cd7fea] to-[#b968d1] rounded-full px-[10px] md:px-[16px] py-[5px] md:py-[8px] z-10 pointer-events-none shadow-lg">
                        <p className="font-['Montserrat'] font-bold text-white text-[11px] md:text-[14px]">
                          DESPUÉS
                        </p>
                      </div>
                      {/* Icono de zoom solo en mobile */}
                      <div className="md:hidden absolute bottom-[10px] right-[10px] bg-white/95 rounded-full p-[7px] z-10 pointer-events-none shadow-md">
                        <svg
                          className="w-[16px] h-[16px]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#6e2682"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                          />
                        </svg>
                      </div>
                      <div className="aspect-[3/4] rounded-[12px] md:rounded-[20px] border-2 md:border-4 border-[#cd7fea] overflow-hidden bg-[#F6EAFD]">
                        <img
                          src={testimonial.afterImage}
                          alt={`Despues - Caso ${testimonial.id}`}
                          className="w-full h-full object-cover scale-[1.06] md:scale-[1.08] origin-center transform"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  {testimonial.resultTitle && testimonial.resultText && (
                    <div className="bg-gradient-to-br from-[#cd7fea] to-[#b968d1] rounded-[12px] md:rounded-[20px] p-[18px] md:p-[30px] text-white">
                      <h4 className="font-['EB Garamond'] font-bold text-[16px] md:text-[24px] mb-2 md:mb-3 leading-[1.25]">
                        {testimonial.resultTitle}
                      </h4>
                      <p className="font-['Montserrat'] text-[14px] md:text-[19px] leading-[1.6]">
                        {testimonial.resultText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-[40px] md:mt-[60px] px-4">
          <a
            href={productUrl}
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] transition-all duration-300 px-[40px] md:px-[60px] py-[18px] md:py-[24px] rounded-[12px] font-['Montserrat'] font-bold text-white text-[18px] md:text-[22px] shadow-xl hover:shadow-2xl hover:scale-[1.03] transform w-full md:w-auto"
          >
            QUIERO UNIRME AHORA
          </a>
        </div>
      </div>

      {/* Modal Lightbox para imágenes - Solo mobile */}
      {selectedImage && (
        <div
          className="md:hidden fixed inset-0 bg-black/96 z-[100] flex items-center justify-center p-5 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 w-[44px] h-[44px] bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-[24px] h-[24px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full max-w-[500px]" onClick={(e) => e.stopPropagation()}>
            {/* Badge label */}
            <div
              className={`mb-5 inline-block ${selectedImage.label === "DESPUÉS" ? "bg-gradient-to-br from-[#cd7fea] to-[#b968d1]" : "bg-white"} rounded-full px-[18px] py-[9px] shadow-xl border-2 ${selectedImage.label === "DESPUÉS" ? "border-white/20" : "border-[#cd7fea]"}`}
            >
              <p
                className={`font-['Montserrat'] font-bold ${selectedImage.label === "DESPUÉS" ? "text-white" : "text-[#6e2682]"} text-[15px]`}
              >
                {selectedImage.label}
              </p>
            </div>

            {/* Imagen */}
            <div className="aspect-[3/4] rounded-[20px] border-4 border-[#cd7fea] overflow-hidden shadow-2xl">
              <img
                src={selectedImage.url}
                alt={`Imagen ampliada - ${selectedImage.label}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="font-['Montserrat'] text-white text-center mt-5 text-[14px] opacity-90 leading-[1.5]">
              Toca fuera de la imagen para cerrar
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Text Testimonials Section
function TextTestimonialsSection() {
  const textTestimonials = [
    {
      id: 1,
      text: "El programa +35 me cambió la vida. Pasé de la obesidad a un camino saludable. Antes me costaba mucho entrenar, pero este plan logró levantarme de la cama y hoy lo disfruto.",
    },
    {
      id: 2,
      text: "Estaba muerta de cansancio y dolor de cabeza, a punto de no entrenar. Pero arranqué y me cambió el día. Mejoró mi cuerpo, pero sobre todo mi salud, y eso no tiene precio.",
    },
    {
      id: 3,
      text: "Llegué sin esperanza y por urgencia médica. Hoy tengo 55 años pero me siento de 30: mis exámenes dieron perfecto, bajó el colesterol y se fueron los dolores de menopausia.",
    },
    // Agrega más testimonios aquí
  ];

  return (
    <div className="relative py-[30px] md:py-[70px] px-[20px] md:px-[109px] bg-white">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[80px] left-[20px] md:left-[80px] w-[180px] md:w-[260px] h-[180px] md:h-[260px] bg-[#cd7fea] opacity-[0.06] rounded-full blur-[90px]"></div>
      <div className="absolute bottom-[80px] right-[20px] md:right-[80px] w-[180px] md:w-[260px] h-[180px] md:h-[260px] bg-[#6e2682] opacity-[0.06] rounded-full blur-[90px]"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-[25px] md:mb-[45px]">
          <h2 className="font-['EB Garamond'] font-bold text-[#6e2682] text-[24px] md:text-[44px] text-balance">
            Lo que dicen quienes ya entrenaron
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[24px]">
          {textTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[16px] md:rounded-[20px] p-[18px] md:p-[26px] border-2 border-[#cd7fea] shadow-lg flex flex-col gap-[14px] md:gap-[18px]"
            >
              <p className="font-['Montserrat'] text-[#6e2682] text-[14px] md:text-[16px] leading-[1.7] italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Checkmark Icon Component
function CheckIcon() {
  return (
    <div className="size-[24px] flex-shrink-0 mt-1">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#clipcheck)">
          <path d={svgPaths.p3acae200} fill="#CD7FEA" />
          <path d={svgPaths.p3be83f00} fill="#6E2682" />
        </g>
        <defs>
          <clipPath id="clipcheck">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <div className="relative py-[50px] md:py-[100px] px-[20px] md:px-[109px] bg-white">
      {/* Fondo decorativo con gradiente */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-gradient-to-br from-gray-100 via-gray-50 to-white"></div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[100px] left-[20px] md:left-[50px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#cd7fea] opacity-[0.08] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[100px] right-[20px] md:right-[100px] w-[180px] md:w-[250px] h-[180px] md:h-[250px] bg-[#6e2682] opacity-[0.08] rounded-full blur-[80px]"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[80px] items-center">
          {/* Card única con ambos precios - IZQUIERDA */}
          <div className="relative">
            {/* Sombra decorativa de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#cd7fea] to-[#b968d1] opacity-20 blur-xl rounded-[30px] scale-[1.02]"></div>

            <div className="relative bg-white border-4 border-[#cd7fea] rounded-[20px] md:rounded-[30px] p-[30px] md:p-[50px] shadow-2xl">
              {/* Header del precio */}
              <div className="text-center mb-[30px] md:mb-[40px] pb-[20px] md:pb-[30px] border-b-2 border-[#f6eafd]">
                <div className="inline-block bg-gradient-to-r from-[#cd7fea] to-[#b968d1] px-[20px] md:px-[24px] py-[6px] md:py-[8px] rounded-full mb-3 md:mb-4">
                  <p className="font-['Montserrat'] font-bold text-white text-[12px] md:text-[14px] tracking-wider">
                    OFERTA ESPECIAL
                  </p>
                </div>

                <p className="font-['Integral_CF'] text-[#9a9a9a] text-[22px] md:text-[28px] leading-[1] mb-1 whitespace-nowrap line-through">
                  $73.690 <span className="text-[#9a9a9a]">-</span> 60 USD
                </p>
                <p className="font-['Integral_CF'] text-[#cd7fea] text-[36px] md:text-[52px] leading-[1] mb-2 md:mb-3 whitespace-nowrap">
                  $52.000 <span className="text-[#6e2682]">-</span> 45 USD
                </p>
                <p className="font-['Montserrat'] font-bold text-[#6e2682] text-[12px] md:text-[14px] uppercase tracking-wide mb-2 px-2">
                  Pesos Argentinos o si estás en el exterior
                </p>
              </div>

              {/* Lista de beneficios */}
              <div className="space-y-3 md:space-y-4 font-['Montserrat'] text-[#6e2682] text-[15px] md:text-[18px] mb-[30px] md:mb-[40px]">
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckIcon />
                  <p className="font-semibold leading-[1.5]">4 clases por semana (20 min)</p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <CheckIcon />
                  <p className="font-semibold leading-[1.5]">4 meses de acceso</p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <CheckIcon />
                  <p className="leading-[1.5]">
                    Movilidad y estiramientos para rodillas, caderas y espalda
                  </p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <CheckIcon />
                  <p className="leading-[1.5]">Guía nutricional de acompañamiento</p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <CheckIcon />
                  <p className="leading-[1.5]">
                    Seguimiento y comunidad para sostener la constancia
                  </p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <CheckIcon />
                  <p className="leading-[1.5]">Soporte 24/7</p>
                </div>
              </div>

              {/* Botón CTA mejorado */}
              <a
                href={productUrl}
                className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] transition-all duration-300 w-full px-[24px] py-[20px] md:py-[24px] rounded-[12px] font-['Montserrat'] font-bold text-white text-[19px] md:text-[22px] shadow-xl hover:shadow-2xl hover:scale-[1.03] transform"
              >
                ¡LO QUIERO!
              </a>

              <p className="font-['Montserrat'] text-[#6e2682] text-[13px] md:text-[15px] text-center mt-4 opacity-70 leading-[1.4]">
                Acceso inmediato después del pago
              </p>
            </div>
          </div>

          {/* Lado derecho - Títulos y explicación */}
          <div className="pt-0 lg:pt-0">
            {/* Títulos */}
            <div className="text-center lg:text-left mb-[15px] md:mb-[20px]">
              <h2 className="font-['EB Garamond'] font-bold text-[#6e2682] text-[32px] md:text-[52px] leading-[1.1] mb-2 md:mb-3">
                Acceso al programa
              </h2>
              <h3 className="font-['EB Garamond'] font-bold text-[#cd7fea] text-[28px] md:text-[48px] mb-4 md:mb-6 text-balance">
                +35 Fuerza Sin Impacto
              </h3>

              {/* Prueba Social - Badge con número */}
              <div className="inline-block">
                <div className="bg-white border-2 border-[#cd7fea] rounded-full px-[16px] md:px-[32px] py-[10px] md:py-[16px] shadow-lg">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="bg-gradient-to-br from-[#cd7fea] to-[#b968d1] rounded-full w-[32px] md:w-[50px] h-[32px] md:h-[50px] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-['Montserrat'] font-bold text-[#6e2682] text-[13px] md:text-[18px] leading-tight">
                      +5000 alumnas hicieron exitosamente este programa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-['EB Garamond'] font-bold text-[#6e2682] text-[28px] md:text-[36px] text-center lg:text-left mb-[15px] md:mb-[20px] leading-[1.2]">
              ¿Por qué solo este precio?
            </h3>

            <p className="font-['Montserrat'] text-[#6e2682] text-[16px] md:text-[18px] leading-[1.8] text-center lg:text-left mb-[25px] md:mb-[30px] text-balance">
              Porque quiero que cualquier mujer +35 pueda acceder a un plan que sí sostengan en el
              tiempo,
              <span className="font-bold text-[#cd7fea]"> sin gastar fortunas en gimnasios</span>,
              sin rutinas imposibles y sin soluciones que duran unas semanas y después abandonan.
            </p>

            {/* Precio destacado con círculo */}
            <div className="flex items-center justify-center lg:justify-start mb-[15px] md:mb-[20px]">
              <div className="relative">
                {/* Glow sutil */}
                <div className="absolute inset-0 bg-[#cd7fea] opacity-20 blur-2xl rounded-full scale-110"></div>

                <div className="relative bg-gradient-to-br from-[#cd7fea] via-[#b968d1] to-[#a557bd] rounded-full w-[200px] md:w-[240px] h-[200px] md:h-[240px] flex flex-col items-center justify-center shadow-2xl animate-float">
                  <p className="font-['Montserrat'] text-white text-[12px] md:text-[14px] font-bold mb-1 tracking-wider">
                    MENOS DE
                  </p>
                  <p className="font-['Integral_CF'] text-white text-[42px] md:text-[52px] leading-[1]">
                    $433
                  </p>
                  <p className="font-['Montserrat'] text-white text-[18px] md:text-[22px] font-bold">
                    EL DÍA
                  </p>
                </div>
              </div>
            </div>

            <p className="font-['Montserrat'] text-[#6e2682] text-[14px] md:text-[16px] text-center lg:text-left opacity-70 italic">
              *Basado en 4 meses de acceso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// About Romina Section
function AboutSection() {
  return (
    <div className="relative py-[35px] md:py-[70px] px-[20px] md:px-[109px] bg-gradient-to-b from-white via-[#fdf5ff] to-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[80px] left-[20px] md:left-[100px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#cd7fea] opacity-[0.05] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[100px] right-[20px] md:right-[80px] w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-[#6e2682] opacity-[0.05] rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[100px] items-center">
          {/* Lado izquierdo - Espacio para imagen */}
          <div className="relative">
            {/* Contenedor de la imagen principal - LISTO PARA TU IMAGEN */}
            <div className="relative rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl min-h-[400px] md:min-h-[600px]">
              <img
                src={rominaImage}
                alt="Romina Traetta"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Lado derecho - Contenido mejorado */}
          <div>
            {/* Badge superior */}
            <div className="flex justify-center lg:justify-start mb-4 md:mb-6">
              <div className="bg-gradient-to-r from-[#f6eafd] to-[#fdf5ff] border-2 border-[#cd7fea] rounded-full px-[20px] md:px-[24px] py-[8px] md:py-[10px]">
                <p className="font-['Montserrat'] font-bold text-[#cd7fea] text-[12px] md:text-[14px] tracking-wider uppercase">
                  Conocé a tu entrenadora
                </p>
              </div>
            </div>

            <h2 className="font-['EB Garamond'] font-bold text-[#cd7fea] text-[28px] md:text-[42px] mb-5 md:mb-7 leading-[1.2] text-center lg:text-left text-balance">
              Soy Romina Traetta, entrenadora y creadora del programa +35 Fuerza Sin Impacto.
            </h2>

            <div className="space-y-3 md:space-y-5 mb-5 md:mb-7">
              {/* Highlight principal */}
              <div className="bg-gradient-to-r from-[#f6eafd] to-transparent border-l-4 border-[#cd7fea] p-[16px] md:p-[20px] rounded-[8px]">
                <p className="font-['Montserrat'] font-bold text-[#6e2682] text-[17px] md:text-[20px] leading-[1.4] text-center lg:text-left text-balance">
                  "Entreno para sentirme fuerte, liviana y con energía".
                </p>
              </div>

              {/* Texto normal */}
              <p className="font-['Montserrat'] text-[#6e2682] text-[15px] md:text-[17px] leading-[1.8] text-center lg:text-left text-balance">
                Hace años que aplico fuerza sin impacto porque es lo que me deja sostener mi físico
                sin dolor, sin lesiones y sin abandonar.
              </p>

              {/* Highlight secundario */}
              <div className="bg-white border-2 border-[#cd7fea] p-[16px] md:p-[20px] rounded-[12px] shadow-lg">
                <p className="font-['Montserrat'] font-semibold text-[#6e2682] text-[16px] md:text-[18px] leading-[1.6] text-center lg:text-left text-balance">
                  Este método está pensado para mujeres +35 con poco tiempo y ganas de resultados
                  reales.
                </p>
              </div>
            </div>

            {/* Stats o datos destacados */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-7">
              <div className="text-center bg-gradient-to-br from-[#f6eafd] to-white border-2 border-[#e1b4f3] rounded-[12px] p-[16px] md:p-[20px]">
                <p className="font-['Integral_CF'] text-[#cd7fea] text-[26px] md:text-[32px] leading-[1] mb-1">
                  20'
                </p>
                <p className="font-['Montserrat'] text-[#6e2682] text-[12px] md:text-[13px] font-semibold">
                  por clase
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-[#f6eafd] to-white border-2 border-[#e1b4f3] rounded-[12px] p-[16px] md:p-[20px]">
                <p className="font-['Integral_CF'] text-[#cd7fea] text-[26px] md:text-[32px] leading-[1] mb-1">
                  4x
                </p>
                <p className="font-['Montserrat'] text-[#6e2682] text-[12px] md:text-[13px] font-semibold">
                  semana
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-[#f6eafd] to-white border-2 border-[#e1b4f3] rounded-[12px] p-[16px] md:p-[20px]">
                <p className="font-['Integral_CF'] text-[#cd7fea] text-[26px] md:text-[32px] leading-[1] mb-1">
                  0
                </p>
                <p className="font-['Montserrat'] text-[#6e2682] text-[12px] md:text-[13px] font-semibold">
                  impacto
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <a
                href={productUrl}
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] transition-all duration-300 px-[30px] md:px-[40px] py-[16px] md:py-[18px] rounded-[12px] font-['Montserrat'] font-bold text-white text-[16px] md:text-[18px] shadow-lg hover:shadow-xl hover:scale-[1.02] transform w-full md:w-auto"
              >
                QUIERO ENTRENAR CON ROMINA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CTA Section
function CTASection() {
  return (
    <div className="relative py-[60px] md:py-[100px] overflow-hidden min-h-[360px] md:min-h-[520px] lg:min-h-[600px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={ctaVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Círculos decorativos */}
      <div className="absolute top-[50px] left-[20px] md:left-[100px] w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-[#cd7fea] opacity-[0.08] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[50px] right-[20px] md:right-[100px] w-[180px] md:w-[300px] h-[180px] md:h-[300px] bg-[#6e2682] opacity-[0.08] rounded-full blur-[80px]"></div>

      <div className="relative z-10 max-w-[900px] mx-auto text-center px-[20px] md:px-[109px]">
        <div className="inline-block bg-white border-2 border-[#cd7fea] rounded-full px-[20px] md:px-[28px] py-[10px] md:py-[12px] mb-6 md:mb-8">
          <p className="font-['Montserrat'] font-bold text-[#cd7fea] text-[12px] md:text-[14px] tracking-wider uppercase">
            Tu Transformación Empieza Hoy
          </p>
        </div>

        <h2 className="font-['EB Garamond'] font-bold text-[#6e2682] text-[32px] md:text-[56px] mb-3 md:mb-5 leading-[1.2] px-4 text-balance">
          Es tu momento de volver a sentirte bien
        </h2>

        <p className="font-['Montserrat'] font-semibold text-[#6e2682] text-[18px] md:text-[26px] mb-6 md:mb-8 px-4 text-balance">
          4 semanas · 20 minutos · Fuerza sin impacto desde casa.
        </p>

        <a
          href={productUrl}
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] transition-all duration-300 px-[40px] md:px-[70px] py-[20px] md:py-[26px] rounded-[12px] font-['Montserrat'] font-bold text-white text-[18px] md:text-[24px] shadow-2xl hover:shadow-[0_20px_60px_rgba(205,127,234,0.4)] hover:scale-[1.05] transform w-full md:w-auto"
        >
          QUIERO UNIRME A +35
        </a>
      </div>
    </div>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo?",
      answer: "4 clases por semana.",
    },
    {
      question: "¿Cuánto tiempo por clase?",
      answer: "Clases de 20' NonStop full body sin salto.",
    },
    {
      question: "¿Cuáles son los elementos?",
      answer: "Colchoneta, mancuernas, tobilleras y deslizadores o medias viejas.",
    },
    {
      question: "¿Para quién está orientado?",
      answer:
        "Para todas las personas que quieran ganar fuerza, salud, resistencia. Apto para embarazadas.",
    },
    {
      question: "¿Es una dieta restrictiva?",
      answer:
        "No. El programa incluye una guía nutricional de acompañamiento, sin dietas restrictivas ni prohibiciones extremas.",
    },
    {
      question: "¿Cómo son los ejercicios?",
      answer:
        "Clases guiadas, cuido tu técnica, resultados reales, trabajo de fuerza a conciencia sin impacto. Las clases son todas diferentes.",
    },
  ];

  return (
    <div className="relative py-[50px] md:py-[100px] px-[20px] md:px-[109px] bg-gradient-to-b from-white via-[#fdf5ff] to-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[100px] right-[20px] md:right-[100px] w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-[#cd7fea] opacity-[0.05] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[100px] left-[20px] md:left-[100px] w-[180px] md:w-[300px] h-[180px] md:h-[300px] bg-[#6e2682] opacity-[0.05] rounded-full blur-[80px]"></div>

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Título */}
        <div className="text-center mb-[40px] md:mb-[60px]">
          <div className="inline-block bg-gradient-to-r from-[#f6eafd] to-[#fdf5ff] border-2 border-[#cd7fea] rounded-full px-[20px] md:px-[28px] py-[10px] md:py-[12px] mb-4 md:mb-6">
            <p className="font-['Montserrat'] font-bold text-[#cd7fea] text-[12px] md:text-[14px] tracking-wider uppercase">
              Preguntas Frecuentes
            </p>
          </div>
        </div>

        {/* Acordeones */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#cd7fea] rounded-[12px] md:rounded-[16px] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-[20px] md:px-[30px] py-[20px] md:py-[26px] flex items-center justify-between gap-3 md:gap-4 text-left transition-all duration-300 hover:bg-[#f6eafd]"
              >
                <h3 className="font-['Montserrat'] font-bold text-[#6e2682] text-[16px] md:text-[21px] leading-[1.3]">
                  {faq.question}
                </h3>

                <div
                  className={`flex-shrink-0 w-[30px] md:w-[34px] h-[30px] md:h-[34px] rounded-full bg-gradient-to-br from-[#cd7fea] to-[#b968d1] flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    className="w-[15px] md:w-[17px] h-[15px] md:h-[17px]"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-[20px] md:px-[30px] py-[18px] md:py-[24px] bg-[#f6eafd] border-t-2 border-[#e1b4f3]">
                  <p className="font-['Montserrat'] text-[#6e2682] text-[15px] md:text-[18px] leading-[1.7]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-[35px] md:mt-[50px] px-4">
          <p className="font-['Montserrat'] text-[#6e2682] text-[16px] md:text-[18px] mb-5 md:mb-6">
            ¿Tenés más dudas? Estamos para ayudarte
          </p>
          <a
            href={productUrl}
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] transition-all duration-300 px-[30px] md:px-[40px] py-[16px] md:py-[18px] rounded-[12px] font-['Montserrat'] font-bold text-white text-[16px] md:text-[18px] shadow-lg hover:shadow-xl hover:scale-[1.02] transform w-full md:w-auto"
          >
            QUIERO EMPEZAR AHORA
          </a>
        </div>
      </div>
    </div>
  );
}

// Final Pricing CTA Section
function FinalPricingSection() {
  return (
    <div className="relative py-[60px] md:py-[100px] px-[20px] md:px-[109px] min-h-[500px] md:min-h-[650px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-35 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100"></div>

      {/* Overlay para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-transparent"></div>

      {/* Círculos decorativos */}
      <div className="absolute top-[50px] md:top-[100px] right-[20px] md:right-[50px] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#cd7fea] opacity-[0.08] rounded-full blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-[700px]">
        {/* Logo RTFIT + 35 Fuerza Sin Impacto */}
        <div className="mb-[30px] md:mb-[50px] flex justify-center md:justify-start">
          <div className="h-[120px] md:h-[240px] w-[254px] md:w-[509px]">
            <Logos />
          </div>
        </div>

        <h2 className="font-['EB Garamond'] font-bold text-[#6e2682] text-[28px] md:text-[42px] mb-[30px] md:mb-[50px] text-center md:text-left text-balance">
          Inscribíte ahora
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px]">
          {/* Card Pesos Argentinos */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#cd7fea] to-[#b968d1] opacity-15 blur-lg rounded-[16px] group-hover:opacity-25 transition-opacity"></div>

            <div className="relative h-full bg-white border-4 border-[#cd7fea] rounded-[16px] p-[28px] md:p-[32px] flex flex-col items-center gap-[22px] md:gap-[26px] shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-[#f6eafd] to-[#fdf5ff] border-2 border-[#cd7fea] rounded-full px-[18px] py-[7px] mb-4">
                  <p className="font-['Montserrat'] font-bold text-[#cd7fea] text-[12px] uppercase tracking-wide">
                    Argentina
                  </p>
                </div>

                <p className="font-['Integral_CF'] text-[#9a9a9a] text-[20px] md:text-[22px] leading-[1] mb-1 whitespace-nowrap line-through">
                  $73.690
                </p>
                <p className="font-['Integral_CF'] text-[#cd7fea] text-[34px] md:text-[38px] leading-[1] mb-2 md:mb-3 whitespace-nowrap">
                  $52.000
                </p>
                <p className="font-['Montserrat'] font-bold text-[#6e2682] text-[13px] md:text-[15px] uppercase mb-2">
                  Pesos Argentinos
                </p>
              </div>

              <a
                href={productUrlUsd}
                className="mt-auto inline-flex items-center justify-center bg-gradient-to-r from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] transition-all duration-300 px-[20px] py-[18px] rounded-[12px] font-['Montserrat'] font-bold text-white text-[18px] md:text-[20px] w-full shadow-xl hover:shadow-2xl hover:scale-[1.03] transform"
              >
                ¡LO QUIERO!
              </a>
            </div>
          </div>

          {/* Card Exterior */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#cd7fea] to-[#b968d1] opacity-15 blur-lg rounded-[16px] group-hover:opacity-25 transition-opacity"></div>

            <div className="relative h-full bg-white border-4 border-[#cd7fea] rounded-[16px] p-[28px] md:p-[32px] flex flex-col items-center gap-[22px] md:gap-[26px] shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-[#f6eafd] to-[#fdf5ff] border-2 border-[#cd7fea] rounded-full px-[18px] py-[7px] mb-4">
                  <p className="font-['Montserrat'] font-bold text-[#cd7fea] text-[12px] uppercase tracking-wide">
                    Exterior
                  </p>
                </div>

                <p className="font-['Integral_CF'] text-[#9a9a9a] text-[20px] md:text-[22px] leading-[1] mb-1 whitespace-nowrap line-through">
                  U$D 60
                </p>
                <p className="font-['Integral_CF'] text-[#cd7fea] text-[34px] md:text-[38px] leading-[1] mb-2 md:mb-3 whitespace-nowrap">
                  U$D 45
                </p>
                <p className="font-['Montserrat'] font-bold text-[#6e2682] text-[13px] md:text-[15px] uppercase mb-2">
                  Si estás en el exterior
                </p>
              </div>

              <div className="h-[68px] flex items-center">
                <p className="font-['Montserrat'] text-[#6e2682] text-[15px] md:text-[16px] opacity-60 text-center">
                  Pago único
                </p>
              </div>

              <a
                href={productUrl}
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#cd7fea] to-[#b968d1] hover:from-[#b968d1] hover:to-[#a557bd] transition-all duration-300 px-[20px] py-[18px] rounded-[12px] font-['Montserrat'] font-bold text-white text-[18px] md:text-[20px] w-full shadow-xl hover:shadow-2xl hover:scale-[1.03] transform"
              >
                ¡LO QUIERO!
              </a>
            </div>
          </div>
        </div>

        <p className="font-['Montserrat'] text-[#6e2682] text-[14px] md:text-[15px] text-center mt-[20px] md:mt-[30px] opacity-70">
          Acceso inmediato al programa después del pago
        </p>
      </div>
    </div>
  );
}

// Footer Section
function FooterSection() {
  return (
    <footer className="bg-[#1b1b1b] text-white/70 px-[20px] md:px-[109px] py-[18px] md:py-[22px] pb-[calc(18px+env(safe-area-inset-bottom))] md:pb-[calc(22px+env(safe-area-inset-bottom))]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 text-[12px] md:text-[14px]">
        <p className="font-['Montserrat'] tracking-wide">RTFIT® 2026 | All Rights Reserved</p>
        <a
          href="https://tinystudioar.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 font-['Montserrat'] tracking-wide text-white/70 hover:text-white/90 transition-colors"
        >
          <span className="font-['Arial']">Design & developed by</span>
          <img src={tinyIcon} alt="Tiny Studio" className="h-[16px] md:h-[18px] opacity-80" />
        </a>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <TextTestimonialsSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <FinalPricingSection />
      <a
        href="https://api.whatsapp.com/send?phone=5491130130009"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-[calc(18px+env(safe-area-inset-bottom))] right-[18px] md:bottom-[calc(28px+env(safe-area-inset-bottom))] md:right-[28px] z-[60] w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-[#25D366] shadow-[0_10px_25px_rgba(37,211,102,0.35)] flex items-center justify-center hover:scale-[1.05] transition-transform"
      >
        <img src="/wap.png" alt="" className="w-[48px] h-[48px] " loading="lazy" />
        <span className="sr-only">WhatsApp</span>
      </a>
      <FooterSection />
    </div>
  );
}

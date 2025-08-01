import React, { useState } from "react";

const CardDataHome = () => {
  const [servicios, setServicios] = useState([
    { name: "ampliaciones" },
    { name: "Segundos Pisos" },
    { name: "albañilería" },
    { name: "gasfitería" },
    { name: "Cerámicas" },
    { name: "Pinturas" },
    { name: "Radieres" },
    { name: "Cobertizos" },
    { name: "Fosas Sépticas" },
    { name: "Techumbres" },
    { name: "Galpones" },
    { name: "Estructuras Metálicas" },
  ]);
  return (
    <>
      <section class="max-w-full mx-4 mt-6 md:mt-2 md:mx-20 px-4 sm:px-6 lg:px-4 py-8 bg-blue-500 rounded-xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          <div class="w-full rounded-lg p-2 flex flex-col">
            <h1 className="text-md md:text-2xl uppercase text-white font-bold underline">
              Construcción en general
            </h1>
            <ul className="pl-4 text-white grid grid-cols-1 md:grid-cols-2">
              {servicios.map((e) => (
                <li
                  key={e.name}
                  className="text-sm md:text-xl uppercase font-semibold md:font-medium my-2"
                >
                  {e.name}
                </li>
              ))}
            </ul>
          </div>

          <div class="w-full rounded-lg p-2 flex flex-col">
            <h1 className="text-md md:text-2xl mxau uppercase text-white font-bold underline">
              Contacto
            </h1>
            <ul className="pl-4 text-white ">
              <li className="text-sm md:text-xl uppercase font-semibold md:font-medium my-2 w-full inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                +569 42834153
              </li>
              <li className="text-sm md:text-md uppercase font-semibold md:font-medium my-2 w-full inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 mr-4"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                valunasconstrucciones@gmail.com
              </li>
              <li className="text-sm md:text-xl uppercase font-semibold md:font-medium my-2 w-full inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Avenida flor de lis 1735, Renca.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardDataHome;

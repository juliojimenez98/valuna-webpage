import React from "react";
import Valuna from "../../assets/imgs/logo/Valuna.png";

const NosotrosComponent = () => {
  return (
    <>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
            <div class="md:5/12 lg:w-5/12">
              <img src={Valuna} alt="image" className="w-2/3" loading="lazy" />
            </div>
            <div class="md:7/12 lg:w-6/12 border rounded-xl border-blue-600 p-4">
              <h2 class="text-2xl text-blue-600 font-bold md:text-4xl ">
                En Valunas Construcciones estamos para ayudarte.
              </h2>
              <p class="mt-6 text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p class="mt-4 text-gray-800">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NosotrosComponent;

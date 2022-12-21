import { useEffect, useState } from "react";
import request from "../../utils/request";


import { motion } from "framer-motion";

export default function Section1({ profile }) {
  const [isFetching, setIsFetching] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState({
    name: "Maria Conceição",
    image: "/images/profile/banner/profile1.png",
    services: [
      "Varrição dos ambientes;",
      "Limpeza de pisos e paredes;",
      "Retirada de pó e outras sujeiras de móveis e cômodos;",
      "Limpeza de vidros (quando não oferece riscos à profissional);",
      "Limpeza de banheiro;",
      "Aspiração de cortinas e carpetes.",
      "Limpeza na cozinha.",
    ],
    comodos: ["1 quarto", "2 banheiro", "1 cozinha", "sem area externa"],
  });


  const openModal = () => {
      document.body.style.overflow = "hidden";
  }

  const rating = () => {
    let stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(
        <input
          type="radio"
          name="rating-9"
          className="mask mask-star-2 bg-purple-500"
          disabled
        />
      );
    }

    return stars;
  };

  const loadProfiles = async () => {
    try {
      const { data } = await request.get("/profiles");

      console.log(data);
    } catch (error) {
      console.warn("ERRO AO CONSUMIR O ENDPOINT DE PERFIS!");
    }
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="flex flex-col w-full bg-accent md:bg-[bottom_left_6rem] bg-no-repeat md:bg-[url('/images/about-us/house.png')]"
    >
      <div className="flex flex-col-reverse md:flex-row w-full h-full justify-center">
        <div className="flex flex-col max-w-md flex-1 md:pt-24 justify-around gap-5 lg:gap-0">
          <div className="flex flex-col px-2 md:px-0 gap-5 lg:gap-0">
            <span className="font-bold md:hidden uppercase text-lg">
              {profile?.name}
            </span>
            <blockquote>
              <p className="justify-start lg:mb-5">{profile?.description}</p>
            </blockquote>
            <div className="flex flex-col gap-3 mb-3">
              <span className="font-bold hidden md:block uppercase">
                {profile?.name}
              </span>
              <span className="font-bold text-purple-500 capitalize">
                Essa maria cobra
                {" " +
                  profile?.daily_price?.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }) +
                  " "}
                por Diaria
              </span>
              <span className="font-bold uppercase">
                diarista desde {profile?.since}
              </span>
            </div>
            <div className="rating">{rating()}</div>
          </div>
          <div className="flex w-full py-3 px-4 md:px-0 md:py-0 justify-center lg:justify-start mb-3">
            <a className="btn btn-primary w-full md:w-1/2" href="#contratar">
              contratar
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col max-w-sm md:max-w-xs lg:max-w-sm mb-5 md:mb-0">
          <img
            src={profile?.image}
            className="max-w-xs  lg:max-w-sm bottom-0 self-center lg:self-start"
          />
        </div>
      </div>
    
    </motion.div>
  );
}

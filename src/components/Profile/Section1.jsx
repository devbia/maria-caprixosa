import { useEffect, useState } from "react";
import request from "../../utils/request";
import { CheckBox, Input } from "../Form";
import Modal from "../Modal";
import { TextTracking } from "../Typography";
import ModalSection from "./ModalSection";

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

  function handleForm() {
    setIsFetching(true);

    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  }

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
      <Modal
        id={"contratar"}
        className="w-full mx-2 md:w-8/12 max-w-5xl bg-[#F0ECF1]"
      >
        <a
          href="#"
          className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2"
        >
          ✕
        </a>
        <div className="flex flex-col h-full w-full">
          <div className="flex justify-center w-full">
            <TextTracking>VOCê ESCOLHEU {selectedProfile.name}</TextTracking>
          </div>
          <div className="flex flex-col-reverse lg:flex-row py-2">
            <div className="flex flex-col flex-1 gap-3 py-4">
              <span>Confirme seus dados</span>
              <span className="font-bold">
                Entraremos em contato para confirmar a o perfil escolhido.
              </span>

              <div className="flex flex-col w-full">
                <ModalSection title={"Categoria"}>Diarista</ModalSection>
              </div>
              <div className="flex flex-col w-full">
                <ModalSection title={"Serviços"}>
                  <ul className="flex flex-col">
                    {selectedProfile.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </ModalSection>
              </div>
              <div className="flex justify-between gap-8 ">
                <div className="flex flex-col gap-4 ">
                  <ModalSection title={"Perído"}>Manhã</ModalSection>
                  <ModalSection title={"Moro em"}>Apartamento</ModalSection>
                </div>
                <ModalSection title={"Cômodos"}>
                  <ul className="flex flex-col">
                    {selectedProfile.comodos.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </ModalSection>
              </div>
              <div className="flex py-2">
                <ModalSection title={"Localização"}>
                  <ul className="flex flex-col">
                    <li>Rio Branco - Acre, Rua São Sebastião </li>
                    <li>Bairro João Batista, 540</li>
                    <li>CEP 69652-524 </li>
                  </ul>
                </ModalSection>
              </div>
              <div className="flex flex-col gap-3">
                <CheckBox
                  label="Confirmo todas informações a cima"
                  labelClass="font-bold"
                  checkboxClass="checkbox-primary"
                />
                <CheckBox
                  label="Quero refazer"
                  labelClass="font-bold"
                  checkboxClass="checkbox-primary"
                />
              </div>
            </div>
            <div className="flex flex-col w-auto">
              <img
                src={selectedProfile.image}
                className="max-w-xs self-center max-h-96"
              />
            </div>
          </div>
          <div className="flex flex-col w-full pt-8">
            <span>
              {" "}
              Nos informe as demais informações para entamos em contato
            </span>

            <div className="flex w-full gap-8">
              <Input label="Nome:" placeholder="Informe seu Nome e sobrenome" />
              <Input
                mask="(99) 9999-99999"
                label="Telefone:"
                placeholder="Informe seu telefone para contato"
              />
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <button
              onClick={handleForm}
              disabled={isFetching}
              className={`btn  btn-primary lg:w-60 ${isFetching && "loading"}`}
            >
              Enviar
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}

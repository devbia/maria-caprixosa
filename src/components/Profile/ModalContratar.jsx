import { CheckBox, Input } from "../Form";
import Modal from "../Modal";
import { TextTracking } from "../Typography";
import ModalSection from "./ModalSection";
import { useContext, useState } from "react";
import { ShowAlertContext } from "../../hooks/ShowAlertContext";


export default function ModalContratar(){
    const [isFetching, setIsFetching] = useState(false);
    
    const { setAlertOpen} = useContext(ShowAlertContext);

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

    
  function handleForm() {
    setIsFetching(true);

    setTimeout(() => {
      setIsFetching(false);
      setAlertOpen(true);
    }, 2000);
  }

  return (
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
  );
}
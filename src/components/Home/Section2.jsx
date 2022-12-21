
import Container from "../Container";
import { FiFilter } from 'react-icons/fi';
import { TextTracking } from "../Typography";
import { CheckBox } from "../Form";

import { motion } from "framer-motion";
import { useContext } from "react";
import { FilterFormContext } from "../../hooks/FilterFormContext";
import { FilterMobileContext } from "../../hooks/FilterMobileContext";

import { useRouter } from "next/router";
import DesktopFilter from "../Filter/DesktopFilter";

export default function Section2() {


  const {choosedOption, setChoosedOption } = useContext(FilterFormContext)
  const {setFilterMobileOpen} = useContext(FilterMobileContext);

  const toggleCheckBox = (option) => setChoosedOption(choosedOption == option ? null : option);
 
  return (
    <Container className="bg-gradient-to-b from-[#DEAEBB] to-[#F0ECF1] pt-8 pb-4">
      <div className="flex flex-col">
        <motion.div  initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <div className="flex justify-center my-10 md:my-14">
            <TextTracking>
              A procura de uma caprixosa?
            </TextTracking>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 md:mb-14">
            <CheckBox name="category" checked={choosedOption == "faxineira"} onClick={_=>toggleCheckBox("faxineira")} label={"faxineira"} checkboxClass="checkbox-primary" labelClass="uppercase font-bold"/>
            <CheckBox name="category" checked={choosedOption == "diarista"}  onClick={_=>toggleCheckBox("diarista")}  label={"diarista"} checkboxClass="checkbox-primary" labelClass="uppercase font-bold"/>
            <CheckBox name="category" checked={choosedOption == "domestica"} onClick={_=>toggleCheckBox("domestica")}  label={"doméstica"} checkboxClass="checkbox-primary" labelClass="uppercase font-bold"/>
          </div>
        </motion.div>

        <div className="flex w-full">
          {/* Dialog button */}
          <button onClick={() => setFilterMobileOpen(true)} className="btn btn-info w-full lg:hidden gap-5">
            <FiFilter size={35} />
            Filtre sua busca
          </button>

          {/* Filter desktop */}
          <DesktopFilter/>
        </div>
      </div>
      <div className="py-10 md:py-28 mx-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-8 h-full justify-center">
            <TextTracking>POR QUE MARia caprixosa?</TextTracking>
            <div className="flex flex-col gap-4">
              <span className="font-bold">
                Sobre prestadores de servições a moradias
              </span>
              <div className="flex flex-col gap-3">
                <p>A Maria caprixosa é uma plataforma que conecta clientes contratantes a prestadoras de serviço de limpeza autônomas e criteriosamente selecionados.</p>
                <p>A ajuda que faltava no seu dia a dia.</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <img src="/images/home/aspirador.png" className="max-w-[230px] lg:max-w-sm rounded-lg" alt="Por que maria caprixosa?" />
          </div>
        </div>
      </div>
    </Container>
  );
}
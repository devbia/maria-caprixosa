
import Container from "../Container";
import { FiFilter } from 'react-icons/fi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { TextTracking } from "../../../public/Typography";
import { CheckBox } from "../Form";
export default function Section2() {
  return (
    <Container className="bg-gradient-to-b from-[#DEAEBB] to-[#F0ECF1] pt-8 pb-4">
      <div className="flex flex-col">
        <div className="flex justify-center my-10 md:my-14">
          <TextTracking>
            A procura de uma caprixosa?
          </TextTracking>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 md:mb-14">
          <CheckBox label={"faxineira"} checkboxClass="checkbox-primary" labelClass="uppercase font-bold" />
          <CheckBox label={"diarista"} checkboxClass="checkbox-primary" labelClass="uppercase font-bold" />
          <CheckBox label={"doméstica"} checkboxClass="checkbox-primary" labelClass="uppercase font-bold" />
        </div>

        <div className="flex w-full">
          {/* Dialog button */}
          <a href="#filters" className="btn btn-info w-full md:hidden gap-5">
            <FiFilter size={35} />
            Filtre sua busca
          </a>

          {/* Filter desktop */}
          <div className="mx-14 hidden lg:flex rounded py-4 bg-white w-full px-4">
            <div className="hidden md:grid grid-cols-7">
              <div><FiFilter size={35} /></div>
              {["Normal", "Período", "Moro em", "Comodos", "Localização"].map((i) => <div key={i} className="flex flex-col justify-center">
                <a className="cursor-pointer flex gap-2 align-bottom">{i} <IoIosArrowDown className="self-center" /></a>
              </div>)}

              <div>
                <button className="btn btn-primary">buscar</button>
              </div>
            </div>
          </div>
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
            <img src="/images/home/aspirador.png" className="max-w-sm rounded-lg" alt="Por que maria caprixosa?" />
          </div>
        </div>
      </div>
    </Container>
  );
}
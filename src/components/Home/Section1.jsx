
import Container from "../Container";
import { motion } from "framer-motion";
import { TextTracking } from "../Typography";

import { TabContext } from '../../hooks/TabContext';
import { useContext } from "react";

export default function Section1() {

  const {tabOpen, setTabOpen} = useContext(TabContext);

  return (
 <Container className="bg-accent">
      <motion.div animate={{opacity: 1 }}  initial={{ opacity: 0 }} transition={{ease: "easeOut", duration: 2}} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:bg-[url('/images/home/bg.png')] bg-no-repeat bg-contain bg-center">
          <div className="flex justify-center md:justify-end">
            <img className="hidden md:block max-w-md" src="/images/home/girl-house.png" alt="banner home page" />
            <img className="md:hidden max-w-md" src="/images/home/girl-house-mobile.png" alt="banner home page" />
          </div>
          <div className="flex flex-col h-full justify-end pb-8 md:pl-8">
            <div className="flex flex-col gap-2 w-full mb-8 text-center md:text-left">
              <div className="hidden lg:flex w-1/2  justify-center">
                <img src="/images/icons/profile.svg" />
              </div>
              <TextTracking>
                Caprixo é o nome dela!
              </TextTracking>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-4 w-full text-sm">
                <span className="font-bold">
                  Agora com mais comodidade e agendamentos!
                </span>
                <div className="flex flex-col gap-3">
                  <p>Você faz sua agenda e flexiona seus horários, com apenas um clique em saiba como, padronizamos sua agenda e horários, oferecemos confiabilidade e flexibilidade.</p>
                  <p>Inscreva-se em nossa plataforma.</p>
                </div>
              </div>
              <div className="flex w-full md:justify-center lg:justify-end pt-4 md:pt-8 lg:pt-3">
                <a  href="#contact_form" className="hidden md:flex btn btn-primary w-full md:w-auto">
                  Saiba como
                </a>
                <button onClick={() => setTabOpen("contact")} className="btn btn-primary md:hidden w-full md:w-auto">
                  Saiba como
                </button>
              </div>
            </div>
          </div>
        </div>
         </motion.div>
    </Container >
  );
}
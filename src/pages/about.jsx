import Container from "../components/Container";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="w-full relative bg-accent flex flex-col md:flex-row ">
        <img
          className="right-0 bottom-0 md:w-72 lg:w-auto max-w-sm absolute hidden  md:block"
          src="/images/about-us/meeting.png"
          alt="house background"
        />
        <div className="hidden md:flex">
          <img
            className="w-sm lg:ml-24 bottom-0 max-w-xs"
            src="/images/about-us/house.png"
            alt="house background"
          />
        </div>
        <div className="flex flex-col h-full justify-evenly gap-5 md:gap-20 z-20 max-w-md py-14 px-4 md:py-0 md:px-0">
          <p className="text-lg text-left self-center">
            A Maria caprixosa nasceu de uma situação vivida onde havia a
            necessidade de contratação de uma prestadora de serviços e de um
            cliente de se encontrarem da melhor forma, o setor vai ser de
            prestação terceirizada de serviços de limpeza, lavar roupas, fazer
            comida, limpar residências e afins.
          </p>
           <div className="flex flex-col py-2 gap-3">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <span className="text-lg font-bold">
                CEO Raul Victor
              </span>
           </div>
        </div>

        <div className="flex justify-center md:hidden">
           <img
          className="right-0 bottom-0 max-w-sm  lg:block"
          src="/images/about-us/meeting.png"
          alt="house background"
        />
        </div>
      </div>
      <div className="bg-[#B9A1B7] py-16">
        <Container className="pt-4 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col w-full justify-end">
              <div className="flex h-full justify-center text-white pb-8 z-20">
                <p className="self-center z-10 lg:pt-8 ">
                  A Maria caprixosa tem a missão de captar profissionais dessa
                  área que quer expandir sua agenda e ter controle dos seus
                  horários e clientes.
                </p>
               
              </div>
            </div>
            <div className="flex">
              <img className="md:max-w-[50%] lg:w-sm lg:max-w-lg " src="/images/about-us/group-hands.png" alt="" />
            </div>
          </div>
        </Container>
        <Container className="py-8">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2">
            <div className="flex justify-center">
              <img className="md:max-w-[50%] lg:w-sm " src="/images/about-us/girl-smille.png" alt="" />
            </div>
            <div className="flex h-full justify-center text-white pb-8">
              <p className="self-center text-center md:text-left text-lg">
                A visão que temos para nossos clientes é de fácil acessiblidade
                aos profissionais captados, e que esses profissionais possam
                entregar um produto de qualidade e dando assim confiabilidade
                tanto na contratação como na entrega.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

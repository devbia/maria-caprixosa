import Section1 from "../components/Home/Section1";
import Layout from "../components/Layout";

import { IoIosArrowBack } from 'react-icons/io';
import Section2 from "../components/Home/Section2";
import { CheckBox } from "../components/Form";

export default function HomePage() {

  return (
    <Layout>
      {/* Section one */}
      <Section1 />
      <Section2 />
      <div className="w-full px-2 md:pl-24 pb-8 bg-accent">
        <div className="flex flex-col md:flex-row ml-0 md:ml-14 gap-14">
          <div className="flex md:flex-col gap-6 justify-center md:justify-start">
            <img src="/images/global/avatar-logo.png" className="w-[100px] md:w-auto" style={{ maxWidth: '155px' }} />
            <p className="font-lg font-bold text-center md:text-left">Um lar limpo e <br className="hidden md:block" />
              aconchegante com  <br className="hidden md:block" />
              toque de Maria caprixosa</p>
          </div>
          <div className="flex flex-1 gap-6">
            <div className=" hidden md:flex  flex-col h-full justify-center">
              <button className="btn btn-ghost btn-circle">
                <IoIosArrowBack size={35} />
              </button>
            </div>
            <div className="flex flex-1 w-full overflow-x-auto gap-8">
              <img className="rounded-lg" src="/images/home/carousel/1.png" />
              <img className="rounded-lg" src="/images/home/carousel/2.png" />
              <img className="rounded-lg" src="/images/home/carousel/3.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2 md:pl-24 bg-accent">
        <div className="w-full h-full bg-bottom bg-right bg-no-repeat py-14 relative">
          <img src="/images/home/right-bottom.png" className="hidden lg:block absolute right-0 bottom-0" />
          <div className="flex flex-col bg-[#B9A1B7] w-full p-5 justify-start max-w-sm rounded-lg ">
            <div className="flex flex-col mb-6">
              <span className="uppercase font-extrabold mb-2">CONTATE-nos</span>
              <p>Queremos falar mais com você, informe seus dados!</p>
            </div>

            <div className="form-control w-full max-w-xs mb-2">
              <label className="label">
                <span className="label-text font-bold">Seu nome</span>
              </label>
              <input type="text" placeholder="Digite seu nome aqui..." className="input input-bordered w-full max-w-xs" />
            </div>
            <p>Apenas informe, por onde nós podemos entrar em contato?</p>
            <div className="form-control w-full max-w-xs mb-2">
              <label className="label">
                <span className="label-text font-bold">Telefone</span>
              </label>
              <input type="text" placeholder="EX: (xx) xxxx-xxxxx" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs mb-4">
              <label className="label">
                <span className="label-text font-bold">E-mail</span>
              </label>
              <input type="email" placeholder="Ex: seuemail@email.com" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="mb-4">
              <CheckBox label={"Concordo em receber comunicações"} checkboxClass="checkbox-info" />
            </div>

            <button className="btn btn-info font-bold">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </Layout >
  );
}
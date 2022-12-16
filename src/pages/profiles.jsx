import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Section1 from "../components/Profile/Section1";
import { TextTracking } from '../components/Typography';

export default function ProfilePage() {

  const [profile, setProfile] = useState({});

  const info = [
    {
      image: "/images/profile/icons/chat.png",
      description: "Agenda mais acessivél aos clientes que procura pelo seu serviço."
    },
    {
      image: "/images/profile/icons/estrela.png",
      description: `Saber que você esta entre as mais de 100 mil diarista 
      e faxineira e doméstica pelo braisl.`
    },
    {
      image: "/images/profile/icons/notificacao.png",
      description: `Horários e agenda organizada e flexivel, dando mais comodidade e confiabilidade ao cliente.`
    },

  ]

  useEffect(() => {

    setProfile({
      name: "Maria conceição",
      daily_price: 150.00,
      since: '2018',
      description: `Minha profissão e o que me diferencia das demais, pois com ela após meus chefes ter uma jornada de  trabalho e saber que ao chegar vai está tudo limpo e saber que não vai precisar arrumar suas coisas, me torna diferencial.
      Pois dou ambiente limpo, aconchegante.`,
      stars: 5,
      image: '/images/profile/girl-1.png'
    })

  }, []);


  return (
    <Layout>
      <Section1 profile={profile} />
      <div className="flex flex-col w-full bg-[#E4DFE0]">
        <div className="flex flex-col gap-8 md:gap-0  md:flex-row w-full lg:px-28 py-20 justify-around">
          {info.map((data, index) => <div key={index} className="flex flex-col gap-3">
            <div className="flex justify-center">
              <img src={data.image} className="max-w-[55px]" />
            </div>
            <div className="flex justify-center px-16 md:px-0 text-center md:max-w-[200px]">
              {data.description}
            </div>
          </div>)}

        </div>
        <div className="flex flex-col w-full gap-8 md:gap-0 lg:px-28 py-20 justify-around">
          <div className="flex w-full justify-center">
            <TextTracking>Veja outros perfis</TextTracking>
          </div>
          area em desenvolvimento ainda.... está todo quebrado por aqui...
          <div className="flex w-full justify-end">
            <input type="text" placeholder="Buscar" className="input input-bordered input-sm w-full max-w-x w-56" />
          </div>

        </div>
      </div>
    </Layout>
  );
}
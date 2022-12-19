import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Section1 from "../components/Profile/Section1";
import Section2 from "../components/Profile/Section2";
import { FaSearch } from 'react-icons/fa'; 
import { HiPlus } from 'react-icons/hi'; 
import CardProfessional from "../components/Profile/CardProfessional";
import { TextTracking } from '../components/Typography';
export default function ProfilePage() {

  const [profile, setProfile] = useState({});

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
      <Section2/>
        <div className="flex flex-col w-full bg-[#E4DFE0]">   
          <div className="flex flex-col w-full gap-8 md:gap-0 lg:px-28 py-8 md:py-20 justify-around">
            <div id="favorites" className="flex w-full justify-center">
              <TextTracking>Favoritas</TextTracking>
            </div>
          
            <div className="flex w-full justify-center px-12 md:justify-start md:px-12 py-3 md:py-10">
             <p>“As Marias caprixosa mais curtidas, veja se a que você curtiu esta entre esses perfis.”</p>
            </div>

            <div className="flex flex-col w-full gap-3">
              <div className="flex w-full justify-center md:justify-start md:px-12">
               <span className="text-purple-500 font-bold">Favoritas populares</span>
            </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-2 lg:grid-grid-cols-3">
              <CardProfessional showButtons={false} image={"/images/profile/grid/profile1.png"} name={"Maria conceição"} starts={2} job={"diarista"}/>
              <CardProfessional showButtons={false} image={"/images/profile/grid/profile1.png"} name={"Maria conceição"} starts={2} job={"diarista"}/>
              <CardProfessional showButtons={false} image={"/images/profile/grid/profile1.png"} name={"Maria conceição"} starts={2} job={"diarista"}/>
            </div>
            </div>
          </div>
      </div>
    </Layout>
  );
}
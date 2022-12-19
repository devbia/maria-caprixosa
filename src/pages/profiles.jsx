import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Section1 from "../components/Profile/Section1";
import Section2 from "../components/Profile/Section2";


import Favourites from "../components/Profile/Favourites";



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
      <Favourites/>
    </Layout>
  );
}
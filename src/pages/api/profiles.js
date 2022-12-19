export default function handler(req, res) {

  const profile = (name, starts, value, since, description, img) => {
    return {
      name, 
      starts,
      value,
      since,
      description,
      banner_transparent: "/images/profile/banner/"+img,
      card_banner: "/images/profile/grid/"+img
    }
  }


  return res.status(200).json({
    profiles: [
      profile(
        "Maria conceição",
        3, 99.00, '2018', 
        `Minha profissão e o que me diferencia das demais, pois com ela após meus chefes ter uma jornada de trabalho e saber que ao chegar vai está tudo limpo e saber que não vai precisar arrumar suas coisas, me torna diferencial. Pois dou ambiente limpo, aconchegante.`,
        "profile1.png"),
      profile(
        "Maria Fernandez",
        4, 500.00, '2019', 
        `Minha profissão e o que me diferencia das demais, pois com ela após meus chefes ter uma jornada de trabalho e saber que ao chegar vai está tudo limpo e saber que não vai precisar arrumar suas coisas, me torna diferencial. Pois dou ambiente limpo, aconchegante.`,
        "profile2.png"),
      profile(
        "Ana Dias",
        5, 100, '2015', 
        `Esta é minha descrição do que eu amo fazer!`,
        "profile3.png"),
    ]
  });
}

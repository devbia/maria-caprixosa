export default function handler(req, res) {
  return res.status(200).json({
    user: {
      name: "Benedita Magalhães",
      image: "/images/landing-page/profile.png",
      occupation: "Product Designer",
      email: "beneditabj@gmail.com",
      linkedin: "https://www.linkedin.com/in/beneditamagalhaes-design/",
      portifolio: "https://www.behance.net/beneditamagalhaes",
      goals: "Facilitar a contratação de serviços de limpeza em lares familiares, como diarista, faxineira e doméstica.",
      since: "2021"
    }
  });
}

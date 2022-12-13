
import { useEffect, useState } from "react"
import request from '../utils/request';
import Image from "next/image";
import { Title, SubTitle } from "../components/Typography/Title";

import { TextMuted, TextBold, TextNormal } from "../components/Typography/Paragraph";

export default function HomePage() {

  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const { data } = await request.get("/landing-page");

      setUser(data.user);
      // console.log(user);

    } catch (error) {
      console.error("Error: Request is with error.")
    }
  }


  const UserAttribute = (attrName, value) => (
    <div className="d-flex gap-2">
      <TextBold text={attrName} />
      <TextNormal text={value} />
    </div>
  );

  useEffect(() => {
    getUser();

  }, []);

  return (
    <div className='vh-100 w-100 px-3 px-md-5 pt-5 pt-md-0  d-flex flex-column justify-content-md-center align-items-center align-items-md-start bg-maria-caprixosa-house'>
      <div className="row">
        <div className="col col-md-9">
          <div className="d-flex flex-column gap-4 gap-md-5">
            <Title text={"Landing Page"} />
            <div className="d-flex flex-column">
              <div className="justify-content-center  d-flex d-md-none">
                <div><Image src={user?.image} alt={`${user?.name} - ${user?.occupation}`} width={92.82} height={102} /></div>
              </div>
              <div className="row d-flex flex-column gap-2">
                <SubTitle text={"Objetivo:"} />
                <TextMuted text={user?.goals} />
              </div>
              <div className="row gap-3">
                <div className="col col-md-2 d-none d-md-flex ">
                  <Image src={user?.image} alt={`${user?.name} - ${user?.occupation}`} width={92.82} height={102} />
                </div>
                <div className="col col-md-9">
                  <div className="d-flex flex-column">
                    {UserAttribute('Nome:', user?.name)}
                    {UserAttribute('Função:', user?.occupation)}
                    {UserAttribute('E-mail:', user?.email)}
                    {UserAttribute('Linkedin:', user?.linkedin)}
                    {UserAttribute('Portifólio:', user?.portifolio)}
                  </div>
                </div>
              </div>
              <div className="row">
                <TextBold text={`Ano ${user?.since}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

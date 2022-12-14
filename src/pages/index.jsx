import Layout from "../components/Layout";
import { PrimaryButton } from "../components/Button";
import { TextBold, TextNormal, TextBig } from "../components/Typography/Paragraph";
import { SmallTitle } from "../components/Typography/Title";
export default function HomePage() {

  return (
    <Layout>
      <section className="pt-md-5 w-100 bg-light bg-home-banner mb-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <div className="d-md-flex h-100 justify-center justify-content-md-end">
                <img src={'/images/home/girl-house-mobile.png'} fill className="girl-house d-md-none" />
                <img src={'/images/home/girl-house.png'} fill className="girl-house d-none d-md-block" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex h-100 flex-column justify-content-center gap-4">
                <div className="d-flex flex-column justify-content-center gap-3">
                  <div className="col col-md-6">
                    <div className="d-flex justify-content-center">
                      <img src="/images/icons/profile.svg" style={{ maxWidth: '40px' }} />
                    </div>
                  </div>
                  <span className="text-uppercase letter-spacing-5 h6">Caprixo é o nome dela!</span>
                </div>
                <div className="d-flex flex-column  gap-3">
                  <TextBold text="Agora com mais comodidade e agendamentos!" className="mb-2" />
                  <div className="d-flex flex-column">
                    <TextNormal text={"Você faz sua agenda e flexiona seus horários, com apenas um clique em saiba como, padronizamos sua agenda e horários, oferecemos confiabilidade e flexibilidade."} />
                    <TextNormal text={"Inscreva-se em nossa plataforma."} />
                  </div>
                </div>

                <div className="d-flex pe-md-5 justify-content-end">
                  <div className="div">
                    <PrimaryButton lg>
                      SAIBA COMO
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pink-gradient">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center mb-md-5">
                <SmallTitle text={'a procura de uma CAPRIXOSA?'} />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex gap-5 justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="flexCheckDefault">
                    <TextBig text={"Diarista"} />
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="flexCheckDefault">
                    <TextBig text={"Doméstica"} />
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="flexCheckDefault">
                    <TextBig text={"Diarista"} />
                  </label>
                </div>

              </div>
            </div>
            .
          </div>
        </div>
      </section>
    </Layout>
  );
}
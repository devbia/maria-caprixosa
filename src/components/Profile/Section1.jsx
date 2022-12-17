
import Modal from '../Modal';

export default function Section1({ profile }) {

  const rating = () => {

    let stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(
        <input type="radio" name="rating-9" className="mask mask-star-2 bg-purple-500" disabled />
      );
    }

    return stars;
  }

  return (
    <div className="flex flex-col w-full bg-accent md:bg-[bottom_left_6rem] bg-no-repeat md:bg-[url('/images/about-us/house.png')]">
      <div className="flex flex-col-reverse md:flex-row w-full h-full justify-center">
        <div className="flex flex-col max-w-md flex-1 md:pt-24 justify-around gap-5 lg:gap-0">
          <div className="flex flex-col px-2 md:px-0 gap-5 lg:gap-0">
            <span className="font-bold md:hidden uppercase text-lg">{profile?.name}</span>
            <blockquote>
              <p className="justify-start lg:mb-5">
                {profile?.description}
              </p>
            </blockquote>
            <div className="flex flex-col gap-3 mb-3">
              <span className="font-bold hidden md:block uppercase">{profile?.name}</span>
              <span className="font-bold text-purple-500 capitalize">
                Essa maria cobra
                {" " + profile?.daily_price?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + " "}
                por Diaria
              </span>
              <span className="font-bold uppercase">diarista desde {profile?.since}</span>
            </div>
            <div className="rating">
              {rating()}
            </div>
          </div>
          <div className="flex w-full py-3 px-4 md:px-0 md:py-0 justify-center lg:justify-start mb-3">
            <a className="btn btn-primary w-full md:w-1/2" href='#contratar'>contratar</a>
          </div>
        </div>
        <div className="flex flex-1 flex-col max-w-sm md:max-w-xs lg:max-w-sm mb-5 md:mb-0">
          <img src={profile?.image} className="max-w-xs  lg:max-w-sm bottom-0 self-center lg:self-start" />
        </div>
      </div>
      <Modal id={"contratar"}>
        <div className="modal-action">
          <a href="#" className="btn">Fechar</a>
        </div>
      </Modal>
    </div>
  );
}
import { TextTracking } from "../Typography";
import CardProfessional from "../Profile/CardProfessional";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BackArrow, NextArrow } from "../Arrows";

export default function Favourites() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <BackArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-[#E4DFE0]">
      <div className="flex flex-col w-full gap-8 md:gap-0 lg:px-28 py-8 md:py-20 justify-around">
        <div id="favorites" className="flex w-full justify-center">
          <TextTracking>Favoritas</TextTracking>
        </div>

        <div className="flex w-full justify-center px-12 md:justify-start md:px-12 py-3 md:py-10">
          <p>
            “As Marias caprixosa mais curtidas, veja se a que você curtiu esta
            entre esses perfis.”
          </p>
        </div>

        <div className="flex flex-col w-full gap-3">
          <div className="flex w-full justify-center md:justify-start md:px-12">
            <span className="text-purple-500 font-bold">
              Favoritas populares
            </span>
          </div>
          <Slider {...settings}>
            <CardProfessional
              showButtons={false}
              image={"/images/profile/grid/profile1.png"}
              name={"Maria conceição"}
              starts={2}
              job={"diarista"}
            />
            <CardProfessional
              showButtons={false}
              image={"/images/profile/grid/profile1.png"}
              name={"Maria conceição"}
              starts={2}
              job={"diarista"}
            />
            <CardProfessional
              showButtons={false}
              image={"/images/profile/grid/profile1.png"}
              name={"Maria conceição"}
              starts={2}
              job={"diarista"}
            />
            <CardProfessional
              showButtons={false}
              image={"/images/profile/grid/profile1.png"}
              name={"Maria conceição"}
              starts={2}
              job={"diarista"}
            />
            <CardProfessional
              showButtons={false}
              image={"/images/profile/grid/profile1.png"}
              name={"Maria conceição"}
              starts={2}
              job={"diarista"}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}

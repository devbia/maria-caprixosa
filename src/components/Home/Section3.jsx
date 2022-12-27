import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { TextTracking } from "../Typography";

export default function Section3() {
  const carouselRef = useRef(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [
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

  const scrollLeft = () => {
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - 50;
  };

  return (
    <div className="w-full px-2 md:pl-24 pb-8 bg-accent">
      <div className="flex flex-col md:flex-row ml-0 md:ml-14 gap-14">
        <div className="hidden md:flex md:flex-col gap-6 justify-center md:justify-start">
          <img
            src="/images/global/avatar-logo.png"
            className="hidden md:w-auto md:block"
            style={{ maxWidth: "155px" }}
          />
          <p className="font-lg font-bold text-center md:text-left">
            Um lar limpo e <br className="hidden md:block" />
            aconchegante com <br className="hidden md:block" />
            toque de Maria caprixosa
          </p>
        </div>
        <div className="flex md:hidden gap-3 justify-center md:justify-start px-4">
          <img
            src="/images/global/avatar.png"
            className="md:w-auto md:hidden"
            style={{ maxWidth: "155px" }}
          />
          <div className="flex flex-col justify-center">
             <TextTracking className={'text-center'}>
            Um lar limpo e <br className="hidden md:block" />
            aconchegante com <br className="hidden md:block" />
            toque de Maria caprixosa
          </TextTracking>
          </div>
        </div>
        <div className="flex flex-1 gap-6">
          <div className=" hidden md:flex  flex-col h-full justify-center">
            <button className="btn btn-ghost btn-circle" onClick={(_) => null}>
              <IoIosArrowBack
                onClick={(_) => scrollLeft()}
                className="swap-off fill-current"
                size={35}
              />
            </button>
          </div>
          <div className="flex flex-col flex-1 w-full relative">
            {
              <div
                ref={carouselRef}
                className="hidden md:flex   w-full overflow-x-hidden gap-8 scroll-smooth "
              >
                <img className="rounded-lg w-64" src="/images/home/carousel/1.png" />
                <img className="rounded-lg w-64" src="/images/home/carousel/2.png" />
                <img className="rounded-lg w-64" src="/images/home/carousel/3.png" />
              </div>
            }
            <div className="flex flex-col md:hidden">
              <Slider {...settings}>
                <img
                  className="rounded-lg mx-3"
                  onTouchMove={(_) => null}
                  src="/images/home/carousel/1.png"
                />
                <img
                  className="rounded-lg mx-3"
                  onTouchMove={(_) => null}
                  src="/images/home/carousel/2.png"
                />
                <img
                  className="rounded-lg mx-3"
                  onTouchMove={(_) => null}
                  src="/images/home/carousel/3.png"
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

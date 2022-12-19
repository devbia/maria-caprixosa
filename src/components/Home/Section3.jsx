
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export default function Section3() {

  const carouselRef = useRef(null);
  const swapRef = useRef(null);
  const [carousel, setCarousel] = useState(0);
  const [isBack, setIsBack] = useState(true);

  const scrollLeft = () => {
    if(carouselRef.current.scrollLeft <= 200){
        carouselRef.current.scrollLeft += 150; 
        setIsBack(true);
    }else {
     carouselRef.current.scrollLeft = 200; 
      setIsBack(false);
    }
  }


  return (
     <div className="w-full px-2 md:pl-24 pb-8 bg-accent">
        <div className="flex flex-col md:flex-row ml-0 md:ml-14 gap-14">
          <div className="flex md:flex-col gap-6 justify-center md:justify-start">
            <img src="/images/global/avatar-logo.png" className="w-[100px] md:w-auto" style={{ maxWidth: '155px' }} />
            <p className="font-lg font-bold text-center md:text-left">Um lar limpo e <br className="hidden md:block" />
              aconchegante com  <br className="hidden md:block" />
              toque de Maria caprixosa</p>
          </div>
          <div className="flex flex-1 gap-6">
            <div className=" hidden md:flex  flex-col h-full justify-center">
              <button className="btn btn-ghost btn-circle" onClick={_=> null}>
               
                {/* {
                  isBack ? 
                  <IoIosArrowBack  className="swap-off fill-current" size={35} />
                  :
                 <IoIosArrowForward  className="swap-on fill-current" size={35} />
                } */}
                <IoIosArrowBack  className="swap-off fill-current" size={35} />
               
              </button>
            </div>
            <div className="flex flex-1 w-full">
              {<div  ref={carouselRef}  className="flex   w-full overflow-scroll gap-8 scroll-smooth ">
                <img className="rounded-lg" onTouchMove={_=>scrollLeft()} src="/images/home/carousel/1.png" />
                <img className="rounded-lg" onTouchMove={_=>scrollLeft()} src="/images/home/carousel/2.png" />
                <img className="rounded-lg" onTouchMove={_=>scrollLeft()} src="/images/home/carousel/3.png" />
              </div>}
             
            </div>
          </div>
        </div>
      </div>

  );
}
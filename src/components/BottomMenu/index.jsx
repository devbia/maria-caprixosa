
import { FiFilter } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { useEffect, useState, useRef } from 'react';
import ContactForm from '../ContactForm';
import { useRouter } from 'next/router';

export default function BottomMenu() {

  const heightBottom = useRef(null);
  const [currentItem, setCurrentItem] = useState(null);

  const router = useRouter();

  useEffect(() => {
    console.log(router.asPath);
  }, []); 
  return (
    <div ref={heightBottom} className="fixed bottom-0 w-full bg-white py-3 md:hidden">
      {currentItem == 2 && <ContactForm isOpen={true} isMobile={true} bottomHeight={heightBottom?.current?.clientHeight}/>}
      <div className="grid grid-cols-3">
        <div className='flex flex-col text-center justify-center'>
          <FiFilter size={20} className="self-center" />
          Filtro
        </div>
        <div onClick={() => window.location.href = "/profiles#favorites"} className={`
          flex flex-col text-center justify-center
          ${router.asPath.indexOf("profiles#favorites") > -1 && "text-purple-500"}
        `}>
          <AiOutlineHeart size={20} className="self-center" />
          Favoritas 
        </div>
        <div onClick={_ => setCurrentItem(currentItem == null ? 2 : null)} className={`flex flex-col text-center justify-center ${currentItem == 2 && 'text-purple-500'}`}>
          <BsPeople size={20} className="self-center"  />
          Contato
        </div>
      </div>
    </div>
  );
}
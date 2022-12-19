
import { FiFilter } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { useEffect, useState, useRef, useContext } from 'react';
import ContactForm from '../ContactForm';
import { useRouter } from 'next/router';

import {FilterMobileContext} from '../../hooks/FilterMobileContext';

export default function BottomMenu() {
  const { setFilterMobileOpen, filterMobileOpen, setItemOpen } = useContext(FilterMobileContext);


  const heightBottom = useRef(null);
  const [currentItem, setCurrentItem] = useState(null);

  const router = useRouter();

  useEffect(() => {
    console.log(router.asPath);
  }, []); 
  return (
    <div ref={heightBottom} className="fixed bottom-0 w-full bg-white py-3 md:hidden z-20">
      {currentItem == 2 && <ContactForm isOpen={true} isMobile={true} bottomHeight={heightBottom?.current?.clientHeight}/>}
      
      <div className="grid grid-cols-3">
        <div onClick={_ => {
          setCurrentItem(currentItem == null ? 1 : null);
          setFilterMobileOpen(currentItem == 1);
          setItemOpen("services");
          }} className={`flex flex-col text-center justify-center ${filterMobileOpen && "text-purple-500"}`}>
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
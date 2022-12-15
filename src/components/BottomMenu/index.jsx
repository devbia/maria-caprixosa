
import { FiFilter } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

export default function BottomMenu() {
  return (
    <div className="fixed bottom-0 w-full bg-white py-3 md:hidden">
      <div className="grid grid-cols-3">
        <div className='flex flex-col text-center justify-center'>
          <FiFilter size={20} className="self-center" />
          Filtro
        </div>
        <div className='flex flex-col text-center justify-center'>
          <AiOutlineHeart size={20} className="self-center" />
          Filtro
        </div>
        <div className='flex flex-col text-center justify-center'>
          <BsPeople size={20} className="self-center" />
          Contato
        </div>
      </div>
    </div>
  );
}
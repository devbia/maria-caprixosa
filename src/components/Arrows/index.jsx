

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const BackArrow = ({onClick}) => {
  return (
    <button className="btn btn-ghost btn-circle absolute left-0 top-1/2 " onClick={onClick}>
        <IoIosArrowBack className="swap-off fill-current" size={35} />
      </button>
  );
}

export const NextArrow = ({onClick}) => {
  return (
    <button className="btn btn-ghost btn-circle absolute right-0 top-1/2" onClick={onClick}>
        <IoIosArrowForward  className="swap-on fill-current " size={35} />
    </button>
  );
}
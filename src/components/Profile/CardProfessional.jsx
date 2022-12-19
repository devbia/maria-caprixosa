
import { TextTracking } from "../Typography";
import { GrShareOption } from 'react-icons/gr'; 
import {MdOutlineFavoriteBorder, MdOutlineFavorite} from 'react-icons/md'; 
import { useState } from "react";

export default function CardProfessional({children, image, name, job = "", starts = 0, showButtons = true}) {

  const [loveProfessional, setLoveProfessional] = useState(false);


  const love = () => {
    /* HERE SEND FETCH TO API LOVE. */

    setLoveProfessional(!loveProfessional);
  }

  const rating = () => {

    let stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(
        <input key={index} type="radio" name="rating-9" className={`mask mask-star-2 ${index < starts ? 'bg-purple-500' : "bg-gray-400"}`} disabled />
      );
    }

    return stars;
  }
  return (
    <div className="flex w-full justify-center">
       <div className="card w-72 bg-transparent">
  <figure><img src={image} alt={"Maria caprixosa - " + name + " trabalha com " + job} /></figure>
  <div className="card-body p-0">
    <div className="flex flex-col gap-3">
       <div className="flex justify-between mt-3">
        <h2 className="card-title">{name}</h2>
        {
          showButtons &&
          <div className="flex flex-col h-full justify-center align-middle gap-2">
            <div className="flex self-end gap-2">
              <GrShareOption className="lg:text-[20px] text-gray-700 cursor-pointer self-center"/>
             {loveProfessional ? <MdOutlineFavorite onClick={_=>love()} className="lg:text-[25px] text-red-700 cursor-pointer"/> : <MdOutlineFavoriteBorder onClick={_=>love()} className="lg:text-[25px] text-gray-700 cursor-pointer"/>}
            </div>
        </div> 
        }
       </div>
        <p><TextTracking>{job}</TextTracking></p>
        <div className="rating">
          {rating()}
        </div>
    </div>
  </div>
</div>
    </div>
  );
}
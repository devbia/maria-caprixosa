import { useContext, useEffect, useRef } from "react";
import { ShowAlertContext } from "../../hooks/ShowAlertContext";




export default function Modal({ id, children, className = "", closeIcon = false }) {

  const {closeModalState, setCloseModal } = useContext(ShowAlertContext);
  const btRef = useRef();

  function closeModal() {
    document.body.style.overflow = "unset";
  }

  useEffect(() => {
       setCloseModal(false);
  }, []);

  useEffect(()=>{
    if(closeModalState)
    {  
      btRef?.current?.click();
      //setCloseModal(false);
    }
  },[closeModalState]);  

  return (
    <div className={`modal`} id={id}>
      <div className={`modal-box relative ${className}`}>
        {closeIcon && <a  ref={btRef} href="#" onClick={_=>closeModal()} className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2">✕</a>}
        {children}
      </div>
    </div >
  );
}
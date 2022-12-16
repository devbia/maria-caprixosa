export default function Modal({ id, children, className = "" }) {

  return (
    <div className={`modal ${className}`} id={id} >
      <div className="modal-box">
        {children}
      </div>
    </div >
  );
}
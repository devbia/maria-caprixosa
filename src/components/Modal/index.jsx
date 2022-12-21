
export default function Modal({ id, children, className = "", closeIcon = false }) {


  function closeModal() {
    document.body.style.overflow = "unset";
  }

  return (
    <div className={`modal`} id={id}>
      <div className={`modal-box relative ${className}`}>
        {closeIcon && <a  onClick={_=>closeModal()} className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2">✕</a>}
        {children}
      </div>
    </div >
  );
}
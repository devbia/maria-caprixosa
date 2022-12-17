export default function Modal({ id, children, className = "", closeIcon = false }) {

  return (
    <div className={`modal`} id={id} >
      <div className={`modal-box relative ${className}`}>
        {closeIcon && <a href={"#"} className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2">✕</a>}
        {children}
      </div>
    </div >
  );
}
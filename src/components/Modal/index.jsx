export default function Modal({ id, children }) {

  return (
    <div class="modal" id={id}>
      <div class="modal-box">
        {children}
      </div>
    </div>
  );
}
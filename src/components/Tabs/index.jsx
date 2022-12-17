

export const dropdown = ({ label, contentTitle = "", children }) => (
  <div className="dropdown">
    <label tabIndex={0} className="btn m-1 normal-case">{label}</label>
    <div tabIndex={0} className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
      <div className="card-body">
        <h3 className="text-base text-black">{contentTitle}</h3>
        {children}
      </div>
    </div>
  </div>
);

export const Services = ({ services = [] }) => {
  return (
    <dropdown label="Serviços" contentTitle="Descrição dos serviços realizados nessa categoria selecionada">

    </dropdown>
  );
}

export default function ModalSection({title, children}){

  return (
    <div className="flex flex-col w-full gap-1">
      <span className="font-bold">{title}</span>
      <div className="flex w-full text-gray-400">
        {children}
      </div>
    </div>
  );
}
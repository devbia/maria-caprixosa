
import Modal from '../Modal';
import { TextTracking } from '../Typography';
import { Input, Select, TextArea } from '../Form';
import { createRef } from 'react';
export default function RegisterModal({ id }) {

  const fileRef = createRef();

  return (
    <Modal id={id} className=" bg-[#F0ECF1]  w-11/12 max-w-4xl" closeIcon>
      <div className="flex justify-center mb-8">
        <TextTracking>
          Boas-vindas a maria caprixosa
        </TextTracking>
      </div>
      <div className="flex md:justify-center mb-3">
        <span className="font-bold text-sm">
          Quer sua agenda organizada e mais flexivél?
        </span>
      </div>
      <div className="flex justify-start mb-3">
        <span>
          Cadastra-se informando seus dados
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
        <div className='flex flex-col gap-2'>
          <Input label="Nome" placeholder="Informe seu nome e sobrenome" />
          <Input label="Categoria" placeholder="Se você é diarista, faxineira, doméstica" />
          <Input label="Desde que ano atua na área:" placeholder="Informe o ano" />
          <Input label="Telefone" placeholder="Informe o telefone para contato" />
        </div>
        <div className="flex flex-col gap-2">
          <Input label="Valor do serviço" placeholder="Informe o valor do seu serviço" />
          <Input label="Cep:" placeholder="Informe seu CEP" />
          <Select label="Estado" items={[]} />
          <div className="flex flex-col cursor-pointer">
            <label className='font-bold'>
              Selecione a sua foto favorita
            </label>
            <input type="file" className='hidden' name="" id="" ref={fileRef} />
            <img src={"/images/home/icons/file.png"} className="w-8 h-8" onClick={() => fileRef.current.click()} />
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <TextArea placeholder="Queremos lhe ouvir nos fale um pouco da sua trajetória e experiência por que atuar nessa área." label="Mensagem:" />
      </div>
      <div className="flex w-full justify-center">
        <button className='btn btn-primary md:w-1/2 lg:w-1/4'>Enviar</button>
      </div>
    </Modal>
  );
}
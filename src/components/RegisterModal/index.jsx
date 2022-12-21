
import Modal from '../Modal';
import { TextTracking } from '../Typography';
import { Input, Select, TextArea } from '../Form';
import { createRef, useState } from 'react';
export default function RegisterModal({ id }) {

  const fileRef = createRef();

  const [isLoading, setIsLoading] = useState(false); 
  
  const estados = [
        {"text": "Acre", "value": "AC"},
        {"text": "Alagoas", "value": "AL"},
        {"text": "Amapá", "value": "AP"},
        {"text": "Amazonas", "value": "AM"},
        {"text": "Bahia", "value": "BA"},
        {"text": "Ceará", "value": "CE"},
        {"text": "Distrito Federal", "value": "DF"},
        {"text": "Espírito Santo", "value": "ES"},
        {"text": "Goiás", "value": "GO"},
        {"text": "Maranhão", "value": "MA"},
        {"text": "Mato Grosso", "value": "MT"},
        {"text": "Mato Grosso do Sul", "value": "MS"},
        {"text": "Minas Gerais", "value": "MG"},
        {"text": "Pará", "value": "PA"},
        {"text": "Paraíba", "value": "PB"},
        {"text": "Paraná", "value": "PR"},
        {"text": "Pernambuco", "value": "PE"},
        {"text": "Piauí", "value": "PI"},
        {"text": "Rio de Janeiro", "value": "RJ"},
        {"text": "Rio Grande do Norte", "value": "RN"},
        {"text": "Rio Grande do Sul", "value": "RS"},
        {"text": "Rondônia", "value": "RO"},
        {"text": "Roraima", "value": "RR"},
        {"text": "Santa Catarina", "value": "SC"},
        {"text": "São Paulo", "value": "SP"},
        {"text": "Sergipe", "value": "SE"},
        {"text": "Tocantins", "value": "TO"}
    ];

  function handleForm(){

    setIsLoading(true);

    setTimeout(() => {

      setIsLoading(false); 

    }, 1999);
  }

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
          <Input label="Nome" placeholder="Informe seu text e sobretext" />
          <Input label="Categoria" placeholder="Se você é diarista, faxineira, doméstica" />
          <Input mask="9999" label="Desde que ano atua na área:" placeholder="Informe o ano" />
          <Input label="Telefone" mask="(99) 99999-9999" placeholder="Informe o telefone para contato" />
        </div>
        <div className="flex flex-col gap-2">
          <Input label="Valor do serviço" mask="9999,99" placeholder="Informe o valor do seu serviço" />
          <Input label="Cep:" mask="99999-999"  placeholder="Informe seu CEP" />
          <Select label="Estado" items={estados} defaultValue="1"/>
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
        <button onClick={handleForm} disabled={isLoading} className={`btn btn-primary md:w-1/2 lg:w-1/4 ${isLoading && 'loading'}`}>Enviar</button>
      </div>
    </Modal>
  );
}
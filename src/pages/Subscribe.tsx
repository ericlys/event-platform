import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { Footer } from "../components/Footer";

import ProjectImg from "../assets/code-mockup.png";
import ReactIcon from "../assets/react-icon.png";


export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, {loading}] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event');
  }

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <img src={ReactIcon} alt="" className="absolute z-[-1]"/>
      <div  className="w-full max-w-[1100px] md:flex md:items-center md:justify-between mt-10 md:mt-20 mx-auto">
        <div className="max-w-[640px] px-6 md:px-0">
          <div className="flex md:inline flex-col items-center max-h-7 md:max-h-[1.875rem]">
            <Logo/>
          </div>

          <h1 className="mt-6 md:mt-8 text-3xl md:text-[2.5rem] text-center md:text-left leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-center md:text-left text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 mt-8 md:mt-0 bg-gray-700 border border-gray-500 rounded">
          <strong className=" text-lg md:text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"  
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={ProjectImg} className=" mt-4 md:mt-10" alt="" />
      <Footer/>
    </div>
  )
}
import logoRocket from '../assets/logo-rockeat.svg?url';

export function Footer(){
  return(
    <footer className="w-full py-5 px-6 bg-gray-900 flex flex-row items-center justify-between relative before:content-[''] before:absolute before:bg-gray-500 before:top-0 before:left-0 before:h-[1px] before:w-[98%] before:mx-[1%] ">
      <div className='flex items-center'>
        <img src={logoRocket} alt="logo rocketseat" className='h-7 mr-6'/>
        <p className=' text-gray-300 text-base'>Rocketseat - Todos os direitos reservados</p>
      </div>
      <span className='text-gray-300 text-base'>Políticas de privacidade</span>
    </footer>
  )
}
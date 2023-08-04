import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col justify-center items-center 2xl:max-w-[1540px] max-w-[1240px] h-[80vh]">
        <div className="flex flex-col mx-10  items-center lg:items-start justify-center">
          <h1 className="lg:text-4xl text-3xl font-semibold text-center lg:text-left">
            Para quem é o MedBotics?
          </h1>
          <h2 className="mt-5 text-center lg:text-left text-lg w-full max-w-3xl text-gray-800">
            MedBotics é uma empresa de{" "}
            <span className="text-cyan-600">Inteligência Artificial</span> na
            área médica. Sua plataforma inovadora oferece diagnósticos
            auxiliares precisos e rápidos para médicos e especialistas de saúde.
            Confiança e eficiência garantidas. Experimente hoje mesmo!
          </h2>
          <button className="py-[1.15rem] md:w-[250px] w-full  shadow-lg bg-black text-white rounded text-2xl hover:cursor-pointer hover:rotate-[-1.25deg] mt-5" onClick={() => navigate("/registrar")}>
            Registre-se agora!
          </button>
        </div>
        <div className="hidden lg:block mt-24">
          <img
            src="https://media.discordapp.net/attachments/733806557304848455/1131918091786403921/robozinho.png?width=571&height=585"
            alt="homepage_page_img"
            className="w-[25vw]"
          />
        </div>
      </div>
      <div className="bg-transparent py-24 sm:py-24" id="about">
        <div className="mx-auto max-w-10xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-700"></h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nosso objetivo
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A MedBotics é uma conceituada empresa especializada em
              inteligência artificial, voltada para a área médica. Sua
              plataforma inovadora oferece aos médicos a possibilidade de enviar
              imagens de exames e outras informações clínicas para fins
              diagnósticos. Utilizando avançados algoritmos de aprendizado de
              máquina e visão computacional, a MedBotics realiza análises
              precisas e rápidas, fornecendo diagnósticos auxiliares confiáveis
              aos profissionais de saúde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

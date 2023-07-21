import { BiBrain } from "react-icons/bi";

import { AiOutlineMessage, AiFillPushpin } from "react-icons/ai";

import { VscCalendar } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-center items-center h-[100vh]">
        <div className="flex md:flex-row flex-col justify-center items-center 2xl:max-w-[1540px] max-w-[1240px]">
          <div className="flex flex-col mx-10  items-center lg:items-start justify-center">
            <h1 className="lg:text-4xl text-3xl font-semibold text-center lg:text-left">
              Para quem é o MedBotics?
            </h1>
            <h2 className="mt-5 text-center lg:text-left text-xl w-full">
              Ser lideres globais na integração e aplicação de Inteligencia
              Artificial na medicina.
            </h2>
            <button
              onClick={() => navigate("/login")}
              className="py-[1.15rem] md:w-[250px] w-full  shadow-lg bg-black text-white rounded text-2xl hover:cursor-pointer hover:rotate-[-1.25deg] mt-5"
            >
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
      </div>
    </div>
  );
};

export default Home;

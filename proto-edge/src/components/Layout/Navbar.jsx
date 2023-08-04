import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#2d658b] py-8 shadow-xl">
      <div className="flex justify-between mx-10">
        <div
          className="flex gap-10 items-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="https://media.discordapp.net/attachments/733806557304848455/1131918091786403921/robozinho.png?width=571&height=585"
            width={50}
          />
          <h1 className="text-gray-300 font-bold text-2xl hover:cursor-pointer">
            <span className="text-cyan-300 hover:text-cyan-200">Med</span>Botics
          </h1>
        </div>
        <div className="text-white font-bold md:flex hidden gap-12 items-center ">
          <a
            className="text-lg hover:cursor-pointer hover:text-cyan-200"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </a>
          <a
            onClick={() => navigate("/registrar")}
            className="text-lg hover:cursor-pointer hover:text-cyan-200"
          >
            REGISTRAR
          </a>
          <a
            href="#about"
            className="text-lg hover:cursor-pointer hover:text-cyan-200"
          >
            SOBRE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

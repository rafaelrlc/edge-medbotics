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
          <h1 className="text-gray-300 font-bold text-2xl">
            <span className="text-cyan-300">Med</span>Botics
          </h1>
        </div>
        <div className="text-white font-bold md:flex hidden gap-12 items-center ">
          <a
            className="text-lg hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </a>
          <a
            onClick={() => navigate("/register")}
            className="text-lg hover:cursor-pointer"
          >
            REGISTRAR
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

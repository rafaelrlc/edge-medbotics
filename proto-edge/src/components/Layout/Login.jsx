import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = ({ type }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-16 overflow-hidden">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://media.discordapp.net/attachments/733806557304848455/1131918091786403921/robozinho.png?width=571&height=585"
            alt="Your Company"
          />
          <h2 className="mt-7 text-center text-2xl  tracking-tight text-gray-800">
            {type == "login"
              ? "Entrar no MedBotics"
              : "Cadastre-se no MedBotics"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={() => {
              navigate("/workspace");
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  CRM
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="crm"
                  name="text"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {type == "register" && (
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Repita a senha
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}
            {type == "register" && (
              <div className="text-sm mt-5 text-end">
                <a
                  href="#"
                  className="font-semibold text-blue-700 hover:text-blue-600"
                >
                  Esqueceu a senha?
                </a>
              </div>
            )}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#417ba2] hover:bg-[#2d658b] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                ENTRAR
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            {type == "login" ? "Não é um membro?" : "Já possui um cadastro?"}
            <Link
              className="font-semibold leading-6 text-blue-700 hover:text-blue-900"
              to={type == "login" ? "/registrar" : "/login"}
            >
              {type == "login" ? " Registre-se" : " Faça Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

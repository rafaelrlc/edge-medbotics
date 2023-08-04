import React from "react";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
            <div>
              <a
                className="flex-none text-xl font-semibold text-gray-700 dark:text-white"
                href="#"
              >
                Portal Edge Academy
              </a>
            </div>

            <ul className="text-center">
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <a
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <a
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  href="#"
                >
                  Sobre
                </a>
              </li>
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <a
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  href="#"
                >
                  Serviços
                </a>
              </li>
            </ul>

            <div className="md:text-right flex items-center justify-center gap-2">
              <p className="text-sm text-gray-600">© 2023 MedBotics.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

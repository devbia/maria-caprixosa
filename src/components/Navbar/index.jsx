
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";
import { HiMenuAlt2 } from 'react-icons/hi'

import { useState } from "react";
import RegisterModal from "../RegisterModal";

export default function Navbar() {

  const router = useRouter();

  const [isOpenMenu, setOpenMenu] = useState(false);

  const pages = [
    {
      text: "Início",
      path: "/"
    },
    {
      text: "Perfis",
      path: "/profiles"
    },
    {
      text: "Sobre nós",
      path: "/about"
    },
  ];

  return (
    <div className="w-full flex flex-col relative">
      <div className="navbar bg-base-100 md:px-24 py-4 justify-between flex">
        <div className="navbar-start hidden lg:flex">
          <div className="flex justify-center gap-5">
            {pages.map(({ text, path }) => <NavbarItem key={text} text={text} path={path} selected={router.pathname == path} />)}
          </div>
        </div>
        <div className="navbar-center  md:w-auto ">
          <div className="flex justify-center w-full">
            <img src="/images/global/navbar-logo.png" alt="Maria Caprixosa - logo" />
          </div>
        </div>
        <div className="navbar-end w-auto lg:hidden">
          <div className="dropdown">
            <label onClick={() => setOpenMenu(!isOpenMenu)} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
          </div>
        </div>
        <div className="navbar-end gap-4 hidden lg:flex">
          <a href="#contract" className="btn btn-primary">Quero contratar</a>
          <a href="#register" className="btn btn-secondary">Quero me escrever</a>
        </div>
      </div>
      <div className={`w-full lg:hidden dropdown-content menu ${isOpenMenu ? 'flex' : 'hidden'} z-10`}>
        <ul tabIndex={0} className=" bg-[#F0ECF1] w-full px-2 py-2 rounded divide-x-2 divide-solid divide-black">
          <div className="flex flex-col justify-center gap-5">
            {pages.map(({ text, path }) => <NavbarItem key={text} text={text} path={path} mobile={true} selected={router.pathname == path} />)}
          </div>
        </ul>
      </div>

      <RegisterModal id={"register"} />
    </div>
  );
}
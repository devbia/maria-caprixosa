import { PrimaryButton, SecondaryButton } from "../Button";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";
import { HiMenuAlt2 } from 'react-icons/hi'

import { Button } from "../Button";
import { useState } from "react";

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
      text: "Sobre",
      path: "/about"
    },
  ];

  return (
    <div className="container">
      <div className="row py-3 px-5 px-md-0">
        <div className="col d-none d-lg-flex">
          <div className="d-flex h-100 align-items-center justify-content-center gap-3">
            {pages.map(({ text, path }) => <NavbarItem key={text} text={text} path={path} selected={path == router.pathname} />)}
          </div>
        </div>
        <div className="col">
          <div className="d-flex h-100 align-items-center justify-content-center">
            {/* Mobile logo */}
            <Image src={'/images/global/navbar-logo.png'} width={110} height={40} className=" d-md-none" />

            {/* Meidum devices logo */}
            <Image src={'/images/global/navbar-logo.png'} width={143} height={49} className="d-none d-md-block" />
          </div>
        </div>
        <div className="col-1 col d-lg-none">
          <div className="d-flex h-100 h-full align-items-center justify-content-center gap-md-3">
            <button class="navbar-toggler"
              type="button"
              onClick={() => setOpenMenu(!isOpenMenu)}
              aria-expanded={isOpenMenu}>
              <HiMenuAlt2 size={30} />
            </button>
          </div>
        </div>
        <div className="col d-none d-lg-flex ">
          <div className="d-flex h-100 h-full align-items-center justify-content-center gap-md-3">
            <PrimaryButton>
              Quero contratar
            </PrimaryButton>
            <SecondaryButton>
              Quero me escrever
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div className="row d-lg-none">
        <div className={`collapse navbar-collapse bg-light ${isOpenMenu && 'show'}`} id="navbarNavDropdown">
          <ul className="navbar-nav gap-2 py-2">
            {pages.map(({ text, path }) => <li className="nav-item" key={text}> <NavbarItem mobile={true} text={text} path={path} selected={path == router.pathname} /></li>)}
          </ul>
        </div>
      </div>
    </div >
  );
}
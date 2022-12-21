import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";

import { useRef, useState } from "react";
import RegisterModal from "../RegisterModal";
import { motion } from "framer-motion";
import Link from "next/link";
const variants = {
  open: { opacity: 1, height: 120 },
  closed: { opacity: 0, height: 0 },
};

export default function Navbar() {
  const router = useRouter();
  const ckRef = useRef(null);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const pages = [
    {
      text: "Início",
      path: "/",
    },
    {
      text: "Perfis",
      path: "/profiles",
    },
    {
      text: "Sobre nós",
      path: "/about",
    },
  ];

  function changeMenu() {
    setOpenMenu(!isOpenMenu);
  }

  return (
    <div className="w-full flex flex-col relative ">
      <div className="navbar bg-base-100 md:px-18 lg:px-20 py-4 justify-between flex">
        <div className="navbar-start hidden lg:flex">
          <div className="flex justify-center gap-5">
            {pages.map(({ text, path }) => (
              <NavbarItem
                key={text}
                text={text}
                path={path}
                selected={router.pathname == path}
              />
            ))}
          </div>
        </div>
        <div className="flex  w-full lg:w-auto ">
          <div className="flex justify-center w-full">
            <img
              src="/images/global/navbar-logo.png"
              alt="Maria Caprixosa - logo"
            />
          </div>
        </div>
        <div className="navbar-end w-auto lg:hidden">
          <div className="dropdown">
            <label
              onClick={() => changeMenu()}
              className="btn btn-circle btn-ghost swap swap-rotate"
            >
              <input ref={ckRef} type="checkbox" />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-end gap-4 hidden lg:flex">
          <Link href="/profiles" className="btn btn-primary md:btn-sm">
            Quero contratar
          </Link>
          <a href="#register" className="btn btn-secondary md:btn-sm">
            Quero me escrever
          </a>
        </div>
      </div>
      <motion.nav
        animate={ckRef?.current?.checked ? "open" : "closed"}
        initial={{ opacity: 0 }}
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={`w-full lg:hidden dropdown-content menu flex z-10`}
      >
        <ul
          tabIndex={0}
          className=" bg-[#F0ECF1] w-full px-2 py-2 rounded divide-x-2 divide-solid divide-black"
        >
          <div className="flex flex-col justify-center gap-5">
            {pages.map(({ text, path }) => (
              <NavbarItem
                key={text}
                text={text}
                path={path}
                mobile={true}
                selected={router.pathname == path}
              />
            ))}
          </div>
        </ul>
      </motion.nav>

      <RegisterModal id={"register"} />
    </div>
  );
}

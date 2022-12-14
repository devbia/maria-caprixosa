
import Image from "next/image";
import Link from "next/link";

import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-white w-100">
      <div className="container">
        <div className="row py-2">
          <div className="col">
            <Image src={'/images/global/footer-logo.png'} width={174} height={61} />
          </div>
          <div className="col">
            <div className="d-flex justify-content-center gap-2 h-100 align-items-center">
              <Link href={"#"}>
                <BsInstagram size={25} className="text-dark" />
              </Link>
              <Link href={"#"} className="text-dark">
                <BsLinkedin size={25} />
              </Link>
              <Link href={"#"} className="text-dark">
                <FaFacebookSquare size={25} />
              </Link>
            </div>
          </div>
          <div className="col ">
            <div className="d-flex h-100 align-items-center">
              <Link href={'#'}>
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
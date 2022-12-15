
import Image from "next/image";
import Link from "next/link";

import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import Container from "../Container";

/* export default function Footer() {
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
} */

export default function teste(params) {
  return (
    <Container>
      <div className="flex w-full flex justify-between py-4">
        <div>
          <img src="/images/global/avatar-logo.png" className="w-[100px] md:w-auto" style={{ maxWidth: '155px' }} />
        </div>
        <div className="flex h-full justify-center align-middle  self-center gap-4">
          <BsInstagram size={25} />
          <BsLinkedin size={25} />
          <FaFacebookSquare size={25} />
        </div>
        <div className="flex text-center self-center">
          <a class="link link-hover text-lg">Contato</a>

        </div>
      </div>
    </Container>
  );
}
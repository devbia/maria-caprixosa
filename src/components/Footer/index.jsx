import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import Container from "../Container";

export default function Footer(params) {
  return (
    <Container>
      <div className="flex w-full flex justify-between py-4">
        <div>
          <img
            src="/images/global/avatar-logo.png"
            className="w-[100px] md:w-auto"
            style={{ maxWidth: "155px" }}
          />
        </div>
        <div className="flex h-full justify-center align-middle  self-center gap-4">
          <BsInstagram size={25} />
          <BsLinkedin size={25} />
          <FaFacebookSquare size={25} />
        </div>
        <div className="flex text-center self-center">
          <a className="link link-hover text-lg">Contato</a>
        </div>
      </div>
    </Container>
  );
}

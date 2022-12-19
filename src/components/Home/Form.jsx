
import ContactForm from "../ContactForm";
import { CheckBox } from "../Form";

export default function Form(){
  return (
    <div className="w-full px-2 md:pl-24 bg-accent" id="contact_form">
        <div className="w-full h-full bg-bottom bg-right bg-no-repeat md:py-14 relative">
          <img src="/images/home/right-bottom.png" className="hidden lg:block absolute right-0 bottom-0" />
          <div className="hidden md:flex md:justify-center lg:justify-start">
              <ContactForm/>
          </div>
        </div>
      </div>
  );
}
import BottomMenu from "../BottomMenu";
import Footer from "../Footer";
import MobileFilter from "../Filter/MobileFilter";
import Navbar from "../Navbar";
import ContactForm from "../ContactForm";


export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      <div className="w-full">
        {children}
      </div>
      <BottomMenu />
      <MobileFilter/>
      <div className="md:hidden">
        <ContactForm isMobile={true}/>
      </div>
      <Footer />
    </>
  );
}
import BottomMenu from "../BottomMenu";
import Footer from "../Footer";
import MobileFilter from "../Filter/MobileFilter";
import Navbar from "../Navbar";
import ContactForm from "../ContactForm";
import { useEffect } from "react";
import { FilterMobileContext } from "../../hooks/FilterMobileContext";
import { TabContext } from "../../hooks/TabContext";
import { useContext } from "react";
import ModalContratar from "../Profile/ModalContratar";
import Alert from "../Alert";
export default function Layout({ children }) {
  const { setFilterMobileOpen } = useContext(FilterMobileContext);
  const { setTabOpen } = useContext(TabContext);

  useEffect(() => {
    setFilterMobileOpen(false);
    setTabOpen(null);
    document.body.style.overflow = "unset";
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full">{children}</div>
      <BottomMenu />
      <MobileFilter />
      <div className="md:hidden">
        <ContactForm isMobile={true} />
      </div>

      <ModalContratar/>
      <div className="md:hidden">
        <Alert isMobile/>
      </div>
      <div className="hidden md:flex">
        <Alert/>
      </div>
      <Footer />
    </>
  );
}
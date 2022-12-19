import BottomMenu from "../BottomMenu";
import Footer from "../Footer";
import MobileFilter from "../MobileFilter";
import Navbar from "../Navbar";


export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      <div className="w-full">
        {children}
      </div>
      <BottomMenu />
      <MobileFilter/>
      <Footer />
    </>
  );
}
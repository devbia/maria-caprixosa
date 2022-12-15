import BottomMenu from "../BottomMenu";
import Footer from "../Footer";
import Navbar from "../Navbar";


export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      <div className="w-full">
        {children}
      </div>
      <BottomMenu />
      <Footer />
    </>
  );
}
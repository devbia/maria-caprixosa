import Footer from "../Footer";
import Navbar from "../Navbar";


export default function Layout({ children }) {

  return (
    <div className="container-fluid px-0">
      <div className="container-fluid bg-white">
        <Navbar />
      </div>
      <div className="container-fluid px-0">
        {children}
      </div>

      <Footer />
    </div>
  );
}
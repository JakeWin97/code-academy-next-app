import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500">
        <Sidebar/>
        <div className="flex flex-grow">
          {children}
        </div>
      </div>
      <Footer/>
      
    </>
  );
};

export default Layout;
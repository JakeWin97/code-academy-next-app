import Header from "./header";
import Sidebar from "./sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar/>
        <div className="flex flex-grow">
          {children}
        </div>
      </div>
      
    </>
  );
};

export default Layout;
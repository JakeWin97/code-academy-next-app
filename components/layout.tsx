import Header from "./header";
import Sidebar from "./sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar/>
        <div>
          {children}
        </div>
      </div>
      
    </>
  );
};

export default Layout;
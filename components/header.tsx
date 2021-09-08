const Header:React.FC = () => {
    return (
    <header className="z-10 font-sans h-24 px-8 text-3xl border-b-8 border-black bg-gradient-to-r from-blue-500 to-green-400 font-bold text-white w-full sticky top-0 flex items-center justify-between">
        <span>GROCERIES 4U</span>
        <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-blue-500">
            <span className="material-icons">shopping_cart</span>
        </div>
    </header>
    );
}

export default Header;


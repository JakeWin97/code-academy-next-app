const Header:React.FC = () => {
    return (
    <header className="h-16 px-8 bg-blue-600 text-white w-full sticky top-0 flex items-center justify-between">
        <span>HEADER</span>
        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600">
            <span className="material-icons">flutter_dash</span>
        </div>
    </header>
    );
}

export default Header;


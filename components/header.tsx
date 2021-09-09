const Header:React.FC = () => {
    function hide() {
        const button = document.getElementById('side_btn')
        const sidebar = document.getElementById('sidebar');

        if (sidebar!=null && sidebar!= undefined)
        {
            if (sidebar.style.display != 'none'){
                sidebar.style.display = 'none';
            }
            else {
                sidebar.style.display = 'block';
            }
            
        }  
    }

    return (
    <header className="z-10 font-sans h-24 px-8 text-3xl border-b-8 border-black bg-gradient-to-r from-blue-500 to-green-400 font-bold text-white w-full sticky top-0 flex items-center justify-between">
        <div className="h-10 w-10 bg-white flex items-center justify-center text-blue-500 cursor-pointer" id="side_btn" onClick={hide}>
            <span className="material-icons">menu</span>
        </div>
        <span>GROCERIES 4U</span>
        <div className="h-12 w-12 bg-white flex items-center justify-center text-blue-500">
            <span className="material-icons">shopping_cart</span>
        </div>
    </header>
    );
}

export default Header;


import Link from "next/link"

const Header: React.FC = () => {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');

        if (sidebar != null && sidebar != undefined) {
            if (sidebar.style.display == 'none' || sidebar.style.display == '') {  //' ' for first time launch
                sidebar.style.display = 'block';
            }
            else {
                sidebar.style.display = 'none';
            }
        }
    }

    function toggleBasket() {
        const basket = document.getElementById('basket_wrapper');
        if (basket != null && basket != undefined) {
            if (basket.style.display == 'none' || basket.style.display == '') {
                basket.style.display = 'block';
            }
            else {
                basket.style.display = 'none';
            }
        }
    }

    return (
        <header className="z-10 font-sans h-24 px-8 text-3xl border-b-8 border-black bg-gradient-to-r from-blue-500 to-green-400 font-bold text-white w-full sticky top-0 flex items-center justify-between">
            <div className="h-10 w-10 bg-gray-300 flex items-center justify-center text-blue-500 cursor-pointer" id="side_btn" onClick={toggleSidebar}>
                <button className="hover:opacity-70 material-icons" title="Menu">menu</button>
            </div>
            <Link href="/"><span className="hover:text-red-500 cursor-pointer">GROCERIES 4U</span></Link>
            <div className="h-12 w-12 bg-gray-300 flex items-center justify-center text-blue-500">
                <span className="material-icons cursor-pointer hover:opacity-70" title="Basket" onClick={toggleBasket}>shopping_cart</span>
            </div>
        </header>
    );
}

export default Header;


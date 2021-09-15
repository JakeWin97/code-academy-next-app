import Link from 'next/link';

const Sidebar:React.FC = () => {
    return (
    <div className="flex bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500" id="sidebar">
        <ul className="pb-2 bg-blue-500 w-32 items-center leading-10 text-white font-sans rounded-r-lg">
            <Link href="/about"><li>About Us</li></Link>
            <li>Contact Us</li>
        </ul>
    </div>
    );
}

export default Sidebar;

import Link from 'next/link';

const Sidebar:React.FC = () => {
    return (
    <div className="flex h-full hidden" id="sidebar">
        <ul className="pb-2 bg-blue-500 w-32 items-center leading-10 text-white font-sans rounded-r-lg h-full">
            <Link href="/about"><li>About Us</li></Link>
            <li>Contact Us</li>
        </ul>
    </div>
    );
}

export default Sidebar;

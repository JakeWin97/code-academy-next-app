import Link from "next/link";
import React from "react";

export default function Home() {
    return (

        <div className="home min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 w-full">
            <div className="text-center font-sans">
                <h1 className="text-9xl font-bold text-blue-600 mb-5 bg-green-400 p-8 rounded-3xl shadow-2xl">GROCERIES 4U</h1>
                <h1 className="text-4xl mb-10 font-bold text-black">Products and prices to love</h1>
                <Link href="/shop"><button className="text-xl rounded-3xl bg-green-400 p-5 font-semibold shadow-2xl hover:bg-blue-500 hover:text-white">SHOP NOW</button></Link>
            </div>
        </div>
    );
}

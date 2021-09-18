import Image from 'next/image'

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 flex-grow">
        <div className="mt-5 w-auto p-12 mb-8">
            <h1 className="text-2xl font-sans mb-4 font-semibold p-4 pl-8 bg-blue-500 rounded-2xl text-white">CONTACT US</h1>
            <h1 className="text-8xl text-center font-sans font-semibold">
            We'd love to hear from you
            </h1>
        </div>
        
      <main className="py-5 flex flex-col flex-1 items-center">
        
        <div className="flex flex-wrap flex-col sm:flex-row w-full justify-center items-center bg-gradient-to-b from-blue-500 to-green-400 p-20 rounded-2xl shadow-2xl border-white border-4 mb-10">
            <div className="text-3xl font-sans w-96 text-center font-semibold">
                <h1>Head Office</h1>
                <h1>Groceries 4U</h1>
                <h1>Park Avenue</h1>
                <h1>Birmingham</h1>
                <h1 className="mb-6">B10 9TZ</h1>
                <span className="material-icons">call</span>
                <h1 className="mb-6">0121 123456 </h1>
                <span className="material-icons">email</span>
                <h1 className="mb-9">info@groceries4u.co.uk</h1>

                <div className="flex justify-center">
                    <img className="mr-3 cursor-pointer hover:opacity-80" src="/facebook.png" alt="" width={64} height={64}/>
                    <img className="mr-3 cursor-pointer hover:opacity-80" src="/linkedin.png" alt="" width={64} height={64}/>
                    <img className="mr-3 cursor-pointer hover:opacity-80" src="/twitter.png" alt="" width={64} height={64}/>
                    <img className="mr-3 cursor-pointer hover:opacity-80" src="/insta.png" alt="" width={64} height={64}/>
                </div>
            </div>
            <div className="vl min-h-full mr-24 ml-24"></div>
            <div className="w-96">
                <form className="text-xl text-black">
                    <input className="bg-gray-300" type="text" id="name" name="name" placeholder="Full Name"></input><br></br>
                    <input className="bg-gray-300" type="text" id="reason" name="reason" placeholder="Reason for Contact"></input><br></br>
                    <textarea id="message" placeholder="Your Message" className="w-96 h-56 bg-gray-300"></textarea><br></br>
                    <input className="bg-gray-300" type="text" id="email" name="email" placeholder="Email"></input><br></br>
                    <input className="bg-gray-300" type="text" id="phone" name="phone" placeholder="Phone"></input><br></br>
                    <input type="submit" value="Submit" className="cursor-pointer bg-black text-white hover:opacity-80"></input>
                </form>
            </div>
        </div>  
      </main>
    </div>
    )
}

export default Contact;
const ContactForm: React.FC = () => {
    return (
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
    )
}

export default ContactForm;

const ContactDetails: React.FC = () => {
    return (
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
                <img className="mr-3 cursor-pointer hover:opacity-80" src="/facebook.png" alt="" width={64} height={64} />
                <img className="mr-3 cursor-pointer hover:opacity-80" src="/linkedin.png" alt="" width={64} height={64} />
                <img className="mr-3 cursor-pointer hover:opacity-80" src="/twitter.png" alt="" width={64} height={64} />
                <img className="mr-3 cursor-pointer hover:opacity-80" src="/insta.png" alt="" width={64} height={64} />
            </div>
        </div>
    )
}

export default ContactDetails;
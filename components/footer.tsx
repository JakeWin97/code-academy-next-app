const Footer:React.FC = () => {
    // Function to scroll back to the top of the page if user clicks button in footer.
    function scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer className="w-full h-24 flex justify-center items-center border-t border-solid border-gray-200 bg-gradient-to-r from-green-400 to-blue-500">
    
        <div className="h-12 w-12 bg-white flex items-center justify-center text-blue-500 rounded-full">
            <button className="material-icons" title="Back to top" onClick={scrollTop}>arrow_upward</button>
        </div>
      </footer>
    )
}

export default Footer;
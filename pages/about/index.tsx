import AboutCard from "../../components/about_card";
import people from "../public/people.jpg"
import Image from 'next/image'

const About = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 flex-grow">
      
      <main className="py-5 flex flex-col flex-1 items-center py-5">
        <h1 className="m-10 leading-snug text-8xl text-center font-sans">
          About us
        </h1>
        <div className="flex flex-wrap flex-col sm:flex-row w-full justify-center items-center">
        <AboutCard header="Our Products" description="Find out more about the great products we offer" image="/groceries.jpg" link="/products" alt="Image of a bag of groceries"></AboutCard>
        {/* <AboutCard header="Our Services" description="Find out more about the services we offer" image="" link="/products"></AboutCard> */}
        <AboutCard header="Our People" description="Find out more about those behind our success .................." link="/people" image='/people.jpg' alt="Image of a shopworker holding strawberries"></AboutCard>
        {/* <AboutCard header="Our History" description="Find out more about our history" image="" link="/products"></AboutCard>
        <AboutCard header="Our Mission" description="Our short-term goals and plans for the future." image="" link="/mission"></AboutCard> */}
      </div>  
      </main>
    </div>
    )
}

export default About;
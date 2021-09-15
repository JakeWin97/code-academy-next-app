import AboutCard from "../../components/about_card";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 flex-grow">
      
      <main className="py-5 flex flex-col flex-1 items-center py-5">
        <h1 className="m-10 leading-snug text-8xl text-center font-sans">
          About us
        </h1>
        <div className="flex flex-wrap flex-col sm:flex-row w-full justify-center items-center">
        <AboutCard header="Our Products" description="Groceries 4U offers an extensive range of products. Find out more about them here." image="/groceries.jpg" link="our-products" alt="Image of a bag of groceries"></AboutCard>
        <AboutCard header="Our Services" description="Our online and instore services are designed to give you the best shopping experience." image="/services.jpg" link="our-services" alt="Image of click and collect counter"></AboutCard>
        <AboutCard header="Our People" description="At Groceries 4U people are at the heart of everything we do." link="our-people" image='/people.jpg' alt="Image of a shopworker holding strawberries"></AboutCard>
        <AboutCard header="Our History" description="How did all this happen? Grocery 4U's journey so far." image="/history.jpg" link="our-history" alt="Black and white photo of a supermarket"></AboutCard>
        <AboutCard header="Our Mission" description="We're always looking forward. Here are goals and ambitions for the future." image="/mission.jpg" link="our-mission" alt="Image of a shopping trolley"></AboutCard>
      </div>  
      </main>
    </div>
    )
}

export default About;
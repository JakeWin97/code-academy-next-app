import React from "react";
import LAboutDetail from "../../components/about_details-left";
import RAboutDetail from "../../components/about_details-right";
import PageTitle from "../../components/page_title";

const OurPeople = () => {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 flex-grow">
      <PageTitle pageName="OUR PEOPLE" message="Putting people first, always"></PageTitle>
      <main className="py-5 flex flex-col flex-1 items-center">
        <div className="flex flex-wrap flex-col sm:flex-row w-full justify-center items-center mb-4">
          <div className="bg-white w-full h-full p-14 rounded-2xl bg-green-400 text-center">
            <div className="p-2">
              <h1 className="pb-8 text-6xl flex flex-wrap font-semibold font-sans">At Groceries 4U, people matter</h1>
              <h1>People are at the heart of everything that we do. Everyone in the Groceries 4U team matters</h1>
              <h1>and everyone contributes to our success. We look after our colleagues because they look after</h1>
              <h1>you. Find out more below.</h1>
            </div>
          </div>
        </div>
        <RAboutDetail header="Our Roles"
          line1="We offer roles across various fields. Including: IT,"
          line2="Sales, Marketing, Finance and Security. Whatever your"
          line3="career path, there's a role for you."
          image="/checkout.jpg" alt="Image of a lady operating the till">
        </RAboutDetail>

        <LAboutDetail header="Our Culture"
          line1="Culture is important to us. It enables our colleagues"
          line2="and customers to enjoy the best experience. Our core"
          line3="principles are: Respect, Honesty and Accountabilty"
          image="/companyculture.jpg" alt="Image of employyees touching fists">
        </LAboutDetail>


        <RAboutDetail header="Employee Benefits"
          line1="Working for us comes with many perks. Regardless"
          line2="of your role you'll enjoy in-store and online discounts,"
          line3="access to our pension scheme and much more."
          image="/smiling.jpg" alt="Image of smiling employees giving the thumbs up.">
        </RAboutDetail>

        <LAboutDetail header="Health & Safety"
          line1="Supporting our colleagues is our top priority. We"
          line2="work hard to ensure all our work environments are"
          line3="safe and supportive 24 hours a day, 365 days a year."
          image="/health.jpg" alt="Image of a health and saftey inspector.">
        </LAboutDetail>



      </main>
    </div>
  )

}

export default OurPeople;
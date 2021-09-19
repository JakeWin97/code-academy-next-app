import React from "react";
import LAboutDetail from "../../components/about_details-left";
import RAboutDetail from "../../components/about_details-right";
import PageTitle from "../../components/page_title";

const OurServices = () => {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 flex-grow">
      <PageTitle pageName="Our Services" message="Services to make you smile"></PageTitle>
      <main className="py-5 flex flex-col flex-1 items-center">
        <div className="flex flex-wrap flex-col sm:flex-row w-full justify-center items-center mb-4">
          <div className="bg-white w-full h-full p-14 rounded-2xl bg-green-400 text-center">
            <div className="p-2">
              <h1 className="pb-8 text-6xl flex flex-wrap font-semibold font-sans">We always go the extra mile</h1>
              <h1>At Groceries 4U we are always striving to deliver the best possible customer experience. With</h1>
              <h1>this in mind, we offer a range of online and instore servies, each designed to enable you to</h1>
              <h1>shop with a smile. Find out more below.</h1>
            </div>
          </div>
        </div>
        <RAboutDetail header="Click & Collect"
          line1="Our Click & Collect services allow you to shop online"
          line2="and collect from your nearest store. Many of our stores"
          line3="now offer same day collection."
          image="/click_collect.jpg" alt="Image of a click & collect point">
        </RAboutDetail>

        <LAboutDetail header="Loyalty Card"
          line1="Regular shopper with us? Sign up for one of our"
          line2="loyalty cards and earn points with every shop!"
          line3="Redeem points for discounts in-store or online."
          image="/loyalty.png" alt="Image of a customer holding their loyalty card.">
        </LAboutDetail>

        <RAboutDetail header="Cafe"
          line1="Feeling peckish? Enjoy something from one of our in-store"
          line2="cafes. Food served from breakfast through to dinner. Check"
          line3="out our great value meal deals."
          image="/cafe.jpg" alt="Image of a full English breakfast.">
        </RAboutDetail>

        <LAboutDetail header="Pharmacy"
          line1="Collect your prescriptions from one of our in-store"
          line2="pharmacies. Need advice? Speak to one of our friendly"
          line3="pharmacists and they'll be happy to help."
          image="/pharmacy.jpg" alt="Image of a smiling pharmacist">
        </LAboutDetail>

        <RAboutDetail header="Travel Money"
          line1="Holiday planned? At Groceries 4U we make it quick"
          line2="and easy to buy your travel money both in-store"
          line3="and online."
          image="/currency.jpg" alt="Image of some Euro notes.">
        </RAboutDetail>

      </main>
    </div>
  )

}

export default OurServices;
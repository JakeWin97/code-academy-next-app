import React from "react";
import Image from 'next/image'
import LAboutDetail from "../../components/about_details-left";
import RAboutDetail from "../../components/about_details-right";

const OurProducts = () => {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 flex-grow">
      
      <main className="py-5 flex flex-col flex-1 items-center">
        <h1 className="m-10 leading-snug text-8xl text-center font-sans">
          Our Products
        </h1>
        <div className="flex flex-wrap flex-col sm:flex-row w-full justify-center items-center mb-4">
        <div className="bg-white w-full h-full p-14 rounded-2xl bg-green-400 text-center">
            <div className="p-2">
                <h1 className="pb-8 text-6xl flex flex-wrap font-semibold font-sans">Quality products, quality prices </h1>
                <h1>At Groceries 4U, we offer an extensive range of products including our exciting own brands that</h1>
                <h1>you won't find anywhere else. Alongside this we stock many of the UK's most popular brands.</h1>
                <h1>Whatever you need, we've got it covered. Find out more below.</h1>
            </div>
        </div>
      </div>
      <RAboutDetail header="Fruit and Veg"
        line1="At Groceries 4U we make getting your 5-a-day easy."
        line2="Enjoy great prices on a wide range of fresh fruit"
        line3="and vegetables."
        image="/fruit_veg.jpg" alt="An image of an assortment of fruit and vegetables.">
        </RAboutDetail>

      <LAboutDetail header="Meat Counter" 
            line1="At our meat counter you'll find fresh meat and poultry," 
            line2="served to you with a smile by our in-house butchers." 
            line3="All our meat is sourced from British and Irish farmers." 
            image="/meat.jpg" alt="An image of a meat counter with various cuts of meat.">
        </LAboutDetail>

      <RAboutDetail header="Dairy Range"
        line1="We source the best quality free-range dairy products"
        line2="and deliver them to you at competive prices. Enjoy"
        line3="our full range today."
        image="/dairy.jpg" alt="An image of various dairy products">
        </RAboutDetail>

        <LAboutDetail header="Freezer"
        line1="Our freezer range includes many of the UK's favourite"
        line2="brands alongside a host of our own frozen products and"
        line3="ready-meals."
        image="/freezer.jpg" alt="An image of the frozen aisle at a supermarket.">
        </LAboutDetail>

        <RAboutDetail header="Kitchen and Bathroom" 
            line1="At Groceries 4U we cover all your household needs" 
            line2="that's why in our kitchen and bathroom ranges you'll" 
            line3="find everything you need to keep them in top shape." 
            image="/bathroom.jpg" alt="An image of someone carrying bathroom supplies.">
        </RAboutDetail>

      </main>
    </div>
    )

}

export default OurProducts;
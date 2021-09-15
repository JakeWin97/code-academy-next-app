import classNames from "classnames";
import { IProduct } from "../models/product";
import Link from "next/link";
import { IAbout } from "../models/about";
import Image from 'next/image'

const AboutCard:React.FC <IAbout> = ({ header, description, link, image, alt }) => {
	return (
        <Link href={`/about/${link}`}>
		<a className="z-0 m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:opacity-70 transform transition duration-700 ease-in-out hover:-translate-y-2 hover:shadow-md focus:shadow-md focus:outline-none">
            <div
              id="image"
              className="h-62 rounded-t-lg flex items-center justify-center">
                <Image src={image} alt={alt} width="960" height="540"/>
            </div>
            <div className="p-5 bg-white font-sans">
              <h2 className="mb-2 text-3xl font-medium">{header}</h2>
              <p className="m-0 mb-4 text-medium">{description}</p>
            </div>
          </a>
    </Link>
	);
};

export default AboutCard;
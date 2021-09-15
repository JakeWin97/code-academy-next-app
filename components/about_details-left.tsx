import { IAboutDetail } from "../models/about-detail";
import Image from 'next/image'

const LAboutDetail:React.FC <IAboutDetail> = ({ header, line1, line2, line3, image, alt }) => {
    return (
        <div className="flex w-full bg-white mb-4 rounded-2xl bg-green-400">
        <Image src={image} alt={alt} width="320" height="200"/>
        <div className="p-6 flex-grow text-center">
            <h1 className="pb-5 text-5xl font-semibold font-sans">{header}</h1>
            <h1>{line1}</h1>
            <h1>{line2}</h1>
            <h1>{line3}</h1>
        </div>
      </div>
    )
}

export default LAboutDetail;
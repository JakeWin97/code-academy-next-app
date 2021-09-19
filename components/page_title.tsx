import { IPageTitle } from "../models/page_title";

const PageTitle: React.FC<IPageTitle> = ({ pageName, message }) => {
    return (
        <div className="mt-5 w-auto p-12 mb-2">
            <h1 className="text-2xl font-sans mb-4 font-semibold p-4 pl-8 bg-blue-500 rounded-2xl text-white">{pageName.toUpperCase()}</h1>
            <h1 className="text-8xl text-center font-sans font-semibold">
                {message}
            </h1>
        </div>
    )
}

export default PageTitle;
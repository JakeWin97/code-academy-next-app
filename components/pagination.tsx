import { IPagination } from "../models/pagination";

const Pagination:React.FC<IPagination> = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNums = [];

    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNums.push(i) // Ensure the number of page numbers are correct based on the slicing.
    }

    return (
        <nav className="mt-8 mb-8 inline">
            <ul className="pagination inline pt-8">
                {pageNums.map(num => (
                    <li  key={num} className="page-num inline pr-5 pl-5 pt-4 pb-4 bg-white border" onClick={() => paginate(num)}>
                        <a className="page-link border-black">{num}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Pagination
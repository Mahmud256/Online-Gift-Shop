const Pagination = ({ productPerPage, totalProduct, currentPage, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center space-x-2 py-2">
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 ${currentPage === 1 ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"}`}
                    >
                        Previous
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`p-2 border border-gray-300 hover:border-blue-500 cursor-pointer ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                        <button onClick={() => onPageChange(number)} className="px-4 py-2 rounded-full text-slate-950">
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === Math.ceil(totalProduct / productPerPage)}
                        className={`px-4 py-2 ${currentPage === Math.ceil(totalProduct / productPerPage) ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"}`}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

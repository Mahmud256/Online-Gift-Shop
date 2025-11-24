const Pagination = ({ productPerPage, totalProduct, currentPage, onPageChange }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProduct / productPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    let visiblePages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);
    visiblePages = pageNumbers.slice(start - 1, end);

    return (
        <nav>
            <ul className="flex flex-wrap justify-center my-5">
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 ${currentPage === 1 ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"}`}
                    >
                        Prev
                    </button>
                </li>
                {visiblePages.map((number) => (
                    <li key={number} className={`mx-1 ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                        <button onClick={() => onPageChange(number)} className="px-3 py-1 text-sm">
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 ${currentPage === totalPages ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"}`}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

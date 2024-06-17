const Pagination = ({ currentPage, numPages, handlePrev, handleNext }) => {
  const paginationText = (page) => (
    <span className="text-sm text-gray-700 dark:text-gray-400">
      Page <span className="font-semibold">{page}</span> of{" "}
      <span className="font-semibold">{numPages}</span> Entries
    </span>
  );

  return (
    <div className="grid grid-rows-1 md:grid-rows-2 md:grid-cols-3 justify-items-center md:items-baseline lg:items-baseline">
      <div className="md:col-span-1 md:justify-self-start">
        {paginationText(currentPage)}
      </div>
      <div className="md:col-span-2 md:justify-self-end flex justify-center md:justify-end">
        <div className="inline-flex">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white rounded-s bg-blue-700 hover:bg-blue-800"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-700 border-0 border-s border-blue-900 rounded-e hover:bg-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

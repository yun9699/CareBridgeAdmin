


  const makeArr = (from, to, prev, next) => {


    let arr = []

    if(prev){
      arr.push(from -1)
    }

    for (let i = from; i <= to ; i++) {
      arr.push(i)
    }

    return arr
  }

  function PageComponent({pageResponse}) {

    const current = pageResponse.pageRequest.page + 1;
    const tempLast = Math.ceil(current / 10.0) * 10;
    const startPage = tempLast - 9;
    const endPage = pageResponse.total < tempLast ? pageResponse.total : tempLast;

    const pageNums = makeArr(startPage, endPage, false, false);

    const lis = pageNums.map(num => (

        <li
            className='px-4 py-2 text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
            key={num}
        >
          {num}
        </li>
    ));

    return (
        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
  <nav aria-label="Table navigation">
    <ul className="inline-flex items-center">
      <li>
        <button
            className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
            aria-label="Previous"
        >
          <svg
              aria-hidden="true"
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
          >
            <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </li>

      {lis}
      <li>
        <button
            className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
            aria-label="Next"
        >
          <svg
              className="w-4 h-4 fill-current"
              aria-hidden="true"
              viewBox="0 0 20 20"
          >
            <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</span>
    );

  }
export default PageComponent;
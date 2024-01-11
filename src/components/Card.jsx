export default function Card({
  id,
  img,
  name,
  detail,
  num,
  pricetag,
  quanti,
  del,
  formatNumber
}) {
  return (
    <div>
      <div className="rounded-lg h-full md:w-[500px]">
        <div className="justify-between mb-2 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src={img}
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{name}</h2>
              <p className="mt-1 text-xs text-gray-700">{detail}</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 text-center"
                  onClick={() => quanti(id, "decrement")}
                >
                  -
                </span>
                <span className="bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 text-center">
                  {num}
                </span>
                <span
                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 text-center"
                  onClick={() => quanti(id, "increment")}
                >
                  +
                </span>
              </div>

              <div className="text-end font-bold pr-1">
                <small className="text-sm">{formatNumber(pricetag)} Bath</small>
              </div>

              <div
                className="text-end pr-1"
                onClick={() => {
                  del(name);
                }}
              >
                <small>delete</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

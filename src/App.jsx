import "./App.css";
import Card from "./components/Card";
import { MyCartContext } from "./components/context";

function App() {
  const { cart, total, amount, del, quanti, formatNumber } = MyCartContext();

  return (
    <>
      <div className="h-screen w-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">
          Cart Items ({amount})
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-1 md:flex md:space-x-2 lg:px-6">
          <div className="flex flex-col items-center">
            {cart.map((d) => (
              <Card
                key={d.id}
                id={d.id}
                img={d.img}
                name={d.name}
                detail={d.detail}
                num={d.num}
                pricetag={d.price}
                quanti={quanti}
                del={del}
                formatNumber={formatNumber}
              />
            ))}
          </div>
          <div className="mx-auto h-full max-w-[450px] rounded-lg border bg-white p-6 shadow-md md:w-[350px]">
            <div>
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">{formatNumber(total)} Bath</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">
                  {cart.length === 0 ? 0 : 30} Bath
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold text-end">
                    {cart.length === 0 ? 0 : formatNumber(total + 30)} Bath
                  </p>
                  <p className="text-sm text-end text-gray-700">
                    including VAT
                  </p>
                </div>
              </div>
            </div>
            <button
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 disabled:bg-blue-300"
              disabled={cart.length === 0 ? true : false}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

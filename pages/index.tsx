export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div className="bg-white p-6 rounded-3xl shadow-xl ">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="flex justify-center">
          <button className="mt-5  bg-blue-500 hover:bg-teal-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto hover:text-black active:bg-yellow-500">
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl ">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-bold">Tony Molly</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white p-6 rounded-3xl shadow-xl ">
        <div className="flex flex-col mb-5 justify-between items-center ">
          <div className="flex w-full justify-between items-center">
            <span>⬅️</span>
            <div className="space-x-3 ">
              <span>★ 4.9</span>
              <span className="shadow-xl p-2 rounded-md">♥</span>
            </div>
          </div>
          <div className="bg-red-400 w-full h-80 mt-2" />
          <div className="w-full">
            <div className="flex flex-col my-2">
              <span className="font-medium ">Swoon Longue</span>
              <span className="text-xs text-gray-500">Chair</span>
            </div>
            <div className="w-full flex justify-between">
              <div className="space-x-2">
                <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
                <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
                <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2  ring-teal-500 transition" />
              </div>
              <div className="flex items-center gap-2">
                <button className=" bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium  text-gray-400 rounded-lg">
                  -
                </button>
                <span>1</span>
                <button className=" bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium  text-gray-400 rounded-lg">
                  +
                </button>
              </div>
            </div>
            <div className="w-full flex gap-2">
              <span className="font-medium">$450</span>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl "></div>
    </div>
  );
}

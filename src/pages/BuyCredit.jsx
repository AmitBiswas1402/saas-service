import { assets, plans } from "../assets/assets"

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">See plans</button>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">Choose the plans</h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((items, index) => (
          <div className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700" key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p>{items.id}</p>
            <p>{items.desc}</p>
            <p>
              <span>${items.price}</span> / {items.credits} credits
            </p>
            <button>Purchase</button>
          </div>
        ))}
      </div>

    </div>
  )
}
export default BuyCredit
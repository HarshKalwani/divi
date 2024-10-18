import whitedress from "../assets/whitedress.webp"
import brownbag from "../assets/borwnbag.jpeg"
import greenshoes from "../assets/greenshoes.jpeg"

const ThreeImage = () => {
  return (
    <div className="mt-20 bg-white w-[100%] flex justify-center items-center mb-20">
      <div className="flex gap-10 min-h-10 ">
        <div className="relative group">
          <img src={whitedress} alt="white dress" />
          <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity font-extrabold">
            Featured Products 
          </span>
        </div>
        <div className="flex flex-col justify-between">
        <div className="relative group">
        <img src={brownbag} alt="brownbag" className="w-[32rem]" />
        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity font-extrabold">
            Last Discount 
          </span>
        </div>
          
        <div className="relative group">
        <img src={greenshoes} alt="greenshoes" className="w-[32rem]" />
        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity font-extrabold">
            Latest Products 
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeImage
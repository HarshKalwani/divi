import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
import four from "../assets/four.jpg"
const products = [
  {
    "id":1,
    "img":one,
    "title":"Commando Rose",
    "price":"$ 412,00"
  },
  {
    "id":2,
    "img":two,
    "title":"Minim Veniam",
    "price":"$ 647,00"
  },
  {
    "id":3,
    "img":three,
    "title":"Tempor Exsamha",
    "price":"$ 259,00"
  },
  {
    "id":4,
    "img":four,
    "title":"Dolor Amet",
    "price":"$ 742,00"
  }
]
const FeaturedProducts = () => {
  return (
    <div className='w-[100%] bg-gray-50 pt-3 flex flex-col'>
      <div className="mt-20">
        <p className='text-center font-bold text-2xl'>Featured Products</p>
        <p className="text-center text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className="flex justify-between gap-5 w-2/3 mx-auto mt-12">
        {products.map((product) => {
          return(
            <div className="h-full" key={product.id} >
            <img src={product.img}  alt="product image" className=" h-[18rem] "/>
            <p className="text-md font-semibold text-gray-900">{product.title}</p>
            <p className="text-sm text-gray-500">{product.price}</p>
            </div>
            
          )
        })}
      </div>
      <button className='p-3 mt-12 text-white bg-[#cc9966] hover:text-[#cc9966] hover:bg-white mx-auto rounded-sm mb-8'> EXPLORE MORE → </button>
    </div>
  )
}

export default FeaturedProducts
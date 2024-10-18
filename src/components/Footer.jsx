import shop1 from "../assets/shop1.png"
import shop2 from "../assets/shop2.png"
import shop3 from "../assets/shop3.png"
import shop4 from "../assets/shop4.png"
const materials=[
    {
        "id":1,
        "img":shop1,
        "heading":"Social Shop",
        "subheading":"Lorem ispul dolor"
    },
    {
        "id":2,
        "img":shop2,
        "heading":"Free Shipping",
        "subheading":"Lorem ispul dolor"
    },
    {
        "id":3,
        "img":shop3,
        "heading":"Daily Discount",
        "subheading":"Lorem ispul dolor"
    },
    {
        "id":4,
        "img":shop4,
        "heading":"Fast Support",
        "subheading":"Lorem ispul dolor"
    },
]

const Footer = () => {
  return (
    <div className="w-[100%] bg-gray-50 pt-3 pb-12">
        <div className="mt-12 flex gap-4 justify-between mx-auto w-3/5">
            {materials.map((material) => {
                return(
                    <div className="flex gap-6" key={material.id}>
                        <img src={material.img} alt="image" className="h-8"/>
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-800">{material.heading}</p>
                            <p className="text-gray-400">{material.subheading}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Footer
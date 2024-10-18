const RecentCategory = () => {
    return (
        <div className="w-[100%] pt-3 flex flex-col mb-20">
            <div className="mt-20">
                <p className='text-center font-bold text-2xl'>Recently Categories</p>
                <p className="text-center text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="flex justify-between gap-5 w-2/3 mx-auto mt-12 h-full">
                <div className="w-1/3 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-hero5 h-[30rem] relative hover:brightness-50 transition duration-300 ease-in-out">
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <p className="text-2xl font-bold">Straw Hats</p>
                        <p>29 items</p>
                    </div>
                </div>

                <div className="w-1/3 flex flex-col justify-between h-[30rem] gap-5">
                    <div className="flex justify-center items-center bg-hero3 bg-no-repeat bg-cover bg-center h-1/2 relative  hover:brightness-50 transition duration-300 ease-in-out">
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <p className="text-2xl font-bold">Straw Hats</p>
                            <p>29 items</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-hero4 bg-no-repeat bg-cover bg-center h-1/2 relative  hover:brightness-50 transition duration-300 ease-in-out">
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <p className="text-2xl font-bold">Straw Hats</p>
                            <p>29 items</p>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-hero2 h-[30rem] relative  hover:brightness-50 transition duration-300 ease-in-out">
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <p className="text-2xl font-bold">Straw Hats</p>
                        <p>29 items</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentCategory
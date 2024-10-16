// eslint-disable-next-line react/prop-types
function Hero({name}){
    return(
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-[90%] w-[100%]">

        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Awesome Website</h1>
                    <p className="text-xl mb-6 mt-[10vh]">Discover amazing features and unleash your potential with our cutting-edge solutions.</p>
                    <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">Get Started</button>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg">
                    <p className="text-xl font-semibold text-white">
                        Hello, <span className="text-yellow-300">{name}</span>!
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1713098372674-cbf10e8c2bba?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" className="rounded-lg shadow-xl" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero;
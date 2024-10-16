// eslint-disable-next-line react/prop-types
function NavBar({kuchkuch}){
    return(
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">{String(kuchkuch).toUpperCase()}</div>
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>


                <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Links</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;
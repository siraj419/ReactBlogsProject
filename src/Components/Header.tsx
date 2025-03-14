
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div 
        className="bg-white flex justify-between items-center px-10 py-4 border-b-1 border-gray-300"
    >
        <input 
            type="text"
            placeholder="Search Blog..."
            className="p-3 border-1 rounded-4xl text-sm border-gray-400"
        />
        <BiUserCircle 
            size={32}
        />
    </div>
  )
}

export default Header;
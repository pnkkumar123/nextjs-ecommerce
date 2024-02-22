import Link from "next/link";
import { MdSwitchAccount } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";


const PageButton = () => {
  return (
    <div className="fixed top-60 right-2 z-20 flex flex-col gap-2">
     <Link 
     href={"/profiel"}
     className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 overflow-x-hidden group cursor-pointer">
  <div>
          <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />  
          <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />  
        </div>
        <p className="text-xs font-semibold">Profile</p>
     </Link>
     <Link 
     href={"/profiel"}
     className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 overflow-x-hidden group cursor-pointer relative text-[#33475b]">
  <div className="flex justify-center items-center">
          <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />  
          <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />  
        </div>
        <p className="text-xs font-semibold">Buy Now</p>
        <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4  rounded-full flex items-center justify-center font-semibold">0</p>
     </Link>
      
    </div>
  );
};

export default PageButton;

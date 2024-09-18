import { IoMdClose } from 'react-icons/io';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DropDownMenu({ toggleDropDown }) {
  return (
    <div className='absolute bg-white w-screen h-screen left-0 top-0'>
      {/* Close button */}
      <div onClick={toggleDropDown} className='absolute right-10 text-4xl font-bold top-5 cursor-pointer'>
        <IoMdClose />
      </div>

      {/* Menu Items */}
      <ul className='flex flex-col gap-4 mt-20'>
        <li className='w-full flex justify-between cursor-pointer px-10 items-center text-lg mb-4 border-b pb-2 font-semibold hover:opacity-50 transition'>
          Home
          <FaAngleRight />
        </li>
        <li className='w-full flex justify-between cursor-pointer px-10 items-center text-lg mb-4 border-b pb-2 font-semibold hover:opacity-50 transition'>
          Search
          <FaAngleRight />
        </li>
        <li className='w-full flex justify-between cursor-pointer px-10 items-center text-lg mb-4 border-b pb-2 font-semibold hover:opacity-50 transition'>
          New
          <FaAngleRight />
        </li>
        <li className='w-full flex justify-between cursor-pointer px-10 items-center text-lg mb-4 border-b pb-2 font-semibold hover:opacity-50 transition'>
          PreOwned
          <FaAngleRight />
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;

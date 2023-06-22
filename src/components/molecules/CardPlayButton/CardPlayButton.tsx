import { type FC } from 'react';
import { IoPlayCircleSharp } from 'react-icons/io5';

interface CardPlayButtonProps {
  isActive: boolean;
}

const CardPlayButton: FC<CardPlayButtonProps> = ({ isActive }) => (
  <div
    className={`absolute left-0 top-0 w-full bg-opacity-50 bg-black duration-400 h-full flex justify-center items-center  ${
      isActive ? 'visible' : 'hidden'
    }`}
  >
    <button className="flex items-center gap-4 text-lg bg-white bg-opacity-25 p-2 pr-6 font-medium rounded-[28.5px]">
      <IoPlayCircleSharp className="text-5xl" />
      Play
    </button>
  </div>
);

export default CardPlayButton;

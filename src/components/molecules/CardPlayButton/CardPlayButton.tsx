import { type FC } from 'react';
import { IoPlayCircleSharp } from 'react-icons/io5';

interface CardPlayButtonProps {
  isActive: boolean;
}

const CardPlayButton: FC<CardPlayButtonProps> = ({ isActive }) => (
  <div
    className={`duration-400 absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50  ${
      isActive ? 'visible' : 'hidden'
    }`}
  >
    <button className="flex items-center gap-4 rounded-[28.5px] bg-white bg-opacity-25 p-2 pr-6 text-lg font-medium">
      <IoPlayCircleSharp className="text-5xl" />
      Play
    </button>
  </div>
);

export default CardPlayButton;

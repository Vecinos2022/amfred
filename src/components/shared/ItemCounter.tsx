import { IoChevronForward } from "react-icons/io5";

interface ItemCounterProps {
    number: number | string
}

export const ItemCounter = ({ number } : ItemCounterProps) => (
  <div className="flex items-center gap-1 text-default-400">
    <span className="text-small">{ number }</span>
    <IoChevronForward />
  </div>
);
import Link from "next/link";
import { ItemNavigationBar as ItemNavigationBarProps } from "@/store/ui/bottomNavigationBarSlice";
import { useUiBoundStore } from "@/store/ui/uiSharedSlice";

interface itemNavigationBarProps {
  item: ItemNavigationBarProps
}

export const ItemNavigationBar = (
  { item: { icon: Icon, url, index, title } } : itemNavigationBarProps
) => {

  const { activeIndexBottomNavigationBar } = useUiBoundStore((state) => ({
    activeIndexBottomNavigationBar: state.activeIndexBottomNavigationBar
  }));

  const { setActiveIndexBottomNavigationBar } = useUiBoundStore();

  return(
    <Link 
        href={ url }
        onClick={ () => setActiveIndexBottomNavigationBar( index ) }
        className={
          index === activeIndexBottomNavigationBar 
            ? "inline-flex shrink-0 items-center border-b-3 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
            : "inline-flex shrink-0 items-center border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        }
    >
        <Icon className="mr-2" />
        { title }
    </Link>
  );
}
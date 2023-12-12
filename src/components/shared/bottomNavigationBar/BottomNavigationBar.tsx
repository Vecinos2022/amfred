'use client';
import { useUiBoundStore } from "@/store/ui/uiSharedSlice";
import { ItemNavigationBar } from "./ItemNavigationBar";

export const NavigationBar = () => {

    const { bottomNavigationBarItems } = useUiBoundStore((state) => ({
        bottomNavigationBarItems: state.bottomNavigationBarItems,
    }));

    return(
        <div className="border-t-2 border-gray-200 fixed bottom-0 w-full pt-5 shadow-sm">
            <nav className="flex justify-around w-full" aria-label="Tabs">
                {
                    bottomNavigationBarItems.map(( item, index ) => (
                        <ItemNavigationBar 
                            item={ item } 
                            key={`${item.index}-${index}`} 
                        />
                    ))
                }                
            </nav>
        </div>
    );
}
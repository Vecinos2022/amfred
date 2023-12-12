import { Listbox, ListboxItem } from "@nextui-org/react";
import { IconWrapper } from "../shared/IconWrapper";
import { ItemCounter } from "../shared/ItemCounter";
import { CustomCard } from "../shared/CustomCard";

export const ListboxVentasClientes = () => {
  return(
    <CustomCard>
        <div className="flex flex-col">
            <p className="text-default-500 text-small pb-3">Fraccionamientos con más consumo:</p>
            <Listbox
                aria-label="Lista venta clientes"
                onAction={(key) => alert(key)}
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 w-full overflow-visible"
                itemClasses={{
                    base: "px-2 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-15 data-[hover=true]:bg-default-100/80",
                }}
                >
                <ListboxItem
                    key="ex1"
                    endContent={<ItemCounter number={ '$1,200.00' } />}
                    startContent={
                    <IconWrapper className="bg-success/10 text-success">
                        <p>Q</p>
                    </IconWrapper>
                    }
                >
                    Fracc. Quintas Residencial
                </ListboxItem>
                <ListboxItem
                    key="ex2"
                    endContent={<ItemCounter number={ '$1,200.00' } />}
                    startContent={
                    <IconWrapper className="bg-success/10 text-success">
                        <p>Q</p>
                    </IconWrapper>
                    }
                >
                    Fracc. Quintas Residencial
                </ListboxItem>
                <ListboxItem
                    key="ex3"
                    endContent={<ItemCounter number={ '$1,200.00' } />}
                    startContent={
                    <IconWrapper className="bg-success/10 text-success">
                        <p>Q</p>
                    </IconWrapper>
                    }
                >
                    Fracc. Quintas Residencial
                </ListboxItem>
                <ListboxItem
                    key="ex4"
                    endContent={<ItemCounter number={ '$1,200.00' } />}
                    startContent={
                    <IconWrapper className="bg-success/10 text-success">
                        <p>Q</p>
                    </IconWrapper>
                    }
                >
                    Fracc. Quintas Residencial
                </ListboxItem>
            </Listbox>
        </div>
    </CustomCard>
  );
}
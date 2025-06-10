import WarehouseShopImg from "../assets/warehouse.webp";

export function WarehouseSection() {
  return (
    <section id="warehouse" className="relative">
      <img src={WarehouseShopImg} className="w-full" alt="Warehouse" />
      <div className="absolute bottom-0 left-0 right-0 h-[30%] w-full bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}

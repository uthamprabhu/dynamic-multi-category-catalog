import ItemCard from "./ItemCard";

export default function CategorySection({
  title,
  items,
  allItems,
}: {
  title: string;
  items: any[];
  allItems: any[];
}) {
  return (
    <section className="w-full mb-8">
      <h2 className="text-lg font-semibold mb-4 px-1">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          const globalIndex = allItems.findIndex(
            (i) => i.itemname === item.itemname
          );

          return (
            <ItemCard
              key={globalIndex}
              item={item}
              index={globalIndex}
            />
          );
        })}
      </div>
    </section>
  );
}
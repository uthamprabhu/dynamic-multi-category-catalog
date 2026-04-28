import data from "@/data/catalog.json";
import { groupByCategory } from "@/lib/groupByCategory";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  const grouped = groupByCategory(data);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>

      {Object.entries(grouped).map(([category, items]) => (
        <CategorySection
          key={category}
          title={category}
          items={items}
          allItems={data}
        />
      ))}
    </main>
  );
}
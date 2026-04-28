type Item = {
  itemname: string;
  category: string;
  image: string;
  itemprops: { label: string; value: string }[];
};

export function groupByCategory(items: Item[]) {
  return items.reduce((acc: Record<string, Item[]>, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}
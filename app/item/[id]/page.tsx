import data from "@/data/catalog.json";
import ItemDetails from "@/components/ItemDetails";
import BackNav from "@/components/BackNav";

export default async function ItemPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const item = data[Number(id)];

    if (!item) return <div className="p-4">Item not found</div>;

    return (
        <div className="p-4">
            <BackNav />
            <ItemDetails item={item} />
        </div>
    );
}
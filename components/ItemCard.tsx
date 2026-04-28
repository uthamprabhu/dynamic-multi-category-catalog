import Link from "next/link";
import Image from "next/image";

type Props = {
    item: any;
    index: number;
};

export default function ItemCard({ item, index }: Props) {
    return (
        <Link href={`/item/${index}`}>
            <div className="bg-white rounded-xl shadow-sm transition-all duration-200 ease-out p-3 cursor-pointer md:hover:shadow-md md:hover:scale-[1.02] active:scale-[0.98]">
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.itemname}
                        fill
                        sizes="(max-width: 640px) 100vw, 
                        (max-width: 1024px) 50vw, 
                        25vw"
                        className="object-cover"
                    />
                </div>

                <div className="mt-3">
                    <h3 className="font-semibold text-sm">{item.itemname}</h3>
                    <p className="text-xs text-gray-500">{item.category}</p>
                </div>
            </div>
        </Link>
    );
}
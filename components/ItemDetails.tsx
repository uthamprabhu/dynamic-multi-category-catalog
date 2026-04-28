import Image from "next/image";

export default function ItemDetails({ item }: { item: any }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        <div className="w-full flex justify-center">
          <Image
            src={item.image}
            alt={item.itemname}
            width={1200}
            height={700}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold">
            {item.itemname}
          </h1>

          <p className="text-sm text-gray-500 mb-4">
            {item.category}
          </p>

          <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
            {item.itemprops.map((prop: any, idx: number) => (
              <div
                key={idx}
                className="flex justify-between border-b pb-2 last:border-none"
              >
                <span className="text-gray-600 text-sm">
                  {prop.label}
                </span>
                <span className="font-medium text-sm">
                  {prop.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
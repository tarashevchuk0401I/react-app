interface PricingCardProps {
    title: string;
    price: number;
    requests: number;
    contributors: number;
    storage: string;
    featured?: boolean;
}

export default function PricingCard({
                                        title,
                                        price,
                                        requests,
                                        contributors,
                                        storage,
                                        featured = false,
                                    }: PricingCardProps) {
    return (
        <div
            className={`flex flex-col items-center w-72 p-6 rounded-lg shadow-lg transition-transform ${
                featured
                    ? "bg-slate-700 text-white scale-105 z-10"
                    : "bg-white text-gray-800"
            }`}
        >
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-4xl font-bold mb-4">${price}</p>

            <ul className="space-y-3 text-center text-sm mb-6 w-full border-t pt-4">
                <li>{requests} Requests!!</li>
                <li>{contributors} contributors</li>
                <li>{storage}</li>
            </ul>

            <button
                className={`uppercase font-semibold py-2 px-4 rounded w-full tracking-wide ${
                    featured
                        ? "bg-white text-slate-700 hover:bg-gray-200"
                        : "bg-slate-700 text-white hover:bg-slate-800"
                }`}
            >
                Subscribe
            </button>
        </div>
    );
}

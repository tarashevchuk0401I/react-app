import PricingCard from './components/PricingCard';

export default function App() {
        return (
            <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-20 px-10">
                    <h1 className="text-4xl font-bold text-white mb-14">Pricing</h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                            <PricingCard
                                title="Standard"
                                price="100"
                                requests="50,000"
                                contributors="4"
                                storage="Up to 3 GB storage space"
                            />

                            <PricingCard
                                title="Pro"
                                price="200"
                                requests="100,000"
                                contributors="7"
                                storage="Up to 6 GB storage space"
                                featured
                            />

                            <PricingCard
                                title="Expert"
                                price="500"
                                requests="200,000"
                                contributors="11"
                                storage="Up to 10 GB storage space"
                            />
                    </div>
            </div>
        );
}

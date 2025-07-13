import { useState } from 'react';
import { X, Heart } from 'lucide-react';

interface PolaroidData {
    id: number;
    image: string;
    quote: string;
    rotation: string;
    position: string;
}

const polaroids: PolaroidData[] = [
    {
        id: 1,
        image: "/images/IMG-20250713-WA0025.jpg",
        quote: "She carries peace within her, a quiet strength shaped by faith and patience",
        rotation: "rotate-12",
        position: "top-4 left-8"
    },
    {
        id: 2,
        image: "/images/IMG-20250713-WA0027.jpg",
        quote: "She has this magical way of making ordinary moments feel extraordinary 💫",
        rotation: "-rotate-6",
        position: "top-20 right-12"
    },
    {
        id: 3,
        image: "/images/IMG-20250713-WA0021.jpg",
        quote: "Her laughter is light and effortless, the kind that fills a room with warmth. 🎵",
        rotation: "rotate-3",
        position: "top-64 left-32"
    },
    {
        id: 4,
        image: "/images/IMG-20250713-WA0022.jpg",
        quote: "She dreams in colors that don't exist yet, painting the world more beautiful 🎨",
        rotation: "-rotate-12",
        position: "top-80 right-20"
    },
    {
        id: 5,
        image: "/images/IMG-20250713-WA0026.jpg",
        quote: "Her kindness is like a gentle breeze that touches everyone around her 🌸",
        rotation: "rotate-6",
        position: "top-96 left-16"
    },
    {
        id: 6,
        image: "/images/IMG-20250713-WA0029.jpg",
        quote: "Her smile lights up every room she enters, like sunshine breaking through morning clouds ☀️",
        rotation: "-rotate-3",
        position: "top-32 left-1/2"
    }
];

const PolaroidWall = () => {
    const [selectedPolaroid, setSelectedPolaroid] = useState<PolaroidData | null>(null);

    return (
        <>
            <div className="relative min-h-screen py-20">
                {polaroids.map((polaroid) => (
                    <div
                        key={polaroid.id}
                        className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20 hover:shadow-2xl ${polaroid.position} ${polaroid.rotation} hover:rotate-0`}
                        onClick={() => setSelectedPolaroid(polaroid)}
                    >
                        <div className="bg-white p-4 pb-16 shadow-romantic hover:shadow-xl transition-shadow duration-300 max-w-xs">
                            <img
                                src={polaroid.image}
                                alt={`Memory ${polaroid.id}`}
                                className="w-[20rem] h-72 object-cover"
                            />
                            <div className="mt-4 text-center">
                                <div className="font-script text-rose-400 text-sm opacity-70">
                                    Beautiful moment ♡
                                </div>
                            </div>
                            {/* Decorative tape */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-100 opacity-60 rotate-12 rounded-sm"></div>
                        </div>
                    </div>
                ))}

                {/* Scattered decorative elements */}
                <Heart className="absolute top-12 right-4 text-pink-300 w-4 h-4 animate-sparkle opacity-40" />
                <Heart className="absolute bottom-20 left-8 text-rose-300 w-3 h-3 animate-float opacity-50" />
                <Heart className="absolute top-1/2 right-8 text-pink-400 w-5 h-5 animate-gentle-bounce opacity-35" />
            </div>

            {/* Modal for selected polaroid */}
            {selectedPolaroid && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
                        <div className="flex justify-between items-start mb-6">
                            <Heart className="text-pink-400 w-6 h-6 animate-sparkle" />
                            <button
                                onClick={() => setSelectedPolaroid(null)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <img
                            src={selectedPolaroid.image}
                            alt="Selected memory"
                            className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
                        />

                        <p className="font-serif text-gray-700 text-center leading-relaxed text-lg">
                            {selectedPolaroid.quote}
                        </p>

                        <div className="flex justify-center mt-6">
                            <div className="flex space-x-1">
                                <Heart className="w-4 h-4 text-pink-400 animate-sparkle" />
                                <Heart className="w-3 h-3 text-rose-400 animate-sparkle delay-100" />
                                <Heart className="w-4 h-4 text-pink-400 animate-sparkle delay-200" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PolaroidWall;
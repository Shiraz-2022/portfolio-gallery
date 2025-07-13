import { Heart, Sparkles, Star, Flower, Coffee, Book, Music, Camera, Cat, Home } from 'lucide-react';

const favorites = [
    { icon: Heart, text: "Quiet moments and enjoying her own company", color: "text-rose-400" },
    { icon: Cat, text: "Soft purring cats and their gentle companionship", color: "text-amber-400" },
    { icon: Home, text: "Family gatherings and the warmth of home", color: "text-yellow-400" },
    { icon: Sparkles, text: "The peace found in Allah, faith, and prayer", color: "text-purple-400" },
    { icon: Flower, text: "Nature walks, gardens, and small wonders", color: "text-green-400" },
];


const dreams = [
    "Building a peaceful, loving home filled with warmth and faith",
    "Raising beautiful children with care, patience, and kindness",
    "Having a husband who protects, supports, and cherishes her",
    "Creating a life surrounded by family, simplicity, and gratitude",
    "Exploring beautiful places, cultures, and nature at her own pace",
    "Living a life free from the need to work, focused on home, heart, and faith"
];


const FavoriteThings = () => {
    return (
        <section className="py-32 px-6 bg-gradient-to-br from-pink-25 via-purple-25 to-yellow-25 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-script text-6xl md:text-7xl text-gradient-pink mb-6">
                        The Things She Loves
                    </h2>
                    <p className="font-serif text-xl text-rose-500 italic opacity-80">
                        & dreams that make her eyes sparkle
                    </p>

                    <div className="flex justify-center mt-8 space-x-2">
                        <Heart className="w-4 h-4 text-pink-400 animate-sparkle" />
                        <Sparkles className="w-3 h-3 text-purple-400 animate-sparkle delay-100" />
                        <Star className="w-4 h-4 text-yellow-400 animate-sparkle delay-200" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Favorite Things */}
                    <div className="space-y-8">
                        <h3 className="font-script text-4xl text-rose-600 text-center mb-8">
                            Her Favorite Things
                        </h3>

                        <div className="space-y-6">
                            {favorites.map((favorite, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-romantic hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <div className="flex-shrink-0">
                                        <favorite.icon className={`w-6 h-6 ${favorite.color} animate-gentle-bounce`} />
                                    </div>
                                    <p className="font-serif text-lg text-rose-600 opacity-90">
                                        {favorite.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dreams & Wishes */}
                    <div className="space-y-8">
                        <h3 className="font-script text-4xl text-rose-600 text-center mb-8">
                            Her Beautiful Dreams
                        </h3>

                        <div className="space-y-6">
                            {dreams.map((dream, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-romantic hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <div className="flex items-start space-x-3">
                                        <Star className="w-5 h-5 text-yellow-400 animate-sparkle flex-shrink-0 mt-1" />
                                        <p className="font-serif text-lg text-rose-600 opacity-90 leading-relaxed">
                                            {dream}
                                        </p>
                                    </div>

                                    {/* Random floating hearts */}
                                    {index % 2 === 0 && (
                                        <Heart className="absolute -top-2 -right-2 w-4 h-4 text-pink-300 animate-float opacity-40" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Whimsical bottom section */}
                <div className="mt-20 text-center">
                    <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-romantic max-w-3xl mx-auto">
                        <p className="font-script text-3xl text-rose-600 mb-4">
                            "She cherishes the quiet blessings others often overlook: family, faith, and the beauty of ordinary days"
                        </p>

                        <div className="flex justify-center space-x-4 mt-6">
                            <Flower className="w-6 h-6 text-pink-400 animate-float" />
                            <Heart className="w-5 h-5 text-rose-400 animate-sparkle delay-100" />
                            <Sparkles className="w-6 h-6 text-purple-400 animate-gentle-bounce delay-200" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-20 left-20 w-8 h-8 bg-pink-200 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-32 right-16 w-6 h-6 bg-purple-200 rounded-full opacity-25 animate-gentle-bounce"></div>
            <div className="absolute top-1/2 left-10 w-4 h-4 bg-yellow-200 rounded-full opacity-30 animate-sparkle"></div>
            <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-rose-200 rounded-full opacity-25 animate-float delay-300"></div>
        </section>
    );
};

export default FavoriteThings;
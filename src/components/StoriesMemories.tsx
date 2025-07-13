import { Heart, Sparkles, Camera } from 'lucide-react';

const memories = [
    {
        title: "Umrah",
        story: "She is someone who has walked in the sacred places of Makkah and Madinah, standing beneath the shade of history with humility and gratitude. Her heart feels most at peace where prayers linger in the air and every step feels closer to something eternal. Completing Umrah is not just something she has done — it's something that shaped her, quietly and profoundly.",
        image: "/images/IMG-20250713-WA0021.jpg"
    },
    {
        title: "Cats",
        story: "Gentle, playful, and full of affection — her love for cats is just another reflection of her tenderness. She finds joy in small, quiet companionships. To her, kindness isn’t loud; it’s found in soft purrs, slow blinks, and shared silences.",
        image: "/images/IMG-20250713-WA0027.jpg"
    },
    {
        title: "Beaches",
        story: "The ocean feels like home to her. She loves the sound of waves folding against the shore, the vast horizon where sky and sea meet in quiet conversation. For her, beaches are not just destinations — they are reminders of how small we are, how wide the world is, and how peace can be found in simply listening to the rhythm of the earth.",
        image: "/images/IMG-20250713-WA0025.jpg"
    }
];

const StoriesMemories = () => {
    return (
        <section className="py-32 px-6 bg-gradient-to-br from-cream-white via-pink-25 to-purple-25 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-script text-6xl md:text-7xl text-gradient-pink mb-6">
                        Her Beautiful Moments
                    </h2>
                    {/*<p className="font-serif text-xl text-rose-500 italic opacity-80 max-w-2xl mx-auto">*/}
                    {/*    Every memory with her feels like a page from a fairy tale*/}
                    {/*</p>*/}

                    <div className="flex justify-center mt-8 space-x-3">
                        <Camera className="w-5 h-5 text-pink-400 animate-sparkle" />
                        <Heart className="w-4 h-4 text-rose-400 animate-sparkle delay-100" />
                        <Sparkles className="w-5 h-5 text-purple-400 animate-sparkle delay-200" />
                    </div>
                </div>

                <div className="space-y-32">
                    {memories.map((memory, index) => (
                        <div
                            key={index}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
                        >
                            {/* Story Text */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                                <div className="relative">
                                    <h3 className="font-script text-4xl text-rose-600 mb-4 relative">
                                        {memory.title}
                                        <Heart className="absolute -top-2 -right-8 w-6 h-6 text-pink-300 animate-float opacity-60" />
                                    </h3>

                                    <p className="font-serif text-lg text-rose-600 leading-relaxed opacity-90">
                                        {memory.story}
                                    </p>

                                    <div className="flex items-center space-x-3 mt-6">
                                        <div className="w-20 h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
                                        <Sparkles className="w-3 h-3 text-purple-400 opacity-60" />
                                        <div className="w-20 h-0.5 bg-gradient-to-l from-pink-300 to-transparent"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Memory Photo */}
                            <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                                <div className="relative">
                                    <div className="bg-white p-6 rounded-3xl shadow-romantic hover:shadow-xl transition-all duration-500 hover:scale-105 rotate-2 hover:rotate-0">
                                        <img
                                            src={memory.image}
                                            alt={memory.title}
                                            className="w-full h-80 object-cover rounded-2xl"
                                        />

                                        {/* Polaroid-style caption */}
                                        <div className="mt-4 text-center">
                                            <p className="font-script text-rose-400 text-lg opacity-70">
                                                A moment to remember ♡
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-100 opacity-60 rotate-45 rounded-sm"></div>
                                    <Sparkles className="absolute -bottom-2 -left-2 text-purple-300 w-4 h-4 animate-sparkle opacity-50" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-1/4 right-20 w-4 h-4 bg-pink-200 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-1/4 left-16 w-6 h-6 bg-purple-200 rounded-full opacity-25 animate-gentle-bounce"></div>
            <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-yellow-200 rounded-full opacity-30 animate-sparkle"></div>
        </section>
    );
};

export default StoriesMemories;
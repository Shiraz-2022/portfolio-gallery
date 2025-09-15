import { Heart, Sparkles } from 'lucide-react';

const quotes = [
    {
        text: "She's a little bit of a rock song, a little bit of a soft tune, but always beautiful.",
        position: "top-[10%] left-[5%]",
        delay: "delay-100"
    },
    {
        text: "Her spirit is like an indie pop song, full of honest lyrics and bright melodies.",
        position: "top-[25%] right-[5%]",
        delay: "delay-300"
    },
    {
        text: "Even on her moodiest day, her heart holds the sweetest music.",
        position: "top-[50%] left-[10%]",
        delay: "delay-500"
    },
    {
        text: "Every part of her, even the small sacrifices, adds up to a beautiful song.",
        position: "top-[40%] right-[15%]",
        delay: "delay-700"
    },
    {
        text: "She's so kind and beautiful, a true masterpiece of a human being.",
        position: "top-[75%] left-[20%]",
        delay: "delay-900"
    }
];

const FloatingQuotes = () => {
    return (
        <div className="relative py-32 overflow-hidden w-full min-h-screen md:min-h-[90vh]">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent pointer-events-none"></div>

            {quotes.map((quote, index) => (
                <div
                    key={index}
                    className={`absolute ${quote.position} ${quote.delay} animate-fade-in-up w-[80%] max-w-md md:max-w-lg`}
                >
                    <div className="relative">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-romantic hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-100">
                            <p className="font-script text-lg md:text-xl text-rose-600 text-center leading-relaxed">
                                "{quote.text}"
                            </p>

                            <div className="flex justify-center mt-4 space-x-2">
                                <Heart className="w-4 h-4 text-pink-400 opacity-60" />
                                <Sparkles className="w-4 h-4 text-purple-400 opacity-60" />
                                <Heart className="w-4 h-4 text-pink-400 opacity-60" />
                            </div>
                        </div>

                        <Heart className="absolute -top-2 -right-2 w-5 h-5 text-pink-300 animate-float opacity-50" />
                        <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-purple-300 animate-sparkle opacity-40" />
                    </div>
                </div>
            ))}

            {/* Additional floating decorative elements */}
            <div className="absolute top-[20%] left-1/2 w-8 h-8 bg-pink-200/50 rounded-full animate-float opacity-30"></div>
            <div className="absolute bottom-[20%] right-[20%] w-5 h-5 bg-purple-200/50 rounded-full animate-gentle-bounce opacity-40"></div>
            <div className="absolute top-1/2 left-[10%] w-4 h-4 bg-yellow-200/50 rounded-full animate-sparkle opacity-35"></div>
        </div>
    );
};

export default FloatingQuotes;
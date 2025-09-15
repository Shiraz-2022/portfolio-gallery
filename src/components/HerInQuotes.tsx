import { Heart, Quote } from 'lucide-react';

const quotes = [
    {
        text: "She's a beautiful contradiction: a little bit of rain and a whole lot of sun, but her song is always a sweet one.",
        author: "Her Beautiful Contradiction"
    },
    {
        text: "She should know she's more beautiful than she thinks she is, a perfect lyric in a song she hasn't heard yet.",
        author: "The Perfect Lyric"
    },
    {
        text: "She built a fortress of love for her family, and every note she sings is a brick in its wall.",
        author: "Love's Architect"
    },
    {
        text: "In a world of noise, she's my favorite song, and the reason my day always starts with a smile.",
        author: "My Daily Anthem"
    }
];

const HerInQuotes = () => {
    return (
        <section className="py-32 px-6 bg-gradient-to-b from-purple-25 to-pink-25 relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
                <div className="mb-20">
                    <h2 className="font-script text-6xl md:text-7xl text-gradient-pink mb-6">
                        Her in Quotes
                    </h2>
                    <p className="font-serif text-xl text-rose-500 italic opacity-80">
                        Words that capture her essence
                    </p>

                    <div className="flex justify-center mt-8 space-x-2">
                        <Heart className="w-4 h-4 text-pink-400 animate-sparkle" />
                        <Heart className="w-3 h-3 text-rose-400 animate-sparkle delay-100" />
                        <Heart className="w-4 h-4 text-pink-400 animate-sparkle delay-200" />
                    </div>
                </div>

                <div className="space-y-24">
                    {quotes.map((quote, index) => (
                        <div
                            key={index}
                            className={`relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                        >
                            <div className="relative inline-block">
                                <Quote className="absolute -top-6 -left-6 text-pink-200 w-8 h-8 opacity-40" />

                                <blockquote className="font-script text-4xl md:text-5xl lg:text-6xl text-rose-600 leading-relaxed mb-4">
                                    "{quote.text}"
                                </blockquote>

                                <div className="flex items-center justify-center md:justify-start space-x-3 mt-6">
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
                                    <p className="font-serif text-lg text-rose-400 italic opacity-70">
                                        {quote.author}
                                    </p>
                                    <div className="w-12 h-0.5 bg-gradient-to-l from-pink-300 to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating decorations */}
                            <Heart className={`absolute ${index % 2 === 0 ? '-right-8' : '-left-8'} top-1/2 text-pink-300 w-5 h-5 animate-float opacity-40`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-10 w-3 h-3 bg-purple-200 rounded-full opacity-25 animate-sparkle"></div>
            <div className="absolute bottom-1/3 right-16 w-5 h-5 bg-pink-200 rounded-full opacity-30 animate-gentle-bounce"></div>
        </section>
    );
};

export default HerInQuotes;
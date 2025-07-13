import { Heart, Sparkles, Star } from 'lucide-react';

const AboutHer = () => {
    return (
        <section className="py-32 px-6 bg-gradient-to-br from-pink-25 via-purple-25 to-cream-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Love Letter Text */}
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute -top-6 -left-6 text-pink-200 opacity-30">
                            <Heart className="w-16 h-16 animate-float" />
                        </div>

                        <h2 className="font-script text-5xl md:text-6xl text-gradient-pink mb-8 leading-tight">
                            Zainab's story
                        </h2>

                        <div className="space-y-6 text-rose-600">
                            <p className="font-serif text-xl leading-relaxed opacity-90">
                                Zainab is one of the few young women who truly understands what it means to be a woman.
                                In a world where many chase fleeting pleasures, she seeks a man of sincerity — one who prays and worships Allah.
                            </p>

                            <p className="font-serif text-xl leading-relaxed opacity-90">
                                Her laughter is contagious, her dreams are endless, and her heart
                                is bigger than the ocean. She believes in magic, in possibilities,
                                and in the power of love to change the world.
                            </p>

                            <p className="font-serif text-xl leading-relaxed opacity-90 italic">
                                She is art, poetry, and music all wrapped into one beautiful soul.
                                She is my favorite story, and I'm so grateful to be part of hers.
                            </p>
                        </div>

                        <div className="flex items-center mt-8 space-x-3">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
                            <Heart className="w-4 h-4 text-pink-400 animate-sparkle" />
                            <div className="w-16 h-0.5 bg-gradient-to-l from-pink-300 to-transparent"></div>
                        </div>
                    </div>

                    {/* Photo Collage */}
                    <div className="order-1 md:order-2 relative">
                        <div className="relative">
                            {/* Main photo */}
                            <div className="bg-white p-4 rounded-2xl shadow-romantic hover:shadow-xl transition-all duration-300 rotate-3 hover:rotate-0">
                                <img
                                    src="/images/IMG-20250713-WA0021.jpg"
                                    alt="Beautiful moment"
                                    className="w-full h-80 object-cover rounded-lg"
                                />
                            </div>

                            {/* Smaller accent photos */}
                            <div className="absolute -top-8 -right-8 bg-white p-3 rounded-xl shadow-romantic rotate-12 hover:rotate-6 transition-transform duration-300">
                                <img
                                    src="/images/IMG-20250713-WA0023.jpg"
                                    alt="Sweet moment"
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-romantic -rotate-6 hover:rotate-0 transition-transform duration-300">
                                <img
                                    src="/images/IMG-20250713-WA0030.jpg"
                                    alt="Dreamy moment"
                                    className="w-28 h-28 object-cover rounded-lg"
                                />
                            </div>

                            {/* Floating decorations */}
                            <Sparkles className="absolute -top-4 left-1/4 text-purple-300 w-6 h-6 animate-sparkle opacity-60" />
                            <Star className="absolute -bottom-2 right-1/4 text-yellow-300 w-4 h-4 animate-float opacity-70" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-20 right-20 w-6 h-6 bg-pink-200 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-32 left-16 w-4 h-4 bg-purple-200 rounded-full opacity-30 animate-gentle-bounce"></div>
        </section>
    );
};

export default AboutHer;

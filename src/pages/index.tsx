import { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Star, PlayCircle, PauseCircle } from 'lucide-react';
import PolaroidWall from '../components/PolaroidWall';
import FloatingQuotes from '../components/FloatingQuotes';
import AboutHer from '../components/AboutHer';
import HerInQuotes from '../components/HerInQuotes';
import StoriesMemories from '../components/StoriesMemories';
import FavoriteThings from '../components/FavoriteThings';

const Index = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize the audio object
        audioRef.current = new Audio('/audio/her-song.mp3');
        const audio = audioRef.current;

        // Reset state when the song ends
        audio.onended = () => {
            setIsPlaying(false);
        };

        // Cleanup audio object on component unmount
        return () => {
            audio.pause();
            audio.onended = null;
        };
    }, []);

    const handlePlayPause = () => {
        if (!audioRef.current) return;
        const audio = audioRef.current;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.error("Audio play failed:", e));
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="min-h-screen bg-gradient-romantic overflow-x-hidden">
            {/* Hero Section with Video Background */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Video Background Placeholder */}
                <div className="absolute inset-0 bg-gradient-soft">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <img
                        src="images/ind2.jpg"
                        alt="Beautiful moment"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>

                {/* Floating Elements */}
                <Heart className="absolute top-20 left-20 text-blush-pink w-6 h-6 animate-float opacity-60" />
                <Sparkles className="absolute top-32 right-32 text-soft-lavender w-5 h-5 animate-gentle-bounce opacity-70" />
                <Star className="absolute bottom-40 left-40 text-soft-gold w-4 h-4 animate-sparkle opacity-80" />
                <Heart className="absolute bottom-20 right-20 text-dusty-rose w-5 h-5 animate-float opacity-50" />

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <div className="animate-fade-in-up">
                        <h1 className="font-script text-6xl md:text-8xl text-gradient-pink mb-6 leading-tight">
                            The Story of Indira
                        </h1>
                        <p className="font-serif text-2xl md:text-3xl text-dusty-rose mb-8 italic opacity-90">
                            Told in Moments
                        </p>
                        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blush-pink to-transparent mx-auto mb-8"></div>
                        <p className="font-serif text-lg text-dusty-rose leading-relaxed max-w-2xl mx-auto opacity-80">
                            "She's a girl of quiet strength, a beautiful contradiction who cares for her family and turns every busy day into a journey"
                        </p>
                    </div>

                    {/* Beautiful Play Button */}
                    <div className="mt-12 flex flex-col items-center">
                        <button
                            onClick={handlePlayPause}
                            className="bg-white/40 backdrop-blur-sm p-4 rounded-full shadow-romantic hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-pulse-gentle"
                        >
                            {isPlaying ? (
                                <PauseCircle className="w-12 h-12 text-dusty-rose" />
                            ) : (
                                <PlayCircle className="w-12 h-12 text-blush-pink" />
                            )}
                        </button>
                        {/*<p className="font-serif text-lg text-dusty-rose mt-4 opacity-80">*/}
                        {/*    {isPlaying ? "Pause her song" : "Press play to hear her song"}*/}
                        {/*</p>*/}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                    <div className="w-6 h-10 border-2 border-blush-pink rounded-full flex justify-center items-center">
                        <div className="w-1 h-3 bg-blush-pink rounded-full animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* About Her - Love Letter Section */}
            <AboutHer />

            {/* Floating Quotes Section */}
            <FloatingQuotes />

            {/* Her in Quotes Section */}
            <HerInQuotes />

            {/* Polaroid Wall Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-script text-5xl md:text-6xl text-gradient-pink mb-4">
                            Captured Moments
                        </h2>
                        <p className="font-serif text-xl text-dusty-rose italic opacity-80">
                            Each photo tells a piece of her beautiful story
                        </p>
                        <div className="flex justify-center mt-6 space-x-2">
                            <Heart className="w-4 h-4 text-blush-pink animate-sparkle" />
                            <Heart className="w-3 h-3 text-dusty-rose animate-sparkle delay-100" />
                            <Heart className="w-4 h-4 text-blush-pink animate-sparkle delay-200" />
                        </div>
                    </div>
                    <PolaroidWall />
                </div>
            </section>

            {/* Stories & Memories Section */}
            <StoriesMemories />

            {/* Favorite Things & Dreams Section */}
            <FavoriteThings />

            {/* Closing Section */}
            <section className="py-20 px-6 bg-gradient-dreamy">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative">
                        {/* Decorative Elements */}
                        <Sparkles className="absolute -top-4 -left-4 text-soft-lavender w-8 h-8 animate-sparkle opacity-60" />
                        <Sparkles className="absolute -bottom-4 -right-4 text-soft-gold w-6 h-6 animate-sparkle delay-300 opacity-60" />

                        <h2 className="font-script text-5xl md:text-6xl text-gradient-pink mb-8">
                            To be continued...
                        </h2>
                        {/*<p className="font-serif text-2xl text-dusty-rose mb-6 italic">*/}
                        {/* with you ♡*/}
                        {/*</p>*/}
                        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-blush-pink to-transparent mx-auto mb-8"></div>
                        <p className="font-serif text-lg text-dusty-rose leading-relaxed opacity-80 max-w-2xl mx-auto">
                            This is just the beginning of your beautiful story.
                        </p>

                        {/* Floating Hearts */}
                        <div className="mt-12 flex justify-center space-x-8">
                            <Heart className="w-6 h-6 text-blush-pink animate-float opacity-70" />
                            <Heart className="w-8 h-8 text-dusty-rose animate-float delay-100 opacity-80" />
                            <Heart className="w-6 h-6 text-blush-pink animate-float delay-200 opacity-70" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-1/4 left-10 w-4 h-4 bg-blush-pink rounded-full opacity-30 animate-float"></div>
                <div className="absolute top-1/3 right-20 w-3 h-3 bg-soft-lavender rounded-full opacity-40 animate-gentle-bounce"></div>
                <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-soft-gold rounded-full opacity-25 animate-sparkle"></div>
                <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-dusty-rose rounded-full opacity-35 animate-float delay-300"></div>
            </div>
        </div>
    );
};

export default Index;

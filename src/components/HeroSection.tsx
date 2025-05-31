
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            Beach Vibes Sale
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Up to 50% off summer collections
          </p>
          <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105">
            SHOP NOW →
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;

import { ArrowDownIcon } from "@heroicons/react/16/solid";
const MyHome = () => {
  return (
    <div
      id="home"
      className="-px-12 mt-8 bg-gradient-to-r from-blu via-white to-blue-300 flex flex-col lg:flex-row items-center min-h-screen justify-center space-y-6 lg:space-y-0 lg:space-x-8 overflow-hidden relative "
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 to-blue-300 opacity-10 transform scale-150" />
      <div className="absolute top-10 left-10 bg-blue-500 w-20 h-20 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 bg-blue-600 w-32 h-32 rounded-full opacity-20 animate-bounce" />
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/img/myimg1.jpg"
          alt="Profile"
          className="border w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover shadow-2xl transition-transform duration-500 hover:scale-110 hover:rotate-3 cursor-pointer"
          style={{
            borderTopLeftRadius: "10%",
            borderBottomLeftRadius: "10%",
            borderTopRightRadius: "10%",
            borderBottomRightRadius: "20%",
          }}
        />
      </div>
      <div className="relative z-10 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 animate-fade-in-up transition-transform duration-700 hover:scale-110 cursor-pointer">
          Navneet Kumar Rai
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-xl animate-fade-in-up transition-opacity duration-700 ease-in text-justify cursor-pointer">
          I am a passionate web developer with experience in building beautiful
          and functional web applications. I specialize in React, Tailwind CSS,
          and JavaScript to deliver creative and responsive designs.
        </p>
        <div className="mt-6">
          <div
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform cursor-pointer hover:scale-105"
          >
            Get in Touch
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyHome;

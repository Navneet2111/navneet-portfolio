function AboutUs() {
  return (
    <div
      id="homeAboutSection"
      className="px-4  bg-gradient-to-r from-gray-50 via-white to-blue-50 flex flex-col items-center min-h-screen"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center gap-12 mt-20">
        <div className="md:w-3/5 lg:w-2/3 flex flex-col items-center text-center">
          <h1 className="text-indigo-900 text-3xl font-bold mb-4 md:mb-6 animate-fade-in -mt-8">
            ABOUT ME
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-black  leading-tight animate-fade-in">
            A Passionate Developer on a Mission to Innovate
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <img
              src="/img/myimg1.jpg"
              alt="Profile"
              className="border w-40 h-40 md:w-[22rem] md:h-[22rem] lg:w-[90rem] lg:h-64 object-cover shadow-2xl transition-transform duration-500 hover:scale-110 hover:rotate-3 cursor-pointer"
              style={{
                borderRadius: "10%",
              }}
            />
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 text-justify lg:text-lg leading-relaxed animate-fade-in lg:mb-6">
                I am a dedicated professional, holding a Master of Computer
                Applications (MCA) degree from Jain University. My technical
                expertise includes modern web technologies like HTML, CSS,
                Tailwind, Material UI, and powerful backend solutions with
                Node.js, React.js, and databases like MySQL and MongoDB. I
                currently work as a Junior Software Engineer at Zeksta
                Technology, where I contribute to creating dynamic and efficient
                software solutions.
              </p>

              <p className="text-gray-700 text-justify lg:text-lg leading-relaxed animate-fade-in">
                With hands-on experience in full-stack development, I bring
                creativity, analytical thinking, and problem-solving skills to
                every project I undertake. Whether working on frontend UI
                components or backend services, I am always eager to learn and
                implement cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

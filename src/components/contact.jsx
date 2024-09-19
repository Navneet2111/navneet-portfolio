import ScrollButton from "./button";
function Contact() {
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-50 via-white to-blue-50 -mb-8"
    >
      <div className="text-center mb-6">
        <h1 className="text-indigo-900 text-3xl font-bold mt-16">CONTACT ME</h1>
        <h3 className="text-3xl font-bold mt-4">
          Let’s Connect and Collaborate
        </h3>
        <p className="mt-4 text-gray-700 text-lg">
          You can also find my projects and contributions on GitHub. Feel free
          to explore and connect with me there.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-6 mb-8">
        <a
          href="/data/Navneet Kumar Rai Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl w-64 h-52"
        >
          <div className="text-indigo-900 text-4xl mb-4 mt-4">
            <i className="fas fa-file-alt"></i>
          </div>
          <h3 className="text-lg font-bold">View Resume</h3>
          <p className="mt-2 text-center">Navneet Kumar Rai</p>
        </a>
        <a
          href="https://github.com/navneet2111"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl w-64 h-52"
        >
          <div className="text-indigo-900 text-4xl mb-4 mt-4">
            <i className="fab fa-github"></i>
          </div>
          <h3 className="text-lg font-bold">GitHub</h3>
          <p className="mt-2 text-center">github.com/navneet2111</p>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        <a
          href="https://www.linkedin.com/in/navneet2111/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl w-64 h-52"
        >
          <div className="text-indigo-900 text-4xl mb-4 mt-4">
            <i className="fab fa-linkedin"></i>
          </div>
          <h3 className="text-lg font-bold">LinkedIn</h3>
          <p className="mt-2 text-center">navneet2111</p>
        </a>

        <a href="mailto:na.vneet2111rai@gmail.com"          
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl w-64 h-52"
        >
          <div className="text-indigo-900 text-4xl mb-4 mt-4">
            <i className="fas fa-envelope"></i>
          </div>
          <h3 className="text-lg font-bold">Email</h3>
          <p  className="mt-2 text-center">na.vneet2111rai@gmail.com</p>
        </a>

        <a
          href="tel:+918009688506"
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl w-64 h-52"
        >
          <div className="text-indigo-900 text-4xl mb-4 mt-4">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3 className="text-lg font-bold">Phone</h3>
          <p className="mt-2 text-center">+91 8009688506</p>
        </a>
      </div>
      <ScrollButton/>
      </div>
  );
}
export default Contact;

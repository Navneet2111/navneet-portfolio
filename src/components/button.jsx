import { useState } from "react";

const ScrollButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex justify-end"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        onClick={() =>
          document.getElementById("home").scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-black text-white rounded-full border-4 border-purple-200  transition duration-300 ease-in-out"
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </button>

      {hover && (
        <button
          onClick={() =>
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-4 right-4 flex items-center justify-center w-28 h-12 bg-black text-white rounded-full border-4 border-purple-200 transition duration-300 ease-in-out cursor-grabbing"
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default ScrollButton;

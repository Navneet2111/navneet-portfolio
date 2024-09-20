import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectCard from "./projectCards";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Hostel Management",
      description:
        "The Hostel Management project is a web-based system for efficiently managing student accommodations, including room allocation, fee tracking, and maintenance requests etc.",
      image: "/img/hostel.png",
      link: "https://github.com/Navneet2111/Hostel-Management",
    },
    {
      id: 2,
      title: "Local Harbor",
      description:
        "Designed and created LocalHarbor, an innovative e-commerce platform aimed at bridging the gap between users and local vendors.Implemented user-friendly interface and secure payment gateway integration.",
      image: "/img/Localharbor.jpg",
      link: "https://github.com/Navneet2111/Local-Harbor",
    },
    {
      id: 3,
      title: "Home Rental",
      description:
        "Home Rental designed to manage rental properties, tenant information, and payments efficiently. It simplifies room listings, tenant tracking, and payment processing for property owners",
      image: "/img/rentHouse.png",
      link: "https://github.com/Navneet2111/Home-Rental",
    },
    {
      id: 4,
      title: "Social Echo",
      description:
        "Social Eco is a platform designed to connect people, fostering meaningful interactions and community engagement. It encourages building relationships and sharing experiences within a supportive social network.",
      image: "/img/social-icon.png",
      link: "https://github.com/Navneet2111/Social-Echo",
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -237,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 237,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-r from-gray-50 via-white to-blue-50 text-black py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="flex flex-col items-center justify-center text-indigo-900 text-3xl font-bold -mt-4">
          My Projects
        </h2>
        <h1 className="flex flex-col items-center text-center justify-center text-3xl font-bold mt-8 mb-8">
          Collection of some of my Recent Work
        </h1>
        <p className="flex flex-col items-center justify-center mt-4 text-gray-700 text-lg mb-2">
          You can find my projects and contributions on GitHub. Feel free to
          explore ...
        </p>
        <div className="relative flex items-center justify-center">
          <ChevronLeftIcon
            onClick={scrollLeft}
            className="h-10 w-10 text-indigo-900 cursor-pointer -ml-3"
          />
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-2 py-4 px-4 w-full mx-0 "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>
              {`
                /* Hide scrollbar for Webkit browsers (Chrome, Safari, Opera) */
                #services .scroll-container::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <div className="flex -ml-[0.9rem] md:-ml-2  gap-2 md:gap-8 lg:gap-3 xl:gap-8">
              {projectData.map((service) => (
                <ProjectCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              ))}
            </div>
          </div>
          <ChevronRightIcon
            onClick={scrollRight}
            className="h-10 w-10 text-indigo-900 cursor-pointer -mr-3"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

const technologies = [
  {
    id: 1,
    image: "/img/HTML.png",
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) is the foundation of web development, defining the structure of web pages with elements like headings, paragraphs, links, images, and forms. HTML is essential for creating websites and works alongside CSS and JavaScript to build responsive and interactive web applications.",
  },
  {
    id: 2,
    image: "/img/css.png",
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) is a language used to control the visual appearance of HTML elements. It allows developers to design layouts, style text, adjust colors, and create responsive, mobile-friendly designs. CSS enhances user experiences by making web pages aesthetically pleasing and visually engaging.",
  },
  {
    id: 3,
    image: "/img/tailwind.png",
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with predefined classes. It promotes custom designs with minimal effort, allowing developers to build responsive layouts and design systems quickly. Tailwind's flexibility and ease of use have made it a popular choice for modern web projects.",
  },
  {
    id: 4,
    image: "/img/javascript.png",
    title: "JavaScript",
    description:
      "JavaScript is a versatile, high-level programming language used for creating dynamic and interactive web applications. It allows developers to manipulate HTML elements, handle events, and perform asynchronous operations. JavaScript is essential for front-end development and is also used server-side with environments like Node.js.",
  },
  {
    id: 5,
    image: "/img/reactJS.png",
    title: "React",
    description:
      "React is a powerful JavaScript library for building user interfaces, particularly single-page applications. It uses a component-based architecture and virtual DOM to improve performance. React's ecosystem, including features like hooks and context, makes it an ideal choice for building scalable and maintainable web apps.",
  },
  {
    id: 6,
    image: "/img/materialUI.png",
    title: "Material UI",
    description:
      "Material UI is a popular React component library that implements Google's Material Design guidelines. It provides a set of customizable UI components that help developers create aesthetically consistent, responsive, and interactive user interfaces, accelerating development time.",
  },
  {
    id: 7,
    image: "/img/redux.png",
    title: "Redux",
    description:
      "Redux is a predictable state management library for JavaScript applications, often used with React. It centralizes the application state in a global store, allowing consistent state changes through actions and reducers. Redux is especially useful for managing complex applications with extensive state requirements.",
  },
  {
    "id": 8,
    "image": "/img/mySQL.png",
    "title": "MySQL",
    "description":
      "MySQL is a widely-used, open-source relational database management system (RDBMS). It handles structured data using tables and supports complex queries, transactions, and advanced indexing, making it a reliable choice for applications requiring data consistency, integrity, and security.",
  },  
  {
    id: 9,
    image: "/img/mongDB.png",
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL, document-based database known for its flexibility and scalability. It stores data in JSON-like documents, making it suitable for applications with evolving data structures. MongoDB is ideal for real-time data handling, distributed systems, and high-performance applications.",
  },
  {
    id: 10,
    image: "/img/nodeJS.png",
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to build server-side applications. It is non-blocking and event-driven, making it efficient for handling multiple concurrent requests, real-time applications, and building APIs. Node.js enables full-stack JavaScript development.",
  },
];

const Card = ({ image, title, description }) => {
  return (
    <div className=" cursor-pointer relative w-48 h-48 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center m-6 hover:bg-gray-200 hover:shadow-xl transition-all duration-300 group">
      <img src={image} alt={title} className="w-16 h-16 object-contain mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>

      <div 
      className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[16.9rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-4 text-sm rounded-lg shadow-lg z-10">
        <div className="flex justify-between">
          <h4 className="font-semibold text-gray-800 mt-5">{title} </h4>
          <img src={image} alt={title} className="w-14 h-14 object-contain" />
        </div>
        <p className="text-gray-600 mt-2 text-justify">{description}</p>
      </div>
    </div>
  );
};

function Technologys() {
  return (
    <div
      id="tech"
      className="pt-8 lg:-pt-24 pb-16 bg-gradient-to-r from-gray-50 via-white to-blue-50  flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-6  text-indigo-900 mt-12">
        Technologies I Work With
      </h2>
      <p className="text-lg mb-10 text-gray-600 text-center max-w-2xl">
        Below are some of the core technologies we specialize in to build
        modern, responsive, and scalable applications.
      </p>

      <div className="flex flex-wrap justify-center">
        {technologies.map((tech) => (
          <Card
            key={tech.id}
            image={tech.image}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Technologys;

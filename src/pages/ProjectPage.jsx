import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const projects = [
  {
    id: 1,
    title: "Stocklyzer : Stock Analysis and Forecasting Web App using  Financial Models",
    skills: "Python , Streamlit , Machine Learning , Data Visualization , Financial Models",
    about: [
      "A web app that allows users to analyze and forecast stock prices using financial models and machine learning.",
      "The app uses historical stock data to train machine learning models and make predictions about future stock prices.",
      "The app also includes a dashboard that allows users to visualize the stock data and the predictions.",
      "The app is built using Streamlit and Python."
    ],
    image: "/projects/project1.png",
    codeLink: "https://github.com/AkashParley/Stocklyzer",
    liveLink: "https://stocklyzer-aqjkubjztydydfgepacyvt.streamlit.app/",
  },
  {
    id: 2,
    title: "IPL Data Analysis and Visualization",
    skills: "Python , Pandas , Numpy , Matplotlib , Seaborn , Data Visualization , Tableau , Excel",
    about: [
      "A data analysis and visualization project on the Indian Premier League (IPL) dataset.",
      "The project includes data cleaning, exploratory data analysis, and visualization using Python libraries like Pandas, Numpy, Matplotlib, and Seaborn.",
      "Developed interactive Tableau dashboards to visualize batting, bowling, and overall team performance, enabling clear insights for data-driven decision-making.",
      "Delivered insights that could support strategic team selection and performance optimization, showcasing how data-driven decisions improve competitive outcomes.",
    ],
    image: "/projects/project2.png",
    codeLink: "https://github.com/AkashParley/IPL-Data-Analysis",
    liveLink: "https://public.tableau.com/app/profile/akash.parley/viz/IPLDataAnalysis_17393967228710/Dashboard1",
  },
  {
    id: 3,
    title: "Netflix Movies and TV Shows Data Analysis",
    skills: "Excel , SQL , Data Visualization , Tableau",
    about: [
      "Data Analysis & Insights: Cleaned and analyzed 8,500+ Netflix titles using SQL, uncovering trends like a 15% annual release growth and dominant ratings (TV-MA for shows, PG-13 for movies).",
      "Interactive Visualizations: Built 10+ Tableau dashboards features showcasing regional content trends, rating distributions, and keyword categorizations.",
      "Business Impact: Delivered actionable insights to optimize content strategy, audience targeting, and regional market.",
    ],
    image: "/projects/project3.jpeg",
    codeLink: "https://github.com/AkashParley/Netflix?tab=readme-ov-file",
    liveLink: "https://public.tableau.com/app/profile/akash.parley/viz/Book1_17287292047080/Netflix",
  },
  {
    id: 4,
    title: "Spotify Query Optimization and Data Analysis",
    skills: "Excel , SQL , Data Visualization , Tableau",
    about: [
      "Data Cleaning & Preparation: Standardized a 50,000+ track dataset in Excel, ensuring consistency across artist names, album types, and attributes before PostgreSQL analysis.",
      "Improved SQL query performance by 50% using indexing, CTEs, and window functions to analyze top tracks and streaming patterns.",
      "Created dashboards revealing that 90% of top tracks were singles and energy levels drive genre-based streaming, supporting content strategy.",
    ],
    image: "/projects/project4.png",
    codeLink: "https://github.com/AkashParley/Spotify",
    liveLink: "https://public.tableau.com/app/profile/akash.parley/viz/Book2_17289134476450/Dashboard1",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden flex flex-col md:flex-row text-white shadow-xl w-full border border-white/10"
    >
      {/* Left - Image */}
      <div className="md:w-1/2">
        <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover" />
      </div>

      {/* Right - Content */}
      <div className="p-6 md:w-1/2 flex flex-col justify-between font-Nunito">
        <div>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-300 mb-1"><strong>Skills Used:</strong> {project.skills}</p>
          <ul className="list-disc ml-5 text-sm">
            {project.about.map((data, index) => (
                <li key={index}>{data}</li>
            ))}
            </ul>
        </div>
        <div className="flex gap-6 mt-2">
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-md text-sm font-medium shadow transition duration-300 ease-in-out transform  hover:scale-105 hover:bg-white/20 hover:shadow-md hover:ring-1 hover:ring-cyan-400">Code</button>
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-md text-sm font-medium shadow transition duration-300 ease-in-out transform  hover:scale-105 hover:bg-white/20 hover:shadow-md hover:ring-1 hover:ring-cyan-400">Live Link</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectPage = () => {
  return (
    <div className="relative bg-[url('/project-page-image.jpg')] min-h-screen bg-cover bg-center text-white">
      <Navbar />

      <div className="px-4 md:px-10 py-16 min-h-screen font-Nunito">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 drop-shadow-md"
        >
          Projects
        </motion.h1>

        <div className="space-y-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Skill = ({ label,width = "w-3/5" }) => (
  <div className="my-2">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      {/* <span className="text-gray-300">●●●●●</span> */}
    </div>
    <div className="h-2 bg-gray-700 rounded mt-1">
      <div className={`h-full bg-cyan-600 rounded ${width}`}></div>
    </div>
  </div>
);

const ResumePage = () => {
  return (
    <div className="relative bg-[url('/resume-page-image.jpg')] min-h-screen bg-cover bg-center text-white">
      <Navbar />

      <div className="p-6 md:p-12 min-h-screen font-Nunito">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT PANEL */}
          <div className="space-y-10">
            {/* SOFTWARE SKILLS */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                >
                <h2 className="text-xl font-bold border-b border-gray-500 pb-2">TECHNICAL SKILLS</h2>
                <Skill label="SQL" width="w-[80%]" />
                <Skill label="Python" width="w-[75%]" />
                <Skill label="Tableau" width="w-[85%]" />
                <Skill label="Advanced Excel" width="w-[80%]" />
                <Skill label="Power BI" width="w-[60%]" />
            </motion.div>

            {/* LANGUAGES */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">LANGUAGES</h2>
              <Skill label="English" width="w-[60%]" />
              <Skill label="Hindi" width="w-[90%]" />
            </motion.div>

            {/* PERSONAL SKILLS */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">SOFT SKILLS</h2>
              <p className="text-sm mt-2"> Problem-solving - Teamwork -Communication - Creativity - Adaptability - Self-motivated</p>
            </motion.div>
          </div>

          {/* CENTER PANEL - EXPERIENCE TIMELINE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold border-b border-gray-500 pb-2">EXPERIENCE</h2>
            {[
              { year: "Dec/2024 - Mar/2025", company: "INFOTACT SOLUTION", role: "Data Analyst Intern" },
              { year: "Jan/2025- Feb/2025", company: "INNOBYTE SERVICES", role: "Data Analyst Intern" }
            ].map((item, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-cyan-600">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-cyan-600 rounded-full"></div>
                <p className="text-xs text-gray-300">{item.year}</p>
                <h3 className="font-semibold">{item.company}</h3>
                <p className="text-sm">{item.role}</p>
              </div>
            ))}
            {/* EDUCATION */}
            <div>
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">EDUCATION</h2>
              <p className="text-sm mt-2 font-semibold">B.TECH in Electronics and Communication Engineering</p>
              <p className="text-xs text-gray-400 mb-1">2021 - 2025</p>
              <p className="text-sm text-gray-300">Indian Institute of Information Technology, KOTA</p>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* WHAT CAN I DO */}
            <div>
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">WHAT CAN I DO?</h2>
              <ul className="text-sm list-disc ml-5 mt-2 space-y-1">
                <li>Data cleaning, transformation, and preprocessing (ETL)</li>
                <li>Exploratory Data Analysis (EDA) and visualization</li>
                <li>Building dashboards and reports in Tableau/Excel</li>
                <li>Writing complex SQL queries for data extraction</li>
                <li>Statistical analysis and hypothesis testing</li>
                <li>Predictive analytics and machine learning (using Python, Pandas, Scikit-learn)</li>
                <li>Automating workflows with VBA and Python scripts</li>
                <li>KPI tracking and business insights generation</li>
                <li>Stock market and financial data analytics</li>
              </ul>
            </div>

            {/* DESIGN SKILLS */}
            <div>
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">SKILLS & TOOLS</h2>
              <ul className="text-sm list-disc ml-5 mt-2 space-y-1">
                <li><span className="font-bold">Languages and Databases:</span> Python, SQL, MySQL, DAX, VBA</li>
                <li><span className="font-bold">Visualization Tools:</span> Tableau, PostgreSQL, Advanced Excel (Pivot Tables, VLOOKUP, Macros), PowerPoint</li>
                <li><span className="font-bold">Platforms:</span> Visual Studio Code, Cursor, Git/GitHub, ChatGPT</li>
                <li><span className="font-bold">Technologies and Libraries:</span> NumPy, Pandas, Matplotlib, Seaborn, Linux</li>
                <li><span className="font-bold">Soft Skills:</span> Problem-solving, Teamwork, Communication, Creativity, Adaptability, Self-motivated</li>
                <li><span className="font-bold">Other:</span> Data Science, ETL, EDA, Stock Market Analytics, Statistics, KPI Tracking, Predictive Analytics</li>
              </ul>
            </div>

            {/* HOBBIES */}
            <div>
              <h2 className="text-xl font-bold border-b border-gray-500 pb-2">HOBBIES & INTERESTS</h2>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                <span>🏋🏻‍♂️Gyming</span>
                <span>📸 Video Making</span>
                <span>🔉 Music </span>
                <span>🌍 Travel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Fixed Download CV button at the bottom center */}
      <div className="fixed left-1/2 bottom-6 transform -translate-x-1/2 z-50">
        <a
          href="/Akash_Parley_Analyst_2025.pdf"
          download
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ResumePage;

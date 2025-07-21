import Navbar from "../components/Navbar";
import { motion } from "motion/react";

const AboutPage = () => {
  return (
    <>
      <div className="relative bg-[url('/public/3E0883F1-B75A-42DA-B978-D9C768FB330E.JPEG')] min-h-screen bg-cover bg-center text-white">
        <Navbar />

        {/* Main Left-Side Content with margin from top and left */}
        <div className="flex items-start ">
          <div className="w-full md:w-1/2 px-6 md:px-16 pt-32 space-y-6 font-Nunito">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>

            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              I'm a passionate <span className="text-cyan-600 font-semibold">Data Analyst/Business Analyst</span> I’m Akash Parley a passionate and detail-oriented Data Analyst | Business Analyst with hands-on experience in transforming complex datasets into meaningful insights that drive business growth.
              <br></br>
              Armed with skills in SQL, Python, Excel, Tableau, Power BI, and Machine Learning, I specialize in data storytelling, KPI tracking, and strategic decision-making. From sales and product analytics to marketing insights, I’ve worked on real-world projects using tools like Streamlit, ARIMA, VBA, and PostgreSQL to craft end-to-end data solutions.
              <br></br>
              I’ve previously contributed to impactful data analysis internships at Infotact Solutions and Innobyte Services, where I built interactive dashboards, cleaned and modeled large datasets, and uncovered insights that shaped business strategy and operational efficiency.
              <br />
              Let’s connect and create value through data!
            </motion.p>
            <motion.p
            className="text-base md:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >Email: akashparle786@gmail.com</motion.p>
          </div>
        </div>

        {/* Address fixed to bottom center */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-sm md:text-base text-gray-300 font-Nunito"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>📍 Dehradun, Uttarakhand</p>
          <p>🇮🇳 India</p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;

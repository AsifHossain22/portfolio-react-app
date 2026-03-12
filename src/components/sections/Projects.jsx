import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { motion } from "framer-motion";
import sectionHeaderIcon from "../../assets/icons/span-icon.png";

import { useState } from "react";
import projectsData from "../../data/projectData";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-28">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* SectionHeader */}
        <div className="flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-(--accent-primary)">Projects</span>
          </h2>
          <span className="">
            <img
              src={sectionHeaderIcon}
              alt=""
              className="section-header-icon mb-10 ml-3"
            />
          </span>
        </div>

        {/* ProjectsSlider */}
        <Swiper
          // modules={[Autoplay]}
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          // loop
          // autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ProjectCard project={project} onOpen={setActiveProject} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;

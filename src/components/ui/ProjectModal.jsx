import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // CloseOnESCKey
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // ClickOutsideModalContentToClose
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/80 z-50 overflow-y-auto flex justify-center items-start pt-20 px-4"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="max-w-5xl w-full mx-auto p-6 text-white bg-(--bg-secondary) rounded-xl relative"
      >
        <button
          onClick={onClose}
          className="text-3xl absolute top-6 right-6 cursor-pointer"
          aria-label="Close modal"
        >
          <IoClose />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl mb-6"
        />

        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        <div className="space-y-4">
          <p>
            <strong>Problem:</strong> {project.problem}
          </p>

          <p>
            <strong>Solution:</strong> {project.solution}
          </p>

          <div>
            <strong>Key Features:</strong>
            <ul className="list-disc ml-6">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <p>
            <strong>Learnings:</strong> {project.learnings}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;

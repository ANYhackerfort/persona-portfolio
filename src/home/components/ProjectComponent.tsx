import { useState } from "react";
import "./ProjectComponent.css";

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  link: string;
}

const ProjectComponent = ({ title, description, images, link }: ProjectProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-desc">{description}</p>

      <div className="project-slider">
        <button className="slide-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <img src={images[current]} alt={`Slide ${current + 1}`} className="project-image" />
        <button className="slide-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project ↗
      </a>
    </div>
  );
};

export default ProjectComponent;

'use client';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ProjectHoverCard from './project-hover-card';
import { PROJECTS } from '@/data/projects';
import ProjectCard from './project-card';

const ProjectsList = () => {
  const [showCard, setShowCard] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(-1);

  const handleMouseEnter = (e: React.MouseEvent<HTMLHeadElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    setCardPosition({ x: rect.left, y: rect.bottom });
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
    setActiveProject(-1);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadElement>) => {
    setCardPosition({ x: e.clientX - 20, y: e.clientY + 30 });
  };

  return (
    <div className='ps-10 pt-10'>
      <ul className='flex flex-col gap-2'>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onMouseEnter={(e) => {
              handleMouseEnter(e);
              setActiveProject(index);
            }}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            isActive={activeProject === index || activeProject === -1}
          />
        ))}
      </ul>
      {showCard &&
        createPortal(
          <ProjectHoverCard
            position={cardPosition}
            content={PROJECTS[activeProject].descriptiion}
          />,
          document.body
        )}
    </div>
  );
};

export default ProjectsList;

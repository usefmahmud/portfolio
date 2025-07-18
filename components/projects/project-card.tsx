import { cn } from '@/lib/utils';
import { Project } from '@/types/project';
import Link from 'next/link';
import React from 'react';

interface ProjectCardProps {
  project: Project;
  onMouseEnter: (e: React.MouseEvent<HTMLHeadElement>) => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLHeadElement>) => void;
  isActive: boolean;
}

const ProjectCard = ({
  project,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  isActive,
}: ProjectCardProps) => {
  return (
    <li
      className={cn(
        'flex w-fit list-none flex-col select-none',
        !isActive && 'opacity-25'
      )}
    >
      <Link href={project.url} target='_blank'>
        <h3
          className='text-[45px] font-bold'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
        >
          {project.name.toUpperCase()}
        </h3>
        <p className='ms-10 font-medium'>
          {project.date.toLocaleDateString('en-EG', {
            month: 'numeric',
            year: 'numeric',
          })}
        </p>
      </Link>
    </li>
  );
};

export default ProjectCard;

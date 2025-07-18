import React from 'react';

interface ProjectHoverCardProps {
  position: { x: number; y: number };
  content: string;
}
const ProjectHoverCard = ({ position, content }: ProjectHoverCardProps) => {
  return (
    <div
      className='border-foreground bg-background w-full max-w-[500px] border-5 p-4'
      style={{ position: 'absolute', left: position.x, top: position.y }}
    >
      {content}
    </div>
  );
};

export default ProjectHoverCard;

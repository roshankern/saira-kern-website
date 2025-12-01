import { useState, ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InfoCircleProps {
  x: number; // percentage from left
  y: number; // percentage from top
  name: string;
  info: ReactNode;
}

const InfoCircle = ({ x, y, name, info }: InfoCircleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Circle */}
      <div
        className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-30 hover:opacity-60 cursor-pointer"
        style={{ left: `${x}%`, top: `${y}%` }}
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`View ${name}`}
      />

      {/* Hover tooltip */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transform -translate-x-1/2"
          style={{ left: `${x}%`, top: `${y - 15}%` }}
        >
          <div className="bg-card/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-soft border border-border/50 animate-fade-in-up">
            <p className="text-card-foreground font-medium">{name}</p>
          </div>
        </div>
      )}

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              {name}
            </DialogTitle>
          </DialogHeader>
          <div className="text-center text-muted-foreground">
            {info}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InfoCircle;

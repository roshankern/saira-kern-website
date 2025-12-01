import room from '@/assets/room.webp';
import InfoCircle from '@/components/InfoCircle';

// Configuration for all info circles
const infoCircles = [
  {
    x: 8,
    y: 20,
    name: 'Favorites',
    info: <p>Content coming soon.</p>,
  },
  {
    x: 82,
    y: 80,
    name: 'Racing',
    info: <p>Content coming soon.</p>,
  },
  {
    x: 35,
    y: 65,
    name: 'About',
    info: <p>Content coming soon.</p>,
  },
  {
    x: 75,
    y: 20,
    name: 'Media',
    info: <p>Content coming soon.</p>,
  },
];

const Index = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center">
      {/* Main Section - Centered vertically */}
      <div className="flex flex-col items-center space-y-8 p-8">
        {/* Title and Info Section */}
        <div className="text-center">
          {/* Website Title */}
          <div className="space-y-2">
            <h1 className="text-6xl font-serif text-foreground tracking-wide animate-gentle-float">
              Saira Kern
            </h1>
          </div>

          {/* Navigation hint */}
          <div className="mt-6">
            <p className="text-muted-foreground text-sm">
              Explore the room to learn about my life!
            </p>
          </div>
        </div>

        {/* Room Scene Container */}
        <div className="relative max-w-6xl w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-cottage animate-fade-in-up">
            <img 
              src={room} 
              alt="Saira's Room" 
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          
            {/* Info Circles */}
            {infoCircles.map((circle) => (
              <InfoCircle
                key={circle.name}
                x={circle.x}
                y={circle.y}
                name={circle.name}
                info={circle.info}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
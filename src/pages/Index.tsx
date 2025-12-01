import room from '@/assets/room.webp';
import InfoCircle from '@/components/InfoCircle';

// Configuration for all info circles
const infoCircles = [
  {
    x: 8,
    y: 30,
    name: 'Favorites',
    info: (
      <div className="text-left space-y-4">
        <div>
          <h3 className="font-semibold text-foreground mb-2">Movies:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Interstellar</li>
            <li>Inception</li>
            <li>Tenet</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">Artists:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Wheezy</li>
            <li>Metro</li>
            <li>Rufus Du Sol</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">Drinks:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Water</li>
            <li>Pink Lemonade</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    x: 82, // 100 - 21 (converting from right to left)
    y: 80,
    name: 'Medicine',
    info: (
      <div className="text-left space-y-4">
        <p>I'm passionate about medicine and healthcare. I love helping people!</p>
        <p>During my time at CWRU, I've volunteered at MedWish, shadowed at the Cleveland Clinic, and completed research in the Tesar Lab.</p>
      </div>
    ),
  },
  {
    x: 40,
    y: 60, // 100 - 18 (converting from bottom to top)
    name: 'About',
    info: (
      <div className="text-left space-y-4">
        <p>Hello! I am Saira, a 22 year old premed student at CWRU. I love hanging out with my family, spending time with my friends, and causing havoc. I'm also a Cleveland native :)</p>
        <p>Feel free to reach out!</p>
        <p className="text-center">
          <a href="mailto:sk@sairakern.com" className="text-[#5B7BA3] hover:underline">sk@sairakern.com</a>
        </p>
      </div>
    ),
  },
  {
    x: 20,
    y: 85,
    name: 'Athletics',
    info: (
      <div className="text-left space-y-4">
        <p>Athletics have always been a big part of my life. I love the competition and drive that these activities bring out in me:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Tennis</li>
          <li>Ping Pong</li>
          <li>Running</li>
          <li>Lifting</li>
          <li>Basketball</li>
        </ul>
      </div>
    ),
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
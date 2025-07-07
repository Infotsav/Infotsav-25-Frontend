import {
  Zap,
  Code,
  Music,
  Palette,
  Users,
  type LucideIcon,
} from "lucide-react";

interface FestZone {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const festZones: FestZone[] = [
  {
    id: "tech",
    title: "TECH REALM",
    description: "Hackathons, coding battles & innovation labs",
    icon: Code,
    color: "red",
  },
  {
    id: "cultural",
    title: "CULTURAL DIMENSION",
    description: "Music, dance, drama & artistic expressions",
    icon: Music,
    color: "pink",
  },
  {
    id: "creative",
    title: "CREATIVE PORTAL",
    description: "Design contests, art exhibitions & workshops",
    icon: Palette,
    color: "purple",
  },
  {
    id: "gaming",
    title: "ENERGY FIELD",
    description: "Gaming tournaments, robotics & tech demos",
    icon: Zap,
    color: "yellow",
  },
  {
    id: "community",
    title: "COMMUNITY HUB",
    description: "Networking, mentorship & collaboration",
    icon: Users,
    color: "green",
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    red: { icon: "text-red-400", title: "text-red-300" },
    pink: { icon: "text-pink-400", title: "text-pink-300" },
    purple: { icon: "text-purple-400", title: "text-purple-300" },
    yellow: { icon: "text-yellow-400", title: "text-yellow-300" },
    green: { icon: "text-green-400", title: "text-green-300" },
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.red;
};

export default function Component() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col">
        {/* Main heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            ABOUT INFOTSAV
          </h2>
          <div className="flex w-full justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 my-6" />
          </div>
          <p className="text-red-400 text-lg font-mono tracking-wider">
            {"> LOADING_FEST_INFO..."}
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-36 items-start mt-16">
          {/* Left side - Description */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-red-400 font-mono">
              WHO_WE_ARE
            </h3>
            <div className="flex flex-col space-y-6 text-gray-300 text-lg leading-relaxed mt-6">
              <p>
                We're not your typical college fest. We're where
                <span className="text-red-400 font-semibold">
                  {" "}
                  technology meets creativity
                </span>
                , and students get to showcase their wildest ideas and talents.
              </p>
              <p>
                Our annual techno-cultural festival is a
                <span className="text-pink-400 font-semibold">
                  {" "}
                  mind-blowing experience
                </span>{" "}
                packed with coding competitions, cultural performances, tech
                talks, workshops, and creative showcases that'll challenge
                everything you thought you knew.
              </p>
              <p>
                Whether you're a coding ninja, a creative artist, a performer,
                or just someone who loves innovation and good vibes, this is
                your playground.{" "}
                <span className="text-red-400 font-semibold">
                  Come as you are, leave as a legend.
                </span>
              </p>
            </div>
          </div>

          {/* Right side - What to expect */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-red-400 font-mono">
              WHAT_TO_EXPECT
            </h3>
            <div className="flex flex-col space-y-6 mt-8">
              {festZones.map((zone) => {
                const colors = getColorClasses(zone.color);
                const IconComponent = zone.icon;

                return (
                  <div key={zone.id} className="flex items-start space-x-4">
                    <IconComponent
                      className={`w-6 h-6 ${colors.icon} mt-1 flex-shrink-0`}
                    />
                    <div>
                      <h4
                        className={`font-bold ${colors.title} font-mono text-lg mb-1`}
                      >
                        {zone.title}
                      </h4>
                      <p className="text-gray-400">{zone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-red-400 font-mono text-xl">{"> SYSTEM_READY"}</p>
          <div className="flex w-full justify-center">
            <p className="text-gray-300 text-lg text-center mt-4">
              Ready to join the experience? Registration opens soon...
            </p>
          </div>
        </div>
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />
    </section>
  );
}

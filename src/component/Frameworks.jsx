import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "visualstudiocode",
    "css3",
    "javascript",
    "dotnet",
    "git",
    "github",
    "html5",
    "java",
    "mongodb",
    "express",
    "tailwindcss",
    "vitejs",
    "react",
    "node",
    "typescript",
    // "redux",
    "python",
    "r",
  ]; 

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

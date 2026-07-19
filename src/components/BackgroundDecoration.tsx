import { useId } from "react";

interface GlowOrb {
  id: string;
  className: string;
  style: React.CSSProperties;
  animationDelay: string;
}

const ORBS: GlowOrb[] = [
  {
    id: "orb-1",
    className: "w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]",
    style: { top: "10%", left: "10%" },
    animationDelay: "0s",
  },
  {
    id: "orb-2",
    className: "w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[100px]",
    style: { top: "50%", right: "5%" },
    animationDelay: "2s",
  },
  {
    id: "orb-3",
    className: "w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[80px]",
    style: { bottom: "10%", left: "30%" },
    animationDelay: "4s",
  },
  {
    id: "orb-4",
    className: "w-[350px] h-[350px] rounded-full bg-primary/10 blur-[90px]",
    style: { top: "30%", left: "50%" },
    animationDelay: "6s",
  },
];

const GRID_PATTERN = `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwZGZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')`;

const BackgroundDecoration = ({
  showGrid = true,
  showOrbs = true,
  className = "",
}: {
  showGrid?: boolean;
  showOrbs?: boolean;
  className?: string;
}) => {
  const uniqueId = useId();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {showGrid && (
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: GRID_PATTERN }}
        />
      )}

      {showOrbs && (
        <div className="absolute inset-0">
          {ORBS.map((orb) => (
            <div
              key={orb.id}
              className={`absolute ${orb.className} animate-float`}
              style={{
                ...orb.style,
                animationDelay: orb.animationDelay,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundDecoration;

/**
 * Server Component: Reusable Ranking Card
 *
 * Why Server Component:
 * - Static ranking display
 * - No client-side interactivity required
 * - Better performance for static content
 */

interface DecorativeShape {
  type: "rotated-rectangle" | "white-pill" | "stroke-oval";
  color?: string;
  left: string;
  top: string;
  rotation?: number;
  transformOrigin?: string;
}

interface RankingCardProps {
  category: string;
  rank: number;
  arrowDirection: "up" | "down" | "stable";
  bgColor: string;
  decorativeShapes: DecorativeShape[];
  textTop: string;
  rankTop: string;
  rankLeft: string;
}

export default function RankingCard({
  category,
  rank,
  arrowDirection,
  bgColor,
  decorativeShapes,
  textTop,
  rankTop,
  rankLeft,
}: RankingCardProps): React.ReactElement {
  // Base dimensions for percentage calculations (original design dimensions)
  const BASE_WIDTH = 200;
  const BASE_HEIGHT = 100;

  // Helper function to convert px to percentage for width (horizontal)
  const pxToPercentWidth = (px: string): string => {
    const pxValue = parseFloat(px.replace("px", ""));
    return `${(pxValue / BASE_WIDTH) * 100}%`;
  };

  // Helper function to convert px to percentage for height (vertical)
  const pxToPercentHeight = (px: string): string => {
    const pxValue = parseFloat(px.replace("px", ""));
    return `${(pxValue / BASE_HEIGHT) * 100}%`;
  };

  // Helper to parse and convert transformOrigin
  const convertTransformOrigin = (
    transformOrigin: string | undefined,
    shapeLeft: string,
    shapeTop: string
  ): string => {
    if (!transformOrigin || transformOrigin === "0 0" || transformOrigin === "top left") {
      return transformOrigin || "0 0";
    }

    if (transformOrigin.includes("px")) {
      const match = transformOrigin.match(/([\d.-]+)px\s+([\d.-]+)px/);
      if (match) {
        const originX = parseFloat(match[1]);
        const originY = parseFloat(match[2]);
        const elementX = parseFloat(shapeLeft.replace("px", ""));
        const elementY = parseFloat(shapeTop.replace("px", ""));
        // Calculate relative position (rotation point - element position)
        const relativeX = originX - elementX;
        const relativeY = originY - elementY;
        // Convert to percentage
        const relativeXPercent = (relativeX / BASE_WIDTH) * 100;
        const relativeYPercent = (relativeY / BASE_HEIGHT) * 100;
        return `${relativeXPercent}% ${relativeYPercent}%`;
      }
    }
    return transformOrigin;
  };

  return (
    <div
      className="relative overflow-hidden rounded-[20px]"
      style={{
        backgroundColor: bgColor,
        height: "100px",
        width: "100%",
      }}
    >
      {/* Mask group container */}
      <div className="absolute inset-0">
        {decorativeShapes.map((shape, index) => {
          if (shape.type === "rotated-rectangle") {
            return (
              <div
                key={index}
                className="absolute h-full w-full rounded-[50px]"
                style={{
                  backgroundColor: shape.color,
                  left: pxToPercentWidth(shape.left),
                  top: pxToPercentHeight(shape.top),
                  transform: shape.rotation
                    ? `rotate(${shape.rotation}deg)`
                    : undefined,
                  transformOrigin: convertTransformOrigin(
                    shape.transformOrigin,
                    shape.left,
                    shape.top
                  ),
                }}
              />
            );
          }
          if (shape.type === "white-pill") {
            return (
              <div
                key={index}
                className="absolute h-full w-full rounded-[50px] bg-white/30"
                style={{
                  left: pxToPercentWidth(shape.left),
                  top: pxToPercentHeight(shape.top),
                }}
              />
            );
          }
          if (shape.type === "stroke-oval") {
            return (
              <div
                key={index}
                className="absolute rounded-[49.5px] border border-white/30"
                style={{
                  left: pxToPercentWidth(shape.left),
                  top: pxToPercentHeight(shape.top),
                  width: "99.5%", // 199px / 200px
                  height: "99%", // 99px / 100px
                  transform: shape.rotation
                    ? `rotate(${shape.rotation}deg)`
                    : undefined,
                  transformOrigin: convertTransformOrigin(
                    shape.transformOrigin,
                    shape.left,
                    shape.top
                  ),
                }}
              />
            );
          }
          return null;
        })}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full">
        {/* Category text */}
        <span
          className="absolute text-white"
          style={{
            left: pxToPercentWidth("15.9741px"),
            top: pxToPercentHeight(textTop),
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "18px",
            letterSpacing: "0.5px",
          }}
        >
          {category}
        </span>

        {/* Rank number and arrow */}
        <div
          className="absolute flex items-center"
          style={{
            left: pxToPercentWidth(rankLeft),
            top: pxToPercentHeight(rankTop),
          }}
        >
          {/* Rank number */}
          <span
            className="text-white mr-2"
            style={{
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "30px",
              letterSpacing: "0.5px",
            }}
          >
            {rank}
          </span>

          {/* Arrow icon */}
          {/* <svg
            width="24"
            height="24"
            viewBox="45 55 57 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[6px] text-white"
            style={
              arrowDirection === "down" ? { transform: "rotate(180deg)" } : {}
            }
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.3111 60.168C60.1122 59.944 59.7624 59.944 59.5635 60.168L53.129 67.4121C52.8425 67.7346 53.0715 68.2442 53.5028 68.2442H55.9374C56.2136 68.2442 56.4374 68.468 56.4374 68.7442V74.9942C56.4374 75.2704 56.6613 75.4942 56.9374 75.4942H62.9374C63.2136 75.4942 63.4374 75.2704 63.4374 74.9942V68.7442C63.4374 68.468 63.6613 68.2442 63.9374 68.2442H66.3718C66.8032 68.2442 67.0321 67.7346 66.7456 67.4121L60.3111 60.168ZM58.8158 59.5039C59.4126 58.832 60.4621 58.832 61.0588 59.5039L67.4933 66.748C68.3526 67.7155 67.6658 69.2442 66.3718 69.2442H64.4374V74.9942C64.4374 75.8227 63.7659 76.4942 62.9374 76.4942H56.9374C56.109 76.4942 55.4374 75.8227 55.4374 74.9942V69.2442H53.5028C52.2088 69.2442 51.522 67.7155 52.3813 66.748L58.8158 59.5039Z"
              fill="currentColor"
            />
          </svg> */}
          {arrowDirection !== "stable" && (
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={
                arrowDirection === "down" ? { transform: "rotate(180deg)" } : {}
              }
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.31126 1.16796C8.11235 0.944015 7.76252 0.944015 7.56361 1.16796L1.12911 8.41213C0.84266 8.73462 1.07159 9.24418 1.50293 9.24418H3.93757C4.21371 9.24418 4.43757 9.46804 4.43757 9.74418V15.9942C4.43757 16.2704 4.66143 16.4942 4.93757 16.4942H10.9376C11.2137 16.4942 11.4376 16.2704 11.4376 15.9942V9.74418C11.4376 9.46804 11.6614 9.24418 11.9376 9.24418H14.3719C14.8033 9.24418 15.0322 8.73462 14.7458 8.41213L8.31126 1.16796L8.68509 0.835911L8.31126 1.16796ZM6.81596 0.503866C7.41269 -0.167956 8.46218 -0.167955 9.05892 0.503866L15.4934 7.74804C16.3528 8.71552 15.666 10.2442 14.3719 10.2442H12.4376V15.9942C12.4376 16.8227 11.766 17.4942 10.9376 17.4942H4.93757C4.10914 17.4942 3.43757 16.8227 3.43757 15.9942V10.2442H1.50293C0.208922 10.2442 -0.477888 8.71552 0.381452 7.74804L6.81596 0.503866Z"
                fill="white"
              />
            </svg>
          )}
          {arrowDirection === "stable" && (
            <div className="ml-1.5 h-0.5 w-4 bg-white" />
          )}
        </div>
      </div>
    </div>
  );
}

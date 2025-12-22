/**
 * Server Component: Reusable Ranking Card
 *
 * Why Server Component:
 * - Static ranking display
 * - No client-side interactivity required
 * - Better performance for static content
 */

import type { RankingCardProps } from "./types";
import { pxToPercentWidth, pxToPercentHeight, convertTransformOrigin } from "./utils";

const RankingCard = ({
  category,
  rank,
  arrowDirection,
  bgColor,
  decorativeShapes,
  textTop,
  rankTop,
  rankLeft,
}: RankingCardProps): React.ReactElement => {
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
};

export default RankingCard;


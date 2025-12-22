// import Image from "next/image";
// import type { Player } from "@/types";
// import { dummyPlayer } from "@/lib/constants";
// import SocialMediaIcons from "@/components/client/social-media-icons";

// /**
//  * Server Component: Player Profile Panel
//  *
//  * Why Server Component:
//  * - Displays static player information
//  * - No client-side interactivity required for initial render
//  * - Better performance for static content
//  */
// export default function PlayerProfile(): React.ReactElement {
//   const player = dummyPlayer;

//   return (
//     <aside
//       className="hidden xl:block relative overflow-visible"
//       style={{
//         width: "400px",
//         height: "505px",
//         filter: "drop-shadow(0px 50px 80px rgba(102, 30, 255, 0.2))",
//         borderRadius: "30px",
//       }}
//     >
//       {/* Main Card Container */}
//       <div
//         className="absolute inset-0 bg-white overflow-visible"
//         style={{
//           borderRadius: "30px",
//         }}
//       >
//         {/* Top Purple Gradient Section */}
//         <div
//           className="absolute top-0 left-0 right-0 overflow-visible"
//           style={{
//             height: "191.56px",
//             background:
//               "linear-gradient(101.84deg, #5C24FC 2.78%, #9D7AFF 98.95%)",
//             borderRadius: "30px 30px 50px 30px",
//           }}
//         >
//           {/* Player Name */}
//           <h1
//             className="absolute text-white"
//             style={{
//               width: "158px",
//               height: "90px",
//               left: "25px",
//               top: "40px",
//               fontFamily:
//                 "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//               fontStyle: "normal",
//               fontWeight: 700,
//               fontSize: "30px",
//               lineHeight: "150%",
//               letterSpacing: "0.5px",
//             }}
//           >
//             {player.name}
//           </h1>

//           {/* Country Flag and Text */}
//           <div
//             className="absolute flex items-center"
//             style={{
//               width: "103px",
//               height: "24px",
//               left: "25px",
//               top: "140px",
//               gap: "10px",
//             }}
//           >
//             {/* Flag Icon */}
//             <div
//               className="flex-none"
//               style={{
//                 width: "24px",
//                 height: "24px",
//               }}
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* Indonesian Flag - Red and White stripes */}
//                 <rect width="24" height="12" fill="#FF0000" />
//                 <rect y="12" width="24" height="12" fill="#FFFFFF" />
//               </svg>
//             </div>

//             {/* Country Name */}
//             <span
//               className="text-white flex-none"
//               style={{
//                 width: "69px",
//                 height: "18px",
//                 fontFamily:
//                   "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 fontSize: "15px",
//                 lineHeight: "18px",
//                 letterSpacing: "0.5px",
//               }}
//             >
//               {player.country}
//             </span>
//           </div>

//           {/* Large Profile Person SVG - positioned on the right, fully visible, overflowing top */}
//           <div
//             className="absolute overflow-visible"
//             style={{
//               right: "-35px", // Move to the right to match Figma
//               top: "-50px", // Overflow above the container
//               width: "346px",
//               height: "545px",
//               zIndex: 10,
//             }}
//           >
//             <Image
//               src="/highlighted_tennis_player.svg"
//               alt={`${player.name} illustration`}
//               width={346}
//               height={545}
//               className="h-full w-full object-contain"
//               priority
//             />
//           </div>
//         </div>

//         {/* White Bottom Section */}
//         <div
//           className="absolute bottom-0 left-0 right-0 bg-white"
//           style={{
//             top: "191.56px",
//             borderRadius: "0 0 30px 30px",
//           }}
//         >
//           {/* Biography Title */}
//           <h2
//             className="absolute text-[#121212]"
//             style={{
//               width: "72px",
//               height: "18px",
//               left: "25px",
//               top: "20.44px", // 212px - 191.56px
//               fontFamily:
//                 "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//               fontStyle: "normal",
//               fontWeight: 600,
//               fontSize: "15px",
//               lineHeight: "18px",
//               letterSpacing: "0.5px",
//             }}
//           >
//             Biography
//           </h2>

//           {/* Small Avatar Icon under Biography */}
//           <div
//             className="absolute overflow-hidden"
//             style={{
//               width: "50px",
//               height: "60px",
//               left: "24px",
//               top: "46.44px", // 238px - 191.56px
//               borderRadius: "20px 10px",
//             }}
//           >
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: "#FFC2F9",
//                 borderRadius: "20px 10px",
//               }}
//             />
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: "#C4C4C4",
//                 borderRadius: "20px 10px",
//                 opacity: 0.3,
//               }}
//             />
//             {/* Anindita's Avatar Image */}
//             <div
//               className="absolute overflow-hidden"
//               style={{
//                 width: "41px",
//                 height: "56.62px",
//                 left: "4.5px",
//                 top: "1.69px",
//                 background: "#FFC2F9", // Same pink as outer container
//               }}
//             >
//               <Image
//                 src={player.avatar}
//                 alt={`${player.name} avatar`}
//                 width={41}
//                 height={57}
//                 className="h-full w-full object-contain"
//                 style={{
//                   mixBlendMode: "multiply", // This will blend out yellow/light colors
//                 }}
//               />
//             </div>
//           </div>

//           {/* Biography Details */}
//           <div
//             className="absolute flex flex-col"
//             style={{
//               width: "122px",
//               height: "86px",
//               left: "24px",
//               top: "123.44px", // 315px - 191.56px
//               gap: "10px",
//             }}
//           >
//             <div
//               className="whitespace-nowrap"
//               style={{
//                 width: "auto",
//                 height: "14px",
//                 fontFamily:
//                   "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 fontSize: "12px",
//                 lineHeight: "14px",
//                 letterSpacing: "0.5px",
//               }}
//             >
//               Age : {player.age}
//             </div>
//             <div
//               className="whitespace-nowrap"
//               style={{
//                 width: "auto",
//                 height: "14px",
//                 fontFamily:
//                   "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 fontSize: "12px",
//                 lineHeight: "14px",
//                 letterSpacing: "0.5px",
//               }}
//             >
//               Birth : {player.birthDate}
//             </div>
//             <div
//               className="whitespace-nowrap"
//               style={{
//                 width: "auto",
//                 height: "14px",
//                 fontFamily:
//                   "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 fontSize: "12px",
//                 lineHeight: "14px",
//                 letterSpacing: "0.5px",
//               }}
//             >
//               Sex : {player.sex}
//             </div>
//             <div
//               className="whitespace-nowrap"
//               style={{
//                 width: "auto",
//                 height: "14px",
//                 fontFamily:
//                   "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 fontSize: "12px",
//                 lineHeight: "14px",
//                 letterSpacing: "0.5px",
//               }}
//             >
//               WTA : {player.wta}.
//             </div>
//           </div>

//           {/* Social Media Title */}
//           <h3
//             className="absolute text-[#121212] whitespace-nowrap"
//             style={{
//               width: "auto",
//               height: "14px",
//               left: "25px",
//               top: "236.44px", // 428px - 191.56px
//               fontFamily:
//                 "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//               fontStyle: "normal",
//               fontWeight: 600,
//               fontSize: "12px",
//               lineHeight: "14px",
//               letterSpacing: "0.5px",
//             }}
//           >
//             Social Media
//           </h3>

//           {/* Social Media Icons */}
//           <SocialMediaIcons />
//         </div>
//       </div>
//     </aside>
//   );
// }

import Image from "next/image";
import type { Player } from "@/types";
import { dummyPlayer } from "@/lib/constants";
import SocialMediaIcons from "@/components/client/social-media-icons";
import CountryFlag from "@/components/client/country-flag";
import { colors, gradients } from "@/lib/theme";

/**
 * Server Component: Player Profile Panel
 *
 * Why Server Component:
 * - Displays static player information
 * - No client-side interactivity required for initial render
 * - Better performance for static content
 */
export default function PlayerProfile(): React.ReactElement {
  const player = dummyPlayer;

  return (
    <aside
      className="hidden xl:block relative overflow-visible"
      style={{
        width: "400px",
        height: "505px",
        filter: "drop-shadow(0px 50px 80px rgba(102, 30, 255, 0.2))",
        borderRadius: "30px",
      }}
    >
      {/* Main Card Container */}
      <div
        className="absolute inset-0 bg-white overflow-visible"
        style={{
          borderRadius: "30px",
        }}
      >
        {/* Top Purple Gradient Section */}
        <div
          className="absolute top-0 left-0 right-0 overflow-visible"
          style={{
            height: "220px",
            background: gradients.purple,
            // Keep your original top corners
            borderRadius: "30px 30px 0 0",
          }}
        >
          {/* ✅ ADD: Curved white bottom cut (Figma-like) */}
          <svg
            className="absolute bottom-[-1px] left-0 w-full"
            height="80"
            viewBox="0 0 400 80"
            preserveAspectRatio="none"
            style={{
              // makes sure it sits above the purple background, but below content if needed
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            {/* This path creates the curved “cut” exactly like a masked shape */}
            <path d="M0,42 C90,78 210,8 400,30 L400,80 L0,80 Z" fill="white" />
          </svg>

          {/* Player Name */}
          <h1
            className="absolute text-white"
            style={{
              width: "158px",
              height: "90px",
              left: "25px",
              top: "40px",
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "150%",
              letterSpacing: "0.5px",
              // ✅ ensure it renders above the curve svg
              zIndex: 2,
            }}
          >
            {player.name}
          </h1>

          {/* Country Flag and Text */}
          <div
            className="absolute flex items-center"
            style={{
              width: "103px",
              height: "24px",
              left: "25px",
              top: "140px",
              gap: "10px",
              zIndex: 2,
            }}
          >
            {/* Flag Icon */}
            <div
              className="flex-none"
              style={{
                width: "24px",
                height: "24px",
              }}
            >
              <CountryFlag
                country={player.country}
                countryCode={player.countryCode}
                width={24}
                height={24}
              />
            </div>

            {/* Country Name */}
            <span
              className="text-white flex-none"
              style={{
                width: "69px",
                height: "18px",
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "18px",
                letterSpacing: "0.5px",
              }}
            >
              {player.country}
            </span>
          </div>

          {/* Large Profile Person SVG - positioned on the right, fully visible, overflowing top */}
          <div
            className="absolute overflow-visible"
            style={{
              right: "-35px", // Move to the right to match Figma
              top: "-50px", // Overflow above the container
              width: "346px",
              height: "545px",
              zIndex: 10,
            }}
          >
            <Image
              src="/highlighted_tennis_player.svg"
              alt={`${player.name} illustration`}
              width={346}
              height={545}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* White Bottom Section */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-white"
          style={{
            top: "220px",
            borderRadius: "0 0 30px 30px",
          }}
        >
          {/* Biography Title */}
          <h2
            className="absolute"
            style={{
              width: "72px",
              height: "18px",
              left: "25px",
              top: "2px", // Further reduced gap from curve
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: "18px",
              letterSpacing: "0.5px",
              color: colors.text.primary,
            }}
          >
            Biography
          </h2>

          {/* Small Avatar Icon under Biography */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: "50px",
              height: "60px",
              left: "24px",
              top: "28px", // Moved up by 6px
              borderRadius: "20px 10px",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: colors.pink.primary,
                borderRadius: "20px 10px",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: colors.gray.light,
                borderRadius: "20px 10px",
                opacity: 0.3,
              }}
            />
            {/* Anindita's Avatar Image */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "41px",
                height: "56.62px",
                left: "4.5px",
                top: "1.69px",
                background: colors.pink.primary, // Same pink as outer container
              }}
            >
              <Image
                src={player.avatar}
                alt={`${player.name} avatar`}
                width={41}
                height={57}
                className="h-full w-full object-contain"
                style={{
                  mixBlendMode: "multiply", // This will blend out yellow/light colors
                }}
              />
            </div>
          </div>

          {/* Biography Details */}
          <div
            className="absolute flex flex-col"
            style={{
              width: "122px",
              height: "86px",
              left: "24px",
              top: "104px", // 28px (avatar top) + 60px (avatar height) + 16px (gap) = 104px
              gap: "10px",
            }}
          >
            <div
              className="whitespace-nowrap"
              style={{
                width: "auto",
                height: "14px",
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.5px",
                color: colors.text.primary,
              }}
            >
              Age : {player.age}
            </div>
            <div
              className="whitespace-nowrap"
              style={{
                width: "auto",
                height: "14px",
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.5px",
                color: colors.text.primary,
              }}
            >
              Birth : {player.birthDate}
            </div>
            <div
              className="whitespace-nowrap"
              style={{
                width: "auto",
                height: "14px",
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.5px",
                color: colors.text.primary,
              }}
            >
              Sex : {player.sex}
            </div>
            <div
              className="whitespace-nowrap"
              style={{
                width: "auto",
                height: "14px",
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.5px",
                color: colors.text.primary,
              }}
            >
              WTA : {player.wta}.
            </div>
          </div>

          {/* Social Media Title */}
          <h3
            className="absolute whitespace-nowrap"
            style={{
              width: "auto",
              height: "14px",
              left: "25px",
              top: "208px", // Adjusted for new purple section height (428px - 220px)
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "14px",
              letterSpacing: "0.5px",
              color: colors.text.primary,
            }}
          >
            Social Media
          </h3>

          {/* Social Media Icons */}
          <SocialMediaIcons />
        </div>
      </div>
    </aside>
  );
}

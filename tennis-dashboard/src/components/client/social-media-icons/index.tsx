"use client";

import { colors } from "@/lib/theme";

/**
 * Client Component: Social Media Icons
 *
 * Why Client Component:
 * - Requires hover state interactivity
 * - Needs client-side event handling
 */
const SocialMediaIcons = (): React.ReactElement => {
  return (
    <div className="absolute left-4 sm:left-5 lg:left-[27px] top-[175px] sm:top-[195px] md:top-[210px] lg:top-[232px] flex h-4 w-auto sm:h-5 sm:w-[45px] gap-3 sm:gap-4 lg:gap-5 items-center">
      {/* Twitter Icon */}
      <a
        href="#"
        className="group flex-none h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200 hover:scale-110"
        aria-label="Twitter"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-200 fill-[#BACCFD] group-hover:fill-[#1657FF]"
        >
          <path d="M17.3334 5.42545C16.794 5.65977 16.207 5.82841 15.6025 5.89409C16.2302 5.51853 16.7002 4.92521 16.9244 4.22545C16.3354 4.57833 15.6902 4.82578 15.0173 4.95681C14.7361 4.65402 14.3959 4.4128 14.0181 4.24819C13.6402 4.08357 13.2328 3.99909 12.8211 4.00001C11.1554 4.00001 9.81583 5.35977 9.81583 7.02841C9.81583 7.26273 9.84403 7.49705 9.88986 7.72249C7.39577 7.59113 5.17135 6.39113 3.69253 4.55385C3.42307 5.01737 3.28186 5.54514 3.2836 6.08225C3.2836 7.13314 3.81415 8.05977 4.62318 8.60474C4.1464 8.58583 3.68079 8.45385 3.26421 8.21953V8.25681C3.26421 9.72841 4.2971 10.9479 5.6737 11.2284C5.41523 11.296 5.14933 11.3306 4.88229 11.3314C4.68664 11.3314 4.50156 11.3118 4.31473 11.2852C4.69545 12.4852 5.80413 13.3568 7.12432 13.3852C6.09144 14.2 4.79768 14.6793 3.39288 14.6793C3.14083 14.6793 2.90816 14.6704 2.66669 14.642C3.99922 15.503 5.58028 16 7.28296 16C12.8105 16 15.8351 11.3882 15.8351 7.38521C15.8351 7.25385 15.8351 7.12249 15.8263 6.99113C16.4115 6.55977 16.9244 6.02545 17.3334 5.42545Z" />
        </svg>
      </a>

      {/* Facebook Icon */}
      <a
        href="#"
        className="group flex-none h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200 hover:scale-110"
        aria-label="Facebook"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-200 fill-[#BACCFD] group-hover:fill-[#1657FF]"
        >
          <path d="M14.1425 10.3329L14.5575 7.43737H11.9635V5.55837C11.9635 4.76637 12.3257 3.99387 13.4876 3.99387H14.6667V1.52887C14.6667 1.52887 13.5968 1.33337 12.5736 1.33337C10.4375 1.33337 9.04129 2.72037 9.04129 5.23087V7.43787H6.66669V10.3334H9.04129V17.3334H11.9635V10.3334L14.1425 10.3329Z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialMediaIcons;


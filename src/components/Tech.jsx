import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Each 3D ball is its own WebGL canvas. Phones (especially Android Chrome)
// only allow a few WebGL contexts at once, so 13 balls crash the other 3D
// scenes. On small screens we show plain icons instead.
const MOBILE_QUERY = "(max-width: 767px)";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};

const Tech = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className='grid grid-cols-4 gap-x-3 gap-y-5'>
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className='flex flex-col items-center gap-2'
          >
            <div className='w-16 h-16 rounded-full bg-[#fff8eb] flex items-center justify-center shadow-card'>
              <img
                src={technology.icon}
                alt={technology.name}
                loading='lazy'
                className='w-9 h-9 object-contain'
              />
            </div>
            <p className='text-secondary text-[11px] text-center leading-tight'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

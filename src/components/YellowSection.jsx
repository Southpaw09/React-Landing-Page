import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

function YellowSection() {
  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      console.log(angle);
      setRotateAngle(angle - 180);
      console.log("Angle is " + rotateAngle);
    });
  });

  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      data-scroll-section
      className="w-full h-screen bg-yellow-300 relative py-20 flex justify-between items-center flex-col"
    >
      <h1 className="font-black text-[5vw] uppercase text-center text-zinc-900">
        Ready
        <br />
        to Start
        <br />
        The project?
      </h1>
      <div className="flex items-center flex-col">
        <button className="hover:bg-white hover:border-white transition-all duration-300 hover:text-zinc-800 uppercase font-light text-sm rounded-full border-zinc-700 flex items-center justify-center">
          Start the project <FaArrowAltCircleRight className="mx-2 my-1" />
        </button>
        <p className="text-zinc-900 text-center my-5">OR</p>
        <button className="hover:bg-white hover:border-white transition-all duration-300 hover:text-zinc-800 uppercase font-light text-sm rounded-full border-zinc-700 flex items-center justify-center bg-yellow-300 text-zinc-900">
          Hello@Ochi.design <FaArrowAltCircleRight className="mx-2 my-1" />
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[30%] flex gap-10">
        <div className="w-[10vw] h-[10vw] rounded-full bg-zinc-100 flex justify-center items-center">
          <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotateAngle}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="w-[10vw] h-[10vw] rounded-full bg-zinc-100 flex justify-center items-center">
          <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotateAngle}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YellowSection;

import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const [leftPupilPos, setLeftPupilPos] = useState({ x: 0, y: 0 });
  const [rightPupilPos, setRightPupilPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const updatePupilPosition = (eyeRef, setPupilPos) => {
        if (!eyeRef.current) return;

        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;

        // Max radius for the pupil to move inside the eye
        const maxRadius = rect.width * 0.2;

        // Calculate angle
        const angle = Math.atan2(deltaY, deltaX);

        // Limit movement
        const limitedX = Math.cos(angle) * maxRadius;
        const limitedY = Math.sin(angle) * maxRadius;

        setPupilPos({ x: limitedX, y: limitedY });
      };

      updatePupilPosition(leftEyeRef, setLeftPupilPos);
      updatePupilPosition(rightEyeRef, setRightPupilPos);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div data-scroll data-scroll-speed="-.7" className="w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
      <div  className="w-full h-full flex items-center justify-center">
        <div className="flex gap-10">
          {/* Left Eye */}
          <div
            ref={leftEyeRef}
            className="relative flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white"
          >
            <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-black">
              <div
                style={{
                  transform: `translate(${leftPupilPos.x}px, ${leftPupilPos.y}px)`,
                }}
                className="w-10 h-10 rounded-full bg-white"
              />
            </div>
          </div>

          {/* Right Eye */}
          <div
            ref={rightEyeRef}
            className="relative flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white"
          >
            <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-black">
              <div
                style={{
                  transform: `translate(${rightPupilPos.x}px, ${rightPupilPos.y}px)`,
                }}
                className="w-10 h-10 rounded-full bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
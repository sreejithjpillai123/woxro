"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./symphonia.css";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const cubesData = {
    "cube-1": {
        initial: { top: -55, left: 37.5, rotateX: 360, rotateY: -360, rotateZ: -48, z: -30000 },
        final: { top: 50, left: 15, rotateX: 0, rotateY: 3, rotateZ: 0, z: 0 },
    },
    "cube-2": {
        initial: { top: -35, left: 32.5, rotateX: -360, rotateY: 360, rotateZ: 90, z: -30000 },
        final: { top: 75, left: 25, rotateX: 1, rotateY: 2, rotateZ: 0, z: 0 },
    },
    "cube-3": {
        initial: { top: -65, left: 50, rotateX: -360, rotateY: -360, rotateZ: -180, z: -30000 },
        final: { top: 25, left: 25, rotateX: -1, rotateY: 2, rotateZ: 0, z: 0 },
    },
    "cube-4": {
        initial: { top: -35, left: 50, rotateX: -360, rotateY: -360, rotateZ: -180, z: -30000 },
        final: { top: 75, left: 75, rotateX: 1, rotateY: -2, rotateZ: 0, z: 0 },
    },
    "cube-5": {
        initial: { top: -55, left: 62.5, rotateX: 360, rotateY: 360, rotateZ: -135, z: -30000 },
        final: { top: 25, left: 75, rotateX: -1, rotateY: -2, rotateZ: 0, z: 0 },
    },
    "cube-6": {
        initial: { top: -35, left: 67.5, rotateX: -180, rotateY: -360, rotateZ: -180, z: -30000 },
        final: { top: 50, left: 85, rotateX: 0, rotateY: -3, rotateZ: 0, z: 0 },
    },
};

export default function SymphoniaLanding() {
    const stickyRef = useRef(null);
    const logoRef = useRef(null);
    const cubesContainerRef = useRef(null);
    const header1Ref = useRef(null);
    const header2Ref = useRef(null);

    useEffect(() => {
        const stickySection = stickyRef.current;
        const logo = logoRef.current;
        const cubesContainer = cubesContainerRef.current;
        const header1 = header1Ref.current;
        const header2 = header2Ref.current;

        // Add images to cube faces (like the reference website)
        const cubesFaces = document.querySelectorAll(".cube > div");
        const imageUrls = [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop", // Abstract blue
            "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=300&fit=crop", // Abstract teal
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&h=300&fit=crop", // Gradient pink
            "https://images.unsplash.com/photo-1557672199-6e8f06f8f45a?w=300&h=300&fit=crop", // Abstract purple
            "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=300&h=300&fit=crop", // Fluid orange
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=300&h=300&fit=crop", // Abstract yellow
            "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=300&h=300&fit=crop", // Green gradient
            "https://images.unsplash.com/photo-1609166214994-502d326bafee?w=300&h=300&fit=crop", // Blue waves
            "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=300&h=300&fit=crop", // Purple fluid
            "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=300&h=300&fit=crop", // Pink abstract
            "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=300&h=300&fit=crop", // Teal gradient
            "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=300&h=300&fit=crop", // Red abstract
            "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=300&fit=crop", // Cyan waves
            "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=300&h=300&fit=crop", // Magenta fluid
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop", // Space blue
            "https://images.unsplash.com/photo-1544306094-e2dcf9479da3?w=300&h=300&fit=crop", // Violet abstract
            "https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=300&h=300&fit=crop", // Orange gradient
            "https://images.unsplash.com/photo-1620641622253-54762e52ca00?w=300&h=300&fit=crop", // Green abstract
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop", // Blue purple
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=300&h=300&fit=crop", // Pink waves
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&h=300&fit=crop", // Abstract pink
            "https://images.unsplash.com/photo-1544306094-e2dcf9479da3?w=300&h=300&fit=crop", // Purple gradient
            "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=300&fit=crop", // Teal
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop", // Blue
            "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=300&h=300&fit=crop", // Orange
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=300&h=300&fit=crop", // Yellow
            "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=300&h=300&fit=crop", // Green
            "https://images.unsplash.com/photo-1609166214994-502d326bafee?w=300&h=300&fit=crop", // Cyan
            "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=300&h=300&fit=crop", // Purple
            "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=300&h=300&fit=crop", // Magenta
            "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=300&h=300&fit=crop", // Teal
            "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=300&h=300&fit=crop", // Red
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop", // Deep blue
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=300&h=300&fit=crop", // Pink
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop", // Blue purple
            "https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=300&h=300&fit=crop", // Amber
        ];

        cubesFaces.forEach((face, index) => {
            const img = document.createElement("img");
            img.src = imageUrls[index % imageUrls.length];
            img.alt = `Cube Image ${index + 1}`;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            face.appendChild(img);
        });

        const stickyHeight = window.innerHeight * 4;

        const interpolate = (start, end, progress) => {
            return start + (end - start) * progress;
        };

        ScrollTrigger.create({
            trigger: stickySection,
            start: "top top",
            end: `+=${stickyHeight}px`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
                const initialProgress = Math.min(self.progress * 20, 1);
                logo.style.filter = `blur(${interpolate(0, 20, initialProgress)}px)`;
                const logoOpacityProgress = self.progress >= 0.02 ? Math.min((self.progress - 0.02) * 100, 1) : 0;
                logo.style.opacity = 1 - logoOpacityProgress;

                const cubesOpacityProgress = self.progress > 0.01 ? Math.min((self.progress - 0.01) * 100, 1) : 0;
                cubesContainer.style.opacity = cubesOpacityProgress;

                const header1Progress = Math.min(self.progress * 2.5, 1);
                header1.style.transform = `translate(-50%, -50%) scale(${interpolate(1, 1.5, header1Progress)})`;
                header1.style.filter = `blur(${interpolate(0, 20, header1Progress)}px)`;
                header1.style.opacity = 1 - header1Progress;

                const header2StartProgress = (self.progress - 0.4) * 10;
                const header2Progress = Math.max(0, Math.min(header2StartProgress, 1));
                const header2scale = interpolate(0.75, 1, header2Progress);
                const header2Blur = interpolate(10, 0, header2Progress);

                header2.style.transform = `translate(-50%, -50%) scale(${header2scale})`;
                header2.style.filter = `blur(${header2Blur}px)`;
                header2.style.opacity = header2Progress;

                const firstPhaseProgress = Math.min(self.progress * 2, 1);
                const secondPhaseProgress = self.progress >= 0.5 ? (self.progress - 0.5) * 2 : 0;

                Object.entries(cubesData).forEach(([cubeClass, data]) => {
                    const cube = document.querySelector(`.${cubeClass}`);
                    if (!cube) return;

                    const { initial, final } = data;
                    const currentTop = interpolate(initial.top, final.top, firstPhaseProgress);
                    const currentLeft = interpolate(initial.left, final.left, firstPhaseProgress);
                    const currentRotateX = interpolate(initial.rotateX, final.rotateX, firstPhaseProgress);
                    const currentRotateY = interpolate(initial.rotateY, final.rotateY, firstPhaseProgress);
                    const currentRotateZ = interpolate(initial.rotateZ, final.rotateZ, firstPhaseProgress);
                    const currentZ = interpolate(initial.z, final.z, firstPhaseProgress);

                    let additionalRotation = 0;
                    if (cubeClass === "cube-2") {
                        additionalRotation = interpolate(0, 180, secondPhaseProgress);
                    } else if (cubeClass === "cube-4") {
                        additionalRotation = interpolate(0, -180, secondPhaseProgress);
                    }

                    cube.style.top = `${currentTop}%`;
                    cube.style.left = `${currentLeft}%`;
                    cube.style.transform = `
            translate3d(-50%, -50%, ${currentZ}px)
            rotateX(${currentRotateX}deg)
            rotateY(${currentRotateY + additionalRotation}deg)
            rotateZ(${currentRotateZ}deg)
          `;
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            <section className="sticky-section" ref={stickyRef}>
                {/* Logo */}
                <div className="logo" ref={logoRef}>
                    <div className="col">
                        <div className="block block-1"></div>
                        <div className="block block-2"></div>
                    </div>
                    <div className="col">
                        <div className="block block-3"></div>
                        <div className="block block-4"></div>
                    </div>
                    <div className="col">
                        <div className="block block-5"></div>
                        <div className="block block-6"></div>
                    </div>
                </div>

                {/* Cubes */}
                <div className="cubes" ref={cubesContainerRef}>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className={`cube cube-${num}`}>
                            <div className="front"></div>
                            <div className="back"></div>
                            <div className="right"></div>
                            <div className="left"></div>
                            <div className="top"></div>
                            <div className="bottom"></div>
                        </div>
                    ))}
                </div>

                {/* Header 1 */}
                <div className="header-1" ref={header1Ref}>
                    <h1>The first media company crafted for the digital first generation.</h1>
                </div>

                {/* Header 2 */}
                <div className="header-2" ref={header2Ref}>
                    <h2>Where innovation meets precision.</h2>
                    <p>
                        Symphonia unites visionary thinkers, creative architects, and analytical experts,
                        collaborating seamlessly to transform challenges into opportunities. Together, we deliver
                        tailored solutions that drive impact and inspire growth.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <h2>Your next section goes here.</h2>
            </section>
        </>
    );
}

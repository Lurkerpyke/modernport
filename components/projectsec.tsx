"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpoScaleEase } from "gsap/EasePack";
import { useRef } from "react";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ExpoScaleEase);

const ProjectSec = () => {

    const container = useRef(null)

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".panel",
            start: "top 10%",
            markers: true,
            onEnter: () => document.querySelector(".nav")?.classList.add("bg-red-500"),
            onLeaveBack: () => document.querySelector(".nav")?.classList.remove("bg-red-500"),
        });
    }, { scope: container });

    return (
        <section ref={container} id="section" className="relative">
            <div className="pt-16 h-[200vh]">
                <div className="nav sticky top-16 bg-pink-300 text-black transition-colors duration-300">
                    <ul className="m-0 p-[40px] flex justify-end gap-2">
                        <li>contact</li>
                        <li>about</li>
                        <li>home</li>
                    </ul>
                </div>
                <div className="panel h-[50vh] bg-amber-200"></div>
            </div>
        </section>
    );
};

export default ProjectSec;

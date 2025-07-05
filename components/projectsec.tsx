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
        
    }, { scope: container });

    return (
        <section ref={container} id="section" className="relative">

        </section>
    );
};

export default ProjectSec;

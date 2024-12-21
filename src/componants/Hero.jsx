import React, { useEffect, useRef } from "react";
import ModelCanvas from './ModelCanvas'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef()
    const tef = useRef()
    return (
        <div className="h-dvh w-dvw overflow-hidden relative bg-slate-950">
            <div id="heroContent" className="text-white flex flex-col justify-center items-center h-full bg-transparent w-[50%] absolute z-20" ref={ref}>
                <h1 className="text-6xl font-bold">IPhone assembly</h1>
                <p>Get your iPhone 18 today, At your nearest apple store</p>
            </div>
            <div id="heroContent" className="text-white flex flex-col justify-center items-center h-full bg-transparent w-[50%] absolute right-0 z-20" ref={tef}>
                <h1 className="text-6xl font-bold">IPhone assembly</h1>
                <p>Get your iPhone 18 today, At your nearest apple store</p>
            </div>
            <ModelCanvas lContentRef={ref} rContentRef={tef}/>
        </div>
    )
}

export default Hero
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import IPhone from "./IPhone"
import { useRef, useState, useEffect } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const ModelCanvas = ({ lContentRef }) => {
    const ref = useRef()
    const [width, setWidth] = useState(null)
    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                // Get the width of the canvas element
                setWidth(ref.current.clientWidth);
            }
        };

        // Initialize the width on mount
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#control",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: true,
                markers: true,
            },
        });

        // Add animations to the timeline
        tl.fromTo(
            "#idk",
            { xPercent: 0 },
            { xPercent: -50 }
        )
            .fromTo(
                lContentRef.current,
                { yPercent: 0 },
                {
                    delay: .05,
                    yPercent: -30,
                    opacity: 0
                },
                "<"
            );

        // Clean up on component unmount
        return () => {
            tl.kill();
        };
    }, []);
    return (
        <>
            <Canvas className="w-full h-full bg-slate-950 absolute z-10 top-0 left-[25%]" camera={{ position: [0, 0, .2], fov: 65 }} id="idk" ref={ref}>
                <Environment preset="city" backgroundIntensity={0} environmentIntensity={0.7} />
                {/* <OrbitControls  /> */}
                <ambientLight intensity={0.5} />
                <IPhone w={width} />
            </Canvas>
            <div className="h-[3000px] z-0 absolute top-0" id="control"></div>
        </>
    )
}

export default ModelCanvas
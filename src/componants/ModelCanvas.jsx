import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import IPhone from "./IPhone"
import { useRef, useState, useEffect } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const ModelCanvas = ({ lContentRef, rContentRef, mef }) => {
    const [timeLine, setLine] = useState(null)
    const ref = useRef()
    const orbit = useRef()
    const [width, setWidth] = useState(null)
    const [controls, setControls] = useState(false)
    console.log(orbit.current);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth(ref.current.clientWidth);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
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
                    opacity: 0,
                },
                "<"
            )
            .fromTo(rContentRef.current, {
                yPercent: 50,
                opacity: 0
            },
                {
                    delay: .1,
                    yPercent: 0,
                    opacity: 1
                }, "<")
            ;

        setLine(tl)

        const fl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: mef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: true,
                    markers: true,
                },
            }
        )


        fl.fromTo("#idk", {},
            {
                xPercent: -25,

                onComplete: () => {
                    setControls(true)
                }
            }, "<"
        )

        fl.fromTo(rContentRef.current,
            {},
            {
                opacity: 0,
                display: "none"
            }
        )
        fl.fromTo(lContentRef.current,
            {},
            {
                opacity: 0,
                display: "none"
            }
        )
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <>
            <div className="flex flex-col h-full">
                <Canvas className="w-full h-dvh bg-slate-950 z-10 top-0 left-[25%]" camera={{ position: [0, 0, .2], fov: 65 }} id="idk" ref={ref}>
                    <Environment preset="city" backgroundIntensity={0} environmentIntensity={0.7} />
                    <OrbitControls enableZoom={controls} ref={orbit}/>
                    <ambientLight intensity={0.5} />
                    <IPhone w={width} timeLine={timeLine} tef={mef} orbit={orbit}/>
                </Canvas>
                <div className="h-[3000px] z-0 absolute bg-slate-400 top-0 left-0" id="control"></div>
            </div>

        </>
    )
}

export default ModelCanvas
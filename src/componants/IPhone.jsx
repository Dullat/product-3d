import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Model = (props, { timeLine }) => {
    const { nodes, materials } = useGLTF("/models/scene.glb")

    const texture = useTexture("/assets/yellow.jpg")
    const ref = useRef()

    // useFrame((state, delta) => {
    //     ref.current.rotation.y -= delta * 0.1
    // })

    useEffect(() => {
        props.timeLine.fromTo(
            ref.current.rotation,
            {
                y: 0
            },
            {
                y: Math.PI * 1.25,
                x: Math.PI * .2,
                z: Math.PI * -.1
            }
            , "<"
        )
            .fromTo(
                ref.current.position,
                {
                    y: 0
                },
                {
                    y: -.01
                }
                , "<"
            )

        // second

        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            ref.current.rotation,
            {
            },
            {
                y: 0,
                x: 0,
                z: 0,
                scrollTrigger: {
                    trigger: props.tef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: true,
                    markers: true,
                },
            }
        )

        gsap.fromTo(
            ref.current.rotation,
            {
            },
            {
                y: 0,
                x: 0,
                z: 0,
                scrollTrigger: {
                    trigger: props.tef.current,
                    start: "bottom bottom",
                    end: "top top",
                    scrub: true,
                    pin: true,
                    markers: true,
                },
            }
        )

    }, [])


    useEffect(() => {
        Object.entries(materials).map((material) => {
            if (
                material[0] !== "zFdeDaGNRwzccye" &&
                material[0] !== "ujsvqBWRMnqdwPx" &&
                material[0] !== "hUlRcbieVuIiOXG" &&
                material[0] !== "jlzuBkUzuJqgiAK" &&
                material[0] !== "xNrofRCqOXXHVZt"
            ) {
                material[1].color = new THREE.Color("#8F8A81")
            }
            material[1].needsUpdate = true
        })
    }, [materials, props.item])

    return (
        <group {...props} dispose={null} ref={ref}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ttmRoLdJipiIOmf.geometry}
                material={materials.hUlRcbieVuIiOXG}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DjsDkGiopeiEJZK.geometry}
                material={materials.PaletteMaterial001}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.buRWvyqhBBgcJFo.geometry}
                material={materials.PaletteMaterial002}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
                material={materials.dxCVrUCvYhjVxqy}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
                material={materials.MHFGNLrDQbTNima}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.QvGDcbDApaGssma.geometry}
                material={materials.kUhjpatHUvkBwfM}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.vFwJFNASGvEHWhs.geometry}
                material={materials.RJoymvEsaIItifI}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.evAxFwhaQUwXuua.geometry}
                material={materials.KSIxMqttXxxmOYl}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.USxQiqZgxHbRvqB.geometry}
                material={materials.mcPrzcBUcdqUybC}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TvgBVmqNmSrFVfW.geometry}
                material={materials.pIhYLPqiSQOZTjn}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.GuYJryuYunhpphO.geometry}
                material={materials.eShKpuMNVJTRrgg}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pvdHknDTGDzVpwc.geometry}
                material={materials.xdyiJLYTYRfJffH}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.CfghdUoyzvwzIum.geometry}
                material={materials.jpGaQNgTtEGkTfo}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DjdhycfQYjKMDyn.geometry}
                material={materials.ujsvqBWRMnqdwPx}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.usFLmqcyrnltBUr.geometry}
                material={materials.sxNzrmuTqVeaXdg}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.xXDHkMplTIDAXLN.geometry}
                material={materials.pIJKfZsazmcpEiU}
                scale={0.01}
            >
                <meshStandardMaterial roughness={1} map={texture} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.vELORlCJixqPHsZ.geometry}
                material={materials.zFdeDaGNRwzccye}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.EbQGKrWAqhBHiMv.geometry}
                material={materials.TBLSREBUyLMVtJa}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.EddVrWkqZTlvmci.geometry}
                material={materials.xNrofRCqOXXHVZt}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.KSWlaxBcnPDpFCs.geometry}
                material={materials.yQQySPTfbEJufve}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TakBsdEjEytCAMK.geometry}
                material={materials.PaletteMaterial003}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.IykfmVvLplTsTEW.geometry}
                material={materials.PaletteMaterial004}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wLfSXtbwRlBrwof.geometry}
                material={materials.oZRkkORNzkufnGD}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.WJwwVjsahIXbJpU.geometry}
                material={materials.yhcAXNGcJWCqtIS}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.YfrJNXgMvGOAfzz.geometry}
                material={materials.bCgzXjHOanGdTFV}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DCLCbjzqejuvsqH.geometry}
                material={materials.vhaEJjZoqGtyLdo}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.CdalkzDVnwgdEhS.geometry}
                material={materials.jlzuBkUzuJqgiAK}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NtjcIgolNGgYlCg.geometry}
                material={materials.PpwUTnTFZJXxCoE}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pXBNoLiaMwsDHRF.geometry}
                material={materials.yiDkEwDSyEhavuP}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.IkoiNqATMVoZFKD.geometry}
                material={materials.hiVunnLeAHkwGEo}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rqgRAGHOwnuBypi.geometry}
                material={materials.HGhEhpqSBZRnjHC}
                scale={0.01}
            />
        </group>
    )
}

export default Model

useGLTF.preload("/models/scene.glb")

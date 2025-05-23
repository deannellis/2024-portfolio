import React, { useState, Suspense, useMemo, useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useCursor } from "@react-three/drei";
import { AsciiEffect } from "three-stdlib";
import Model from "./Model.jsx";

const AsciiAnimation = () => {
    return (
        <div
            style={{ backgroundColor: "#fff" }}
            className="ascii"
            title="Click and Drag to Rotate"
        >
            <Canvas>
                <Suspense fallback={null}>
                    <color attach="background" args={["black"]} />
                    <RotatingModel />
                    <OrbitControls enableZoom={false} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                    />
                    <pointLight position={[-10, -10, -10]} />
                    <AsciiRenderer invert />
                </Suspense>
            </Canvas>
        </div>
    );
};

const RotatingModel = () => {
    const ref = useRef();
    const groupRef = useRef();
    const [clicked, click] = useState(false);
    const [hovered, hover] = useState(false);
    useCursor(hovered);
    useFrame(
        (state, delta) =>
            (groupRef.current.rotation.y = groupRef.current.rotation.y +=
                delta / 2)
    );
    return (
        <group ref={groupRef}>
            <mesh
                ref={ref}
                scale={clicked ? 2 : 1.5}
                onClick={() => click(!clicked)}
                onPointerOver={() => hover(true)}
                onPointerOut={() => hover(false)}
                position={[1.75, -1.25, 1]}
            >
                <Model />
            </mesh>
        </group>
    );
};

function AsciiRenderer({
    renderIndex = 1,
    characters = " .:-+*=%@#",
    ...options
}) {
    // Reactive state
    const { size, gl, scene, camera } = useThree();
    const storedColorMode =
        localStorage.getItem("themeIsLight") !== null
            ? localStorage.getItem("themeIsLight") === "true"
            : false;

    // Create effect
    const effect = useMemo(() => {
        const themeIsLight = storedColorMode;
        const effect = new AsciiEffect(gl, characters, options);
        if (themeIsLight) {
            effect.domElement.style.color = "white";
            effect.domElement.style.backgroundColor = "black";
        } else {
            effect.domElement.style.color = "black";
            effect.domElement.style.backgroundColor = "white";
        }
        effect.domElement.style.position = "absolute";
        effect.domElement.style.top = "0px";
        effect.domElement.style.left = "0px";
        effect.domElement.style.pointerEvents = "none";
        effect.domElement.style.cursor = "pointer";
        return effect;
    }, [characters, options.invert]);

    // Append on mount, remove on unmount
    useEffect(() => {
        const themeIsLight = storedColorMode;
        gl.domElement.parentNode.appendChild(effect.domElement);
        return () => gl.domElement.parentNode.removeChild(effect.domElement);
    }, [effect]);

    // Set size
    useEffect(() => {
        effect.setSize(size.width, size.height);
    }, [effect, size]);

    useEffect(() => {
        const themeIsLight = storedColorMode;
        if (themeIsLight) {
            effect.domElement.style.color = "white";
            effect.domElement.style.backgroundColor = "black";
        } else {
            effect.domElement.style.color = "black";
            effect.domElement.style.backgroundColor = "white";
        }
    }, [localStorage.getItem("themeIsLight")]);

    // Take over render-loop (that is what the index is for)
    useFrame((state) => {
        effect.render(scene, camera);
    }, renderIndex);

    // This component returns nothing, it has no view, it is a purely logical
}

export default AsciiAnimation;

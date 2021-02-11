import ParticleImage, {
    ParticleOptions,
    Vector,
    forces,
    ParticleForce
} from "react-particle-image";

export default function LandingAnimation() {
    const particleOptions: ParticleOptions = {
        filter: ({ x, y, image }) => {
            // Get pixel
            const pixel = image.get(x, y);
            // Make a particle for this pixel if blue > 50 (range 0-255)
            return pixel.b > 65;
        },
        color: ({ x, y, image }) => "#99a1a6",
        radius: () => Math.random() * 0.5 + 0.5,
        mass: () => 10,
        friction: () => 0.25,
    };

    const motionForce = (x: number, y: number): ParticleForce => {
        return forces.disturbance(x, y, 3);
    };

    return (
        <ParticleImage
            src={"/images/other/arno-landing.png"}
            scale={0.6}
            entropy={5}
            maxParticles={22500}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            backgroundColor="#151618"
        />
    );

}
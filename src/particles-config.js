export const particles_config = {
    fpsLimit: 30,
    particles: {
        color: {
            value: "#ffffff",
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "destroy",
            },
            random: true,
            speed: .1,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 200,
            },
            value: 90,
        },
        opacity: {
            value: {
                max: .7,
                min: .4,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: .1, max: 1 },
        },
    },
    detectRetina: true,
};
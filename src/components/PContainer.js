import { particles_config } from '../particles-config';
import Particles from "react-particles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

export function PContainer() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="particlesbox">
            <Particles id="starfield" init={particlesInit} options={particles_config} />
        </div>
    );
}
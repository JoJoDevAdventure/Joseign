import { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';



const StarsContainer = () => {
  const particlesInit = useCallback(async(engine) => {
    await loadSlim(engine);
  },[]);

  const particlesLoaded = useCallback(async () => {}, []);

  return <Particles
  className="absolute inset-0 w-full h-full z-0"
  id='tsparticles'
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
    fullScreen: {enable: false},
    background: {
      color: {
        value: ''
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode:'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 90,
        },
        repulse: {
          distance:100,
          duration: 0.4,
        }
      }
    },
    particles: {
      color: {
        value: '#ffffff'
      },
      collisions: {
        enable: false,
      },
      move: {
        enable: true,
        direction: 'none',
        random: true,
        speed: 0.6,
        straight: false,
        outModes: {
          default: 'out'
        }
      },
      number: {
        density: {
          enable:true,
          area: 800,
        },
        value: 40
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 0.7, max: 2.4 }
      },
    },
    detectRetina: true,
  }}
  />
};

export default StarsContainer;

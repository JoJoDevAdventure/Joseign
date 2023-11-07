import { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';



const ParticlesContainer = () => {
  const particlesInit = useCallback(async(engine) => {
    await loadFull(engine);
  },[]);

  const particlesLoaded = useCallback(async () => {}, []);

  return <Particles
  className='w-full absolute translate-z-0 z-0 left-0 bottom-0 top-0'
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
        value: '#B63E96'
      },
      links : {
        color: '#B63E96',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction:'none',
        enable: true,
        outModes: {
          default:'bounce'
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable:true,
          area: 800,
        },
        value: 80
      },
      opacity:{
        value: 0.5,
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: {min: 1, max: 5}
      },
    },
    detectRetina: true,
  }}
  />
};

export default ParticlesContainer;

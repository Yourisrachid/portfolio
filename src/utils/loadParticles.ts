// src/utils/loadParticles.ts
export function loadParticlesJS(tagId: string, configPath: string) {
    fetch(configPath)
      .then((response) => response.json())
      .then((config) => {
        if (window.particlesJS) {
          window.particlesJS(tagId, config);
        } else {
          console.error('particlesJS is not defined.');
        }
      })
      .catch((error) => console.error('Error loading particles config:', error));
  }
  
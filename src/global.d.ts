// src/global.d.ts
declare global {
    interface Window {
      particlesJS: (tagId: string, params: object) => void;
    }
  }
  
  export {};
  
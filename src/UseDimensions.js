import { useRef, useEffect, useState } from 'react';

// Hook personalizado que devuelve las dimensiones y la ref
export const useDimensions = () => {
  const elementRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, defined: false });

  useEffect(() => {
    // Si el navegador no soporta ResizeObserver, salimos
    if (!window.ResizeObserver) {
      console.warn("ResizeObserver no está soportado en este navegador.");
      return;
    }

    const resizeObserver = new ResizeObserver(entries => {
      // Esta función se llama cada vez que el elemento cambia de tamaño
      for (let entry of entries) {
        // Usamos entry.target para acceder al nodo DOM
        const { offsetWidth, offsetHeight } = entry.target;
        
        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
          defined: offsetWidth > 0 && offsetHeight > 0
        });
        
        console.log('Dimensiones actualizadas (F12 Mobile Emulator change):', { width: offsetWidth, height: offsetHeight });
      }
    });

    if (elementRef.current) {
      // Comienza a observar el elemento referenciado
      resizeObserver.observe(elementRef.current);
    }

    // Limpieza: deja de observar cuando el componente se desmonta
    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
    };
  }, []); // Dependencias vacías para que se configure solo una vez

  return { elementRef, dimensions };
};

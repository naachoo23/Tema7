const tiemposPorEquipo = participantes.reduce(
    (acc, elem) => ({
      ...acc,
      [elem.equipo]: (acc[elem.equipo] || 0) + (elem.min * 60 + elem.seg), // Acumula el tiempo en segundos
    }),
    {}
  );
  
  // Convertir los tiempos de segundos a minutos y segundos
  const resultadoSinBonificacion = Object.entries(tiemposPorEquipo).reduce(
    (acc, [equipo, totalSegundos]) => ({
      ...acc,
      [equipo]: {
        min: Math.floor(totalSegundos / 60),
        seg: totalSegundos % 60,
      },
    }),
    {}
  );
  
  console.log("Sin bonificación:", resultadoSinBonificacion);
  
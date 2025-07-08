const { promedio, desviacionEstandar } = require('@arianjc2002/c4-statistic-package/statistic');
const { generarGrafico } = require('@arianjc2002/c4-statistic-package/graphics');

const datos = [12, 25, 33, 48, 60];
const etiquetas = ['Ene', 'Feb', 'Mar', 'Abr', 'May'];

console.log('Promedio:', promedio(datos));
console.log('Desviación estándar:', desviacionEstandar(datos));

generarGrafico('./public/grafica.png', etiquetas, datos).then(() => {
    console.log('Gráfica generada exitosamente.');
});

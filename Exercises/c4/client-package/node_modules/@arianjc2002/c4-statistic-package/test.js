const { promedio, desviacionEstandar } = require('./statistic');
const { generarGrafico } = require('./graphics');

const datos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log('Datos:', datos);
console.log('Promedio:', promedio(datos));
console.log('Desviación Estándar:', desviacionEstandar(datos));

generarGrafico('grafico.png', ['A', 'B', 'C', 'D', 'E'],datos).then(() => {
  console.log('Gráfico generado.');
});
function promedio(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Input must be a non-empty array");
    }
    
    if (!arr.every(num => typeof num === 'number')) {
        throw new Error("Todos los elementos del arreglo deben ser números");
    }
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function desviacionEstandar(arr) {
    const media = promedio(arr);
    const sumaCuadrados = arr.reduce((acc, val) => acc + (val - media) ** 2, 0);
    return Math.sqrt(sumaCuadrados / arr.length);
}

module.exports = {
    promedio,
    desviacionEstandar
};
# Proyecto Calculadora

Una implementación simple de una calculadora en C# que proporciona operaciones aritméticas básicas.

## Características

- Suma
- Resta
- Multiplicación
- División (con protección contra división por cero)

## Ejemplos de Uso

```csharp
Calculadora calc = new();

// Suma
double suma = calc.Sumar(2, 3);      // Devuelve 5

// Resta
double diferencia = calc.Restar(5, 2);    // Devuelve 3

// Multiplicación
double producto = calc.Multiplicar(4, 3);  // Devuelve 12

// División
double cociente = calc.Dividir(6, 3);     // Devuelve 2
```

## Manejo de Errores

La operación de división incluye protección contra la división por cero, lanzando una excepción `DivideByZeroException` si se intenta realizar.

## Requisitos

- .NET Core 9.0 o superior
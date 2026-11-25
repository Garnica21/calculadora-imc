/*
  Proyecto: Calculadora de índice de masa corporal
  Autor: Marco Antonio Guzmán Garnica
  Descripción: Valida el peso y la estatura, calcula el IMC y actualiza
  el resultado y su categoría cada vez que cambia uno de los campos.
*/
const formulario = document.getElementById("formulario-imc");
const campoPeso = document.getElementById("peso");
const campoEstatura = document.getElementById("estatura");
const resultado = document.getElementById("resultado");

function calcularIMC() {
  const peso = campoPeso.valueAsNumber;
  const estatura = campoEstatura.valueAsNumber;

  if (!Number.isFinite(peso) || !Number.isFinite(estatura) ||
      peso <= 0 || estatura <= 0) {
    resultado.textContent = "Ingresa un peso y una estatura mayores que cero.";
    return;
  }

  const imc = peso / (estatura ** 2);
  let categoria;

  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc < 25) {
    categoria = "Peso saludable";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidad";
  }

  resultado.textContent = `IMC: ${imc.toFixed(2)} — ${categoria}`;
}

formulario.addEventListener("input", calcularIMC);
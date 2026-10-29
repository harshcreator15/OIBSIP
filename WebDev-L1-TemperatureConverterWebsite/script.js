const form = document.getElementById('converter-form');
const temperatureInput = document.getElementById('temperature');
const inputUnit = document.getElementById('input-unit');
const errorMessage = document.getElementById('input-error');
const resetButton = document.getElementById('reset-button');
const liveBadge = document.querySelector('.live-badge');
const units = ['C', 'F', 'K'];

const unitNames = {
  C: { name: 'Celsius', symbol: '°C', note: 'Metric temperature scale' },
  F: { name: 'Fahrenheit', symbol: '°F', note: 'Common in the United States' },
  K: { name: 'Kelvin', symbol: 'K', note: 'Scientific absolute scale' }
};

function toCelsius(value, unit) {
  if (unit === 'C') return value;
  if (unit === 'F') return (value - 32) * 5 / 9;
  return value - 273.15;
}

function fromCelsius(celsius, unit) {
  if (unit === 'C') return celsius;
  if (unit === 'F') return (celsius * 9 / 5) + 32;
  return celsius + 273.15;
}

function formatValue(value) {
  // Avoid displaying negative zero from floating-point rounding.
  const rounded = Math.abs(value) < 0.005 ? 0 : value;
  return rounded.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}

function setError(message) {
  errorMessage.textContent = message;
  temperatureInput.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function convertTemperature(event) {
  if (event) event.preventDefault();
  setError('');

  const rawValue = temperatureInput.value.trim();
  if (rawValue === '') {
    setError('Please enter a temperature value.');
    temperatureInput.focus();
    return;
  }

  const value = Number(rawValue);
  if (!Number.isFinite(value)) {
    setError('Please enter a valid numeric temperature.');
    temperatureInput.focus();
    return;
  }

  const unit = inputUnit.value;
  const celsius = toCelsius(value, unit);

  // Absolute zero is 0 K / -273.15 °C / -459.67 °F.
  if (celsius < -273.15 - 1e-10) {
    const minimums = {
      C: '−273.15 °C',
      F: '−459.67 °F',
      K: '0 K'
    };
    setError(`That temperature is below absolute zero. The minimum is ${minimums[unit]}.`);
    temperatureInput.focus();
    return;
  }

  const normalizedCelsius = Math.abs(celsius + 273.15) < 1e-10 ? -273.15 : celsius;

  units.forEach((targetUnit) => {
    const converted = fromCelsius(normalizedCelsius, targetUnit);
    const valueElement = document.getElementById(`result-${targetUnit}`);
    valueElement.innerHTML = `${formatValue(converted)}<small> ${unitNames[targetUnit].symbol}</small>`;
    const card = document.querySelector(`.result-card[data-unit="${targetUnit}"]`);
    card.classList.toggle('featured', targetUnit === unit);
    document.getElementById(`note-${targetUnit}`).textContent =
      targetUnit === unit ? 'Your original temperature' : unitNames[targetUnit].note;
  });

  liveBadge.innerHTML = '<span></span> UPDATED';
  liveBadge.style.borderColor = 'rgba(124,247,197,.3)';
}

function resetConverter() {
  form.reset();
  setError('');
  units.forEach((unit) => {
    document.getElementById(`result-${unit}`).innerHTML = `—<small> ${unitNames[unit].symbol}</small>`;
    document.getElementById(`note-${unit}`).textContent = unitNames[unit].note;
    document.querySelector(`.result-card[data-unit="${unit}"]`).classList.toggle('featured', unit === 'C');
  });
  liveBadge.innerHTML = '<span></span> READY';
  temperatureInput.focus();
}

form.addEventListener('submit', convertTemperature);
resetButton.addEventListener('click', resetConverter);
temperatureInput.addEventListener('input', () => {
  if (errorMessage.textContent) setError('');
});
inputUnit.addEventListener('change', () => {
  if (temperatureInput.value.trim() !== '') convertTemperature();
});
document.getElementById('year').textContent = new Date().getFullYear();

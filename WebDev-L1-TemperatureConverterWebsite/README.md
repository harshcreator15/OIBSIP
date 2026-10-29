# Thermo — Temperature Converter

A responsive temperature converter built with vanilla HTML, CSS, and JavaScript for the Oasis Infobyte Task 3 brief.

## Features
- Convert Celsius, Fahrenheit, and Kelvin.
- Displays all three scales simultaneously.
- Numeric input validation and friendly error messages.
- Rejects temperatures below absolute zero.
- Reset control and automatic recalculation when the input unit changes.
- Responsive layout for mobile, tablet, and desktop.
- No frameworks or build tools required.

## Run locally
1. Extract the project folder.
2. Open `index.html` in a modern browser.
3. Enter a temperature, choose the input unit, and select **Convert temperature**.

Internet access is only needed to load the optional Google Fonts; the converter itself works offline.

## Files
- `index.html` — page structure and accessible form
- `style.css` — responsive styling
- `script.js` — conversion logic and validation

## Conversion formulas
- Fahrenheit = (Celsius × 9/5) + 32
- Celsius = (Fahrenheit − 32) × 5/9
- Kelvin = Celsius + 273.15

## Test cases
| Input | Unit | Expected outputs |
|---:|---|---|
| 0 | Celsius | 0 °C, 32 °F, 273.15 K |
| 100 | Celsius | 100 °C, 212 °F, 373.15 K |
| 32 | Fahrenheit | 0 °C, 32 °F, 273.15 K |
| 273.15 | Kelvin | 0 °C, 32 °F, 273.15 K |
| -300 | Celsius | Error: below absolute zero |
| empty | any | Error: enter a temperature |

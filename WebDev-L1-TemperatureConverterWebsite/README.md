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

## Screenshots

### Desktop Version
<img width="1905" height="963" alt="Screenshot (1163)" src="https://github.com/user-attachments/assets/18d9d78c-c106-4024-b5df-8df0aa5c0b50" />
<img width="1896" height="970" alt="Screenshot (1167)" src="https://github.com/user-attachments/assets/a33edffb-4f21-461f-878b-5e7459b76658" />

### Mobile Version 
<img width="444" height="859" alt="Screenshot (1165)" src="https://github.com/user-attachments/assets/661bafec-7c9d-4101-83ca-efe91a97f949" />
<img width="444" height="864" alt="Screenshot (1166)" src="https://github.com/user-attachments/assets/f92e93ee-e6b3-4031-8ada-876c6eeb1130" />


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

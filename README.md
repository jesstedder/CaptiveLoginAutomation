# Captive Login Automation

This project automates the login process for a captive portal using Puppeteer, a Node.js library for controlling headless browsers.

## Features
- Launches a Chromium browser instance.
- Navigates to a specified URL.
- Automates form filling and button clicks to log in.
- Waits for specific elements to ensure the process completes successfully.

## Prerequisites
- Node.js installed on your system.
- npm (Node Package Manager) installed.

## Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd CaptiveLoginFhlb
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage
1. Run the script using Node.js:
   ```bash
   node index.js
   ```
2. The script will launch a browser, navigate to the specified URL, and perform the automated login process.

## Notes
- Ensure the target URL and selectors in the script match the actual captive portal you are automating.
- Modify the email and other input values in `index.js` as needed for your use case.

## License
This project is licensed under the MIT License.
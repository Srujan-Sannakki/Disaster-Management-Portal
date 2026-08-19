How to Run the Disaster Management Portal Prototype

This project is built using React.js. Please follow these steps to run the portal on your local computer.

Prerequisites

You need Node.js installed on your computer to run this software.

Check if you have it by opening a terminal/command prompt and typing: node -v

If you don't have it, download and install the "LTS" version from here: https://nodejs.org/

Steps to Run

1. Unzip the Folder

Extract the zipped project folder to your desktop or documents.

2. Open the Terminal

Windows: Open the project folder, click on the address bar at the top, type cmd, and press Enter.

Mac: Right-click the folder and select "New Terminal at Folder" (or open Terminal and cd into the folder).

3. Install Dependencies

Type the following command and press Enter. This downloads the necessary libraries (it may take a minute).

npm create vite@latest disaster-portal -- --template react

npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer



4. Start the Portal

Type the following command and press Enter:

npm run dev


5. Open in Browser

You will see a link in the terminal (usually http://localhost:5173/).

Hold Ctrl (Windows) or Cmd (Mac) and click the link.

Or, open your web browser (Chrome/Edge) and type http://localhost:5173.

Notes for Presentation

The portal is a Prototype. It demonstrates the flow, navigation, and layout requested in the flowchart.

To stop the application, press Ctrl + C in the terminal window.
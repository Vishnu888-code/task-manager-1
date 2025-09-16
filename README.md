# task-manager-1
a simple task list application where users can add, edit, delete, and mark tasks as complete. This will test your ability to work with both frontend and backend technologies.
Setup Instructions
Prerequisites
Install Node.js (version 12 or higher recommended)

A code editor like Visual Studio Code.
1.Installation
2.Clone or download the project files to your local machine.

In the project root directory, open a terminal and install the necessary dependencies by running:

..bash
..npm install
This will install:
express
cors

#.Running the Backend Server
Run the following command in the terminal from the project root folder:
node server.js
The backend server will start and listen on port 3000.

#Running the Frontend
The public folder contains the frontend files (index.html, styles.css, script.js).

Since the backend serves these static files automatically, just open your web browser and navigate to:

http://localhost:3000/
Your task list app will load and be fully functional.

#Using the Application
Add tasks with the input field and Add Task button.
Edit tasks using the Edit button.
Mark tasks complete or incomplete using Complete / Undo button.
Delete tasks with the Delete button.
Task data is stored in memory and resets when the backend server restarts.

#Troubleshooting
Ensure the backend server is running before opening the frontend page.
If the frontend does not load tasks, check the console for errors.
Confirm the backend is running on http://localhost:3000.
The API base URL is set as /tasks (relative to the frontend in this setup).
Make sure your browser is not blocking any scripts or AJAX calls.

#Customization and Development
Modify styles in public/styles.css.
Edit UI in public/index.html.
Extend backend functionality in server.js.
For persistent storage, integrate a database (e.g., MongoDB).

//This setup allows both frontend and backend to run from the same Express server, providing a seamless development experience.

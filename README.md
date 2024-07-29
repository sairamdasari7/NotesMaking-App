# Notes App

A simple notes application built using Node.js, TypeScript, and MariaDB. This application allows users to save, list, and delete notes. It includes user authentication and various features like content sync, tagging, and archiving.

## Features

- User authentication
- Create, read, update, and delete notes
- Tag notes with multiple tags (up to 9)
- View notes by special labels
- Archive and trash notes
- Responsive design for various screen sizes
- Reminder view (bonus feature)
- Visual design with gradients and color schemes

## Tech Stack

- Backend: Node.js, TypeScript, MariaDB
- Frontend: HTML, CSS, JavaScript
- Libraries: Express, body-parser, cors, dotenv
- Development: ts-node, TypeScript


## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MariaDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the src directory and add your environment variables:
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=notesdb

4. Set up the database:
   ```bash
   CREATE DATABASE notesdb;
   USE notesdb;
   CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    note TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

###  Running the Application
  1. Start the application:

    ```bash
    npm run start
  
  2. Open your browser and navigate to http://localhost:3000

### Deployment
  To deploy the application, you can use services like Render or Heroku. Ensure your environment variables are properly set in the deployment environment.

### Contributing
  Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

### License
  This project is licensed under the MIT License.
  
This `README.md` file includes a basic overview of the project, its features, tech stack, installation instructions, and information on running and deploying the application. Feel free to customize it further based on your specific project requirements.



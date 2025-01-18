# ToDo List Backend

A Node.js backend application for managing todo tasks.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Start MongoDB server locally

3. Start the application:
   - Development mode: `npm run dev`
   - Production mode: `npm start`

4. Run tests:
   ```
   npm test
   ```

## API Endpoints

- GET /api/tasks - Get all tasks
- POST /api/task - Create a new task
- PUT /api/task/:id - Update a task
- DELETE /api/task/:id - Delete a task

## Environment Variables

Create a .env file with:
- PORT=5000
- MONGODB_URI=mongodb+srv://abhilash:abhilash1234@cluster10.kmnbete.mongodb.net/todolist

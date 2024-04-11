# Simple React Form Backend

This repository contains the backend implementation for the Simple React Form, providing API endpoints for managing form entries. It's built with Node.js, Express.js, CORS, Mongoose, and utilizes good practices including error handling and a structured file organization.

## Live Backend URL

You can access the live backend at the following URL:

[Live Backend](https://contact-form-backend-x6uy.onrender.com/api/v1/contact)

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web application framework for Node.js, simplifying API development.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution to model application data.
- **HTTP Status Codes**: Standardized status codes for communicating the result of HTTP requests.

## API Endpoints

### Base URL

The base URL for accessing the API is:

```
https://contact-form-backend-x6uy.onrender.com/api/v1/contact
```

### GET /api/v1/contact

- **Description**: Retrieves all entries from the contact form.

### POST /api/v1/contact

- **Description**: Creates a new entry in the contact form.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "dialcode": "+1",
    "phone": "1234567890"
  }
  ```

### PATCH /api/v1/contact

- **Description**: Updates an existing entry in the contact form.
- **Request Body**:
  ```json
  {
    "id": "entry_id",
    "update": "email",
    "email": "newemail@example.com"
  }
  ```

### DELETE /api/v1/contact

- **Description**: Deletes an entry from the contact form.
- **Request Body**:
  ```json
  {
    "id": "entry_id"
  }
  ```

## Good Practices

- **Error Handling**: The backend includes error handling mechanisms to provide informative responses in case of errors.
- **File Structure**: The codebase follows a structured file organization to improve maintainability and readability.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Setup `.env`, check `sample.env` for more information.
4. Start the server using `npm start` or `yarn start`.
5. The API will be accessible at the specified base URL.

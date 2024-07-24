# Newsletter Subscription App

This project is a full-stack web application that allows users to subscribe to a newsletter. The frontend is built with React and Vite, while the backend uses Express and PostgreSQL.

## Features

- **User Subscription**: Users can subscribe to the newsletter by providing their name and email.
- **Responsive Design**: The application is designed to be responsive and accessible across various devices.
- **Data Handling**: Secure handling of user data using PostgreSQL and server-side validation.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express, Node.js
- **Database**: PostgreSQL
- **Environment Variables**: dotenv
- **Security**: CORS, Helmet (for additional security headers)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/newsletter-app.git
   cd newsletter-app
  ```
2. **Install Fronend Dependencies**

   ```bash
   cd ../client
   npm install
  ```

## Configure Environmental Variables

1. Server
 Create a .env file in the server directory with the following content

    ```bash
    DB_USER=user
    DB_PASSWORD=pass
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=subscribers
    ```
2. Client
  ```bash
    VITE_API_URL=http://localhost:3000
  ```

## License

This projet is licensed under the MIT License.
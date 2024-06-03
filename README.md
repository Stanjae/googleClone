# Google-Clone Search Engine Web Application

## Overview

This project is a Google-clone search engine web application built using React.js. It leverages Google Search APIs for retrieving search results, Material UI for styling, and integrates Axios and react-query for data fetching and state management. The backend is built with Node.js to handle API requests securely.

## Features

- **Real-time Search**: Users can type queries and get real-time search results from the Google Search API.
- **Responsive Design**: The application is fully responsive, ensuring a seamless experience across all devices.
- **Material UI**: Styled with Material UI for a clean and modern user interface.
- **Efficient Data Fetching**: Uses Axios for HTTP requests and react-query for efficient data fetching and caching.
- **Node.js Backend**: A Node.js server handles API requests and manages environment variables securely.

## Technologies Used

- **Frontend**:
  - React.js
  - Material UI
  - Axios
  - react-query

- **Backend**:
  - Node.js
  - Express.js

- **APIs**:
  - Google Search API

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Google Search API Key and Search Engine ID.

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/google-clone.git
   cd google-clone
   ```

2. **Install Frontend Dependencies**:

   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**:

   ```bash
   cd ../server
   npm install
   ```

4. **Set Up Environment Variables**:

   Create a `.env` file in the `server` directory with the following content:

   ```env
   GOOGLE_API_KEY=your_google_api_key
   SEARCH_ENGINE_ID=your_search_engine_id
   ```

5. **Start the Backend Server**:

   ```bash
   npm run start
   ```

6. **Start the Frontend Development Server**:

   Open a new terminal window and navigate to the `client` directory:

   ```bash
   cd client
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Project Structure

```plaintext
google-clone/
│
├── client/                     # Frontend codebase
│   ├── public/                 # Public assets
│   ├── src/                    # Source code
│   │   ├── components/         # React components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom hooks
│   │   ├── App.js              # Main App component
│   │   ├── index.js            # Entry point
│   │   └── ...                 # Other React components and utilities
│   ├── package.json            # Frontend dependencies
│   └── ...                     # Other frontend configuration files
│
├── server/                     # Backend codebase
│   ├── routes/                 # API routes
│   ├── controllers/            # Route controllers
│   ├── server.js               # Server entry point
│   ├── package.json            # Backend dependencies
│   └── ...                     # Other backend configuration files
│
└── README.md                   # Project documentation
```

## Usage

1. **Enter a Search Query**: Use the search bar on the homepage to enter a query.
2. **View Search Results**: Results will be displayed in real-time as you type.
3. **Responsive Design**: The application is responsive and can be used on various devices.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue in the repository or contact the maintainer.

---

Thank you for using our Google-clone search engine web application!
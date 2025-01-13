# Currency Converter

A simple and intuitive currency converter application built with React and Vite. This application allows users to convert between different currencies using real-time exchange rates fetched from an external API.

**Live Demo**: [https://zingy-hummingbird-90c82c.netlify.app/](https://zingy-hummingbird-90c82c.netlify.app/)

## Features

- **Real-time Exchange Rates**: Fetches the latest exchange rates from the [ExchangeRate-API](https://www.exchangerate-api.com/).
- **User-friendly Interface**: Simple and clean UI for easy currency conversion.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Error Handling**: Displays error messages if the API fails to load or if the user enters invalid input.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Axios**: A promise-based HTTP client for making API requests.
- **Material-UI**: A popular React UI framework for styling components.
- **React Context API**: For managing global state across components.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter

    Install dependencies:
    bash
    Copy

    npm install

    Set up environment variables:

        Create a .env file in the root directory.

        Add your API key from ExchangeRate-API as follows:
        env
        Copy

        VITE_API_KEY=your_api_key_here

    Run the development server:
    bash
    Copy

    npm run dev

    Open the application:

        Visit http://localhost:5173 in your browser.
   ```

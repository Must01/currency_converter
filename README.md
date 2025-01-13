# Currency Converter

A simple and intuitive currency converter application built with React and Vite. This app allows users to convert between different currencies using real-time exchange rates fetched from an external API.

## Live Demo

[Currency Converter Live Demo](https://mbcurrencyconverter.netlify.app/)

## Features

- **Real-time Exchange Rates**: Fetches the latest exchange rates from the ExchangeRate-API.
- **User-friendly Interface**: Clean and simple design for easy currency conversion.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Error Handling**: Displays user-friendly error messages for API failures or invalid inputs.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Axios**: A promise-based HTTP client for making API requests.
- **Material-UI**: A popular React UI framework for styling components.
- **React Context API**: For managing global state across components.

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Must01/currency_converter.git
   cd currency_converter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add your API key from ExchangeRate-API:
     ```env
     VITE_API_KEY=your_api_key_here
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**

   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- **Mustapha Bouddahr**
- [GitHub](https://github.com/Must01)


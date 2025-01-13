import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo1 from "./assets/Logo1.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Import Components
import FromCurrency from "./component/fromcurrency";
import ToCurrency from "./component/tocurrency.jsx";

// Context for managing global state
export const Context = React.createContext();

function App() {
  const [currencies, setCurrencies] = useState({});
  const [exchangeRate, setExchangeRate] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("JPY");
  const [amountIn, setAmountIn] = useState("");
  const [amountOut, setAmountOut] = useState("");
  const [lastChanged, setLastChanged] = useState("amountIn"); // Tracks last modified input field
  const [loading, setLoading] = useState(true); // Tracks if data is being loaded
  const [error, setError] = useState(""); // Tracks errors during API fetching
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2", // Google blue
      },
      secondary: {
        main: "#ff4081", // Vibrant pink
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

  // Fetch data from API
  const fetchDataFromApi = async () => {
    try {
      setLoading(true); // Start loading
      const apiKey = import.meta.env.VITE_API_KEY;
      if (!apiKey) {
        setError("API key is missing.");
        return;
      }

      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );

      if (response.data && response.data.conversion_rates) {
        setCurrencies(response.data.conversion_rates);
      } else {
        throw new Error("Invalid API response format.");
      }
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("Failed to load currency data. Please try again later.");
      console.error(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Update exchange rate when currencies change
  useEffect(() => {
    if (currencies[fromCurrency] && currencies[toCurrency]) {
      const newRate = currencies[toCurrency] / currencies[fromCurrency];
      setExchangeRate(newRate);
    }
  }, [currencies, fromCurrency, toCurrency]);

  // Fetch data on initial render
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  // Update values based on the last changed field
  useEffect(() => {
    if (lastChanged === "amountIn") {
      setAmountOut(
        amountIn ? (amountIn * exchangeRate).toFixed(2) : "" // Prevent "0.00" when input is empty
      );
    } else if (lastChanged === "amountOut") {
      setAmountIn(
        amountOut ? (amountOut / exchangeRate).toFixed(2) : "" // Prevent "0.00" when input is empty
      );
    }
  }, [amountIn, amountOut, exchangeRate, lastChanged]);

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider
        value={{
          amountIn,
          setAmountIn: (value) => {
            setAmountIn(value);
            setLastChanged("amountIn");
          },
          amountOut,
          setAmountOut: (value) => {
            setAmountOut(value);
            setLastChanged("amountOut");
          },
        }}
      >
        <div className="container">
          <nav>
            <img src={logo1} alt="logo" />
            <h1>MB _ Currency Converter</h1>
          </nav>
          {loading ? (
            <div className="spinner"></div> // Spinner
          ) : error ? (
            <p className="error">{error}</p> // Error message
          ) : (
            <div className="main">
              <FromCurrency
                currencies={currencies}
                handlefromCurrency={setFromCurrency}
                fromCurrency={fromCurrency}
              />
              <ToCurrency
                currencies={currencies}
                handleToCurrency={setToCurrency}
                toCurrency={toCurrency}
              />
            </div>
          )}
        </div>
        <footer>
          <p>
            Made by <span>&#10084;</span> Mustapha Bouddahr
          </p>
        </footer>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;

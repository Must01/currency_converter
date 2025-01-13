// import the axios Library
const axios = require('axios');

// the Exchange Rate Api : https://data.fixer.io/api/latest?access_key=cbecb7a41404c03e250e0a15401ed3ab

// 1st fun : getExchageRate
const getExchangeRate = async (fromCurrency , toCurrency) => {
    const response = await axios.get(
      "https://data.fixer.io/api/latest?access_key=cbecb7a41404c03e250e0a15401ed3ab"
    );

    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    
    if (isNaN(exchangeRate)) {
        throw new Error (`Unabled to get currency ${fromCurrency} And ${toCurrency}`)
    } 

    return exchangeRate
};

// 2nd fun : getCountries
const getCountries = async (toCurrency) => {
  try {
    const response = await axios.get(
    `https://restcountries.com/v3.1/currency/${toCurrency}`
  );

  return response.data.map((country) => country.name.common)
  }catch(error) {
    throw new Error (`Unabled to get the countries that use ${toCurrency}`)
  }
};

// 3rd fun : counvertCurrency
const counvertCurrency = async (fromCurrency , toCurrency , amount) => {
    
    const countries = await getCountries(toCurrency);
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);

    const counvertedAmount = (exchangeRate * amount).toFixed(2)
    return `${amount} ${fromCurrency} is Worth ${counvertedAmount} ${toCurrency}. You can spend this in the follwoing countries : ${countries}`
}

counvertCurrency("MAD`", "USD", 200)
  .then((message) => console.log(message))
  .catch((error) => {
    console.log(error.message)
  })
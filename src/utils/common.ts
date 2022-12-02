const common = {
  LiveAssetsData: async () => {
    const key: any = process.env.REACT_APP_COIN_API_KEY;
    // const url: string = "https://api.coingecko/api/v1/coins/list";
    const url: string = "https://rest.coinapi.io/v1/exchanges";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-CoinAPI-Key": key,
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
  getDollarPricing: (price: number, isDigitFraction = true) => {
    const options = {
      style: "currency",
      currency: "USD",
      //   maximumSignificantDigits: 6,
      minimumFractionDigits: isDigitFraction ? 2 : 0,
    };
    const dollar = new Intl.NumberFormat("en-US", options).format(price);
    return dollar;
  },
};

export default common;

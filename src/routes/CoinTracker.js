import { useEffect, useState } from 'react';

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const getCoinInfo = async () => {
    const json = await (
      await fetch('https://api.coinpaprika.com/v1/tickers')
    ).json();
    setCoins(json);
    // console.log(json);
    setLoading(false);
  };

  useEffect(() => {
    getCoinInfo();
  }, []);

  return (
    <div>
      <h2>The Coins {loading ? '' : `(${coins.length})`}</h2>
      {loading ? <strong>Loading...</strong> : null}
      {coins.map((coin) => {
        return (
          <ul key={coin.id}>
            <li>
              <strong>name: {coin.name}</strong>
            </li>
            <li>rank: {coin.rank}</li>
            <li>price: ${coin.quotes.USD.price.toFixed(2)} USD</li>
          </ul>
        );
      })}
    </div>
  );
};

export default CoinTracker;

const searchButton = document.getElementById('search-button');

async function searchCrypto() {
  const symbolInput = document.getElementById('symbol-input').value.trim().toLowerCase();
  console.log(`Searching for symbol ${symbolInput}...`);

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbolInput}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('API response:', data);

    const cryptoData = data[symbolInput];
    console.log(`Name: ${cryptoData.name}, Symbol: ${symbolInput}, Price: ${cryptoData.usd}`);

    const cryptoPriceField = document.getElementById('crypto-price');
    cryptoPriceField.value = cryptoData.usd;

    const marketCapField = document.getElementById('usd_market_cap');
    marketCapField.value = cryptoData.usd_market_cap;

    const vol24hField = document.getElementById('usd_24h_vol');
    vol24hField.value = cryptoData.usd_24h_vol;

    const change24hField = document.getElementById('usd_24h_change');
    change24hField.value = cryptoData.usd_24h_change;
  } catch (error) {
    console.error(error);
  }
}

searchButton.addEventListener('click', searchCrypto);

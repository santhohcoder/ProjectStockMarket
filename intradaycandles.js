const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '428efad661msh6d1e5a016046b0bp107d58jsnc8b63493eadc',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };
  
  const url = 'https://alpha-vantage.p.rapidapi.com/query?'
  const interval=new URLSearchParams(window.location.search).get('candle');
console.log(interval);
//   interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact';
  
    const fetchingdata=async()=>{
        const response=await fetch((`${url}interval=${interval}min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact`),options);
        const data=await response.json();
        console.log(data);
        // console.log(data['Time Series (${interval}min)']);
    }
  fetchingdata();
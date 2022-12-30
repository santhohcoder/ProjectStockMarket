

const func=new URLSearchParams(window.location.search).get('function');
console.log(func);
let time;
// const time=new URLSearchParams(window.location).get('time');
if(func==="TIME_SERIES_WEEKLY")
time="WEEKLY";
else
time="MONTHLY";

  const weeklyandmonthlydata=async()=>{
  const response= await fetch("https://eodhistoricaldata.com/api/eod/MCD.US?from=2017-01-05&to=2017-02-10&period=d&fmt=json&api_token=demo");
  const data=await response.json();
  populatetable(data,func);
  console.log(data);
  }


  const populatetable=async(d,f)=>{
    let start,end;
    let details="";
    if(f==="TIME_SERIES_WEEKLY"){
      start=0;
      end=13;
    }
    else {
      start=14;
      end=25;
    }

     for(let i = start; i <=end; i++) {
      details+=`<table class="table table-striped mx-5 ">
      <tbody>
      <tr>
        <th scope="row">${d[i].date }</th>
        <td>${d[i].open} </td>
        <td>${d[i].high}</td>
        <td>${d[i].low}</td>
        <td>${d[i].close}</td>
      </tr>
    
    </tbody>
  </table>`
    }
   
    document.getElementById("data").innerHTML+=details;
  }

  document.getElementById("headingone").textContent=`THIS PAGE SHOWS THE DETAILS
  OF ${time} DATAS IN THE STOCK MARKET .`
 weeklyandmonthlydata();
            
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Pie} from "react-chartjs-2";
import D3chart from '../D3chart/D3chart';

const HomePage = () => {
  const [chartData, setChartData] = useState({});
  const [data, setData] = useState({});
  const chart = () => {
    let budgetTitle = [];
    let budgetValue = [];

    axios.get('http://localhost:3001/budget')
    .then(res => {
      for (var i = 0; i< res.data.myBudget.length; i++) {
       budgetTitle.push(res.data.myBudget[i].title);
       budgetValue.push(res.data.myBudget[i].budget);
      }
    setData(res.data.myBudget);
    setChartData({
      labels: budgetTitle,
      datasets: [
        {
          label: "Pie chart",
          data: budgetValue,
          backgroundColor : ['#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#800080',
          '#000080',
          '#00FFFF',
          '#008000'
          ],
          hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F',
            '#ff6384',
            '#36a2eb',
            '#fd6b19'
            ],
          borderWidth: 3
        }
      ]
    })
  }).catch(()=> {

  })
}

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="container center">

    <div id="main">
        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p role="description">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Pie chart</h1>
                <div style={{height:"400px",width:"400px"}}>
                    <Pie data = {chartData} 
                    options={{
                        title:{
                          display:true,
                          text:'Pie chart for montly expenses',
                          fontSize:10}}} />
                </div>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p role="description">
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
            <article>
                <h1>d3 chart</h1>
                <D3chart>
                    data={data}
                </D3chart>
            </article>

        </div>


    </div>

    
</div>    
  )
  }

export default HomePage;
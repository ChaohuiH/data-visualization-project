fetch('data/climate_change_impact_on_agriculture_2024.csv')
   .then(response => response.text())
   .then(csv => {
      const rows = csv.split('\n').slice(1);
      const labels = [];
      const values = [];

      rows.forEach(row => {
         const cols = row.split(',');
         labels.push(cols[0]);
         values.push(parseFloat(cols[1]));
      });
     
      new Chart(ctx, {
        type: 'bar',
     data: {
        labels: labels,
        datasets: [{
           label: 'My Dataset',
           data: values,
           borderWidth: 1
        }]
     }
   });
});

   const ctx = document.getElementById('myChart');

   new Chart(ctx, {
      type: 'bar',
      data: {
         labels: ['A', 'B', 'C', 'D', 'E'],
         datasets:[{
            label: 'Data',
            data: [12, 19, 3, 5, 2],
            borderWidth: 1,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966']
         }]
      },
      options: {
         plugins: {
            title: {
               display: true,
               text: 'Impact of Climate Conditions on Crop Yield',
               font: { size: 20, weight: 'bold' }
            }
         },
         scales: {
            y: {
               title: {
                  display: true,
                  text: 'Crop Yield (tons per ha)',
                  font: { size: 16, weight: 'bold' }
               }
            },
            x: {
               title: {
                  display: true,
                  text: 'Average Temperature (°C)',
                  font: { size: 16, weight: 'bold' }
               },
               beginAtZero: true
            }
         },
         animations: {
            tension: {
               duration: 1000,
               easing: 'easeInOutQuad',
               from: 1,
               to: 0,
               loop: true
            }
         }
      }
   });
   

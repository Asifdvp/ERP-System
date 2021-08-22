$(document).ready(function(){
//   category component jquery 
$("#close-icon").click(function(){
    $(".menu").addClass("toggled");
    $("#open-icon").css("display","block");
    $('#close-icon').css("display","none");
  }
  
  )
  
  $("#open-icon").click(function(){
    $(".menu").removeClass("toggled");
    $("#open-icon").css("display","none");
   $("#close-icon").css("display","block");
  }
  
  )
//   category component jquery finished

//header component

    $(".user-name").click(function(){
      $(".user-menu").toggle();
      
   
    });
    $(".user-img").click(function(){
      $(".user-menu").toggle();
   
    });
});
//header component finished


//gender chart 
 var ctx = document.getElementById('myChart').getContext('2d');
 var myChart = new Chart(ctx, {
   type: 'pie',
   data: {
     labels: [
     'Male ',
     'Female',
     
   ],
   datasets: [{
     label: 'Gender',
     data: [23, 48,],
     backgroundColor: [
      
       'rgb(54, 162, 235)',
       'rgb(255, 99, 132)'
    
     ],
     hoverOffset: 4
   }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
  
 
 //age chart

 var ctx = document.getElementById('ageChart').getContext('2d');
 var ageChart = new Chart(ctx, {
 
  type: 'bar',
  data: {
    labels: [
    '18',
    '19',
    '20',
    "21",
    "22",
    "23",
    "24"
    
  ],
  datasets: [{
    barPercentage: 200,
    barThickness: 200,
    maxBarThickness: 30,
    minBarLength: 4,
    label: 'AGE Count',
    data: [8, 10,18,22,10,2,1],
    backgroundColor: [
      "rgb(52, 42, 109)",
      '#e55039',
      '#eb2f06',
      "#b8e994",
      "green",
      "#38ada9",
      "#b71540"
   
    ],
    hoverOffset: 6
  }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }


 });

 //department chart

 
 var ctx = document.getElementById('departChart').getContext('2d');
 var ageChart = new Chart(ctx, {
 
  type: 'bar',
  data: {
    labels: [
      'IT',
      'AF',
      'HR',
      "LP"
    
  ],
  datasets: [{
    barPercentage: 200,
    barThickness: 200,
    maxBarThickness: 30,
    minBarLength: 4,
    label: 'Department',
    data: [18, 18,20,15],
    backgroundColor: [
      
      "#ffbe76",
      '#686de0',
      '#22a6b3',
      "#6ab04c",
      
   
    ],
    hoverOffset: 6
  }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }


 });
  


//degree chart 
var ctx = document.getElementById('degreeChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
    'Bachelor ',
    'Graduate',
    'Master'
    
  ],
  datasets: [{
    label: 'Gender',
    data: [53, 8,10],
    backgroundColor: [
      '#686de0',
      '#22a6b3',
      '#f0932b'
   
    ],
    hoverOffset: 4
  }]
    },
    options: {
      indexAxis: 'y',
    }
});



//university chart



var ctx = document.getElementById('universityChart').getContext('2d');
var ageChart = new Chart(ctx, {

 type: 'doughnut',
 data: {
   labels: [
     'UFAZ',
     'ADNSU',
     'BMU',
     'AzTU',
     'AZMIU',
     'ADIU',
     'ADA',
     'DIA',
     'Xəzər',
     'Turkiyə',
     'BDU',
     'ADU'
  
   
 ],
 datasets: [{
  axis: 'y',
  label: 'University',
  data: [5, 6, 14, 3, 1, 20, 5,3,3,2,4,2],
  fill: false,
  backgroundColor: [
    '#6a89cc',
    '#f8c291',
    '#e55039',
    '#f6b93b',
    '#fa983a',
    '#eb2f06',
    '#78e08f',
    '#38ada9',
    '#e58e26',
    '#b71540',
    '#3c6382',
    '#b8e994',
  ],
  borderColor: [
    '#6a89cc',
    '#f8c291',
    '#e55039',
    '#f6b93b',
    '#fa983a',
    '#eb2f06',
    '#78e08f',
    '#38ada9',
    '#e58e26',
    '#b71540',
    '#3c6382',
    '#b8e994'

  ],
  borderWidth: 1
}]
   },
   options: {
    indexAxis: 'y',
  }


});



var $btn = document.querySelector('button')
var $btnAdd = document.querySelector('#btn')



$btnAdd.addEventListener('click',function addBtn() {
  var inputDate = document.createElement('input')
  inputDate.id= 'data'
  inputEff = document.createElement('input')
  inputEff.id= 'eff'
  inputDur = document.createElement('input')
  inputDur.id= 'dur'

  var br = document.createElement('br')
  var first_input = document.querySelector("input");
  document.body.insertBefore(inputDate, first_input);
  document.body.insertBefore(inputEff, first_input);
   document.body.insertBefore(inputDur, first_input);
  
  document.body.insertBefore(br, first_input);
  console.log('cw')
})



 


$btn.addEventListener('click',function(){
  var $inputDate = document.querySelectorAll('#data')
var $inputEff = document.querySelectorAll('#eff')
var $inputDur = document.querySelectorAll('#dur')
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawStacked);
  var ara =[]
  for (var i =0; i <$inputDate.length; i++) {
    ara.push($inputDate[i].value)
    ara.push(parseInt($inputEff[i].value))
    ara.push(parseInt($inputDur[i].value))
    console.log('$inputDate.length')
  }
  console.log(ara)
  function drawStacked() {
      var data = new google.visualization.DataTable();
      data.addColumn('string','число');
      data.addColumn('number', 'Эффективность');
      data.addColumn('number', 'Продолжительность');
      var baby = 0
      console.log(ara)
      for (var j =0;j<$inputDate.length; j++) {
          data.addRows([
            [ara[baby],parseInt(ara[baby+1]),parseInt(ara[baby+2])]
            ])

          console.log(baby+' Это значение 1 элементп инпут')
          console.log(baby+1+' Это значение 2 элементп инпут')
          console.log(baby+2+' Это значение 3 элементп инпут')

          baby= baby+3
   



  }

      var formatter_short = new google.visualization.DateFormat({formatType: 'short'});
      var options = {
        title: 'Эффективность и Продолжительность занятий',
        isStacked: true,
        hAxis: {
          title: 'Число',
          format: 'h:mm a',
          viewWindow: {
            min: [0, 0, 0],
            max: [0, 0, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

})
     
 
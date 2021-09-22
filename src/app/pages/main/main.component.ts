import { Component, OnInit } from '@angular/core';
import { Chart } from '../../../../node_modules/chart.js/dist/Chart.js';
import { EmployeesService } from '../../_services/employees.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private employeeService: EmployeesService) { }
  chart;
  ngOnInit(): void {}

  handleCheck() {
    const rbs = document.querySelector('input[name="graphtype"]:checked');
    if (rbs != null) {
      switch (rbs.id) {
        case 'bar':
          this.chart?.destroy();
          const YearsCount = this.employeeService.yearsCount();

          this.chart = new Chart('empChart', {
            type: 'bar',
            data: {
              labels: ['2017', '2018', '2019', '2020'],
              datasets: [{
                label: 'Employee\'s date of Employment ',
                barThickness: 30,
                data: [...YearsCount],
                backgroundColor: [
                  'rgba(38,45,63, 0.8)',
                  'rgba(38,45,63, 0.8)',
                  'rgba(38,45,63, 0.8)',
                  'rgba(38,45,63, 0.8)'
                ],
                borderColor: [
                  'rgba(38,45,63, 0.2)',
                  'rgba(38,45,63, 0.2)',
                  'rgba(38,45,63, 0.2)',
                  'rgba(38,45,63, 0.2)'
                ],
                borderWidth: 1,
              }]
            },
            options: {
              responsive: true,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
          break;
        case 'pie':
          this.chart?.destroy();
          const GenderCount = this.employeeService.genderCount();

          this.chart = new Chart('empChart', {
            type: 'pie',
            data: {
              labels: [
                'Males',
                'Females',
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [GenderCount.noOfMales, GenderCount.noOfFemales],
                backgroundColor: [
                  'rgba(38,45,63, 0.8)',
                  'rgba(180,22,62, 0.8)'
                ],
                hoverOffset: 1
              }]
            },
            options: {
              responsive: true
            }
          });
          break;
        case 'line':
          this.chart?.destroy();
          const employeesAges = this.employeeService.employeesAges();
          this.chart = new Chart('empChart', {
            type: 'line',
            data: {
              labels: [...employeesAges.empNames],
              datasets: [{
                label: 'Employees Ages',
                data: [...employeesAges.empAges],
                fill: false,
                borderColor: 'rgba(38,45,63, 0.8)',
                tension: 0.1
              }]
            },
            options: {
              responsive: true
            }
          });
          break;
      }

    }
  }

}

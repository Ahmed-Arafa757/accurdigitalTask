import { Injectable } from '@angular/core';
import { Employee } from '../_model/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  employees: Employee[] = [
    {
      name: 'employee1',
      age: 28,
      gender: 'male',
      dateOfEmployment: '2019'
    },
    {
      name: 'employee2',
      age: 27,
      gender: 'female',
      dateOfEmployment: '2019'
    },
    {
      name: 'employee3',
      age: 30,
      gender: 'male',
      dateOfEmployment: '2019'
    },
    {
      name: 'employee4',
      age: 28,
      gender: 'female',
      dateOfEmployment: '2018'
    },
    {
      name: 'employee5',
      age: 25,
      gender: 'male',
      dateOfEmployment: '2019'
    },
    {
      name: 'employee6',
      age: 32,
      gender: 'male',
      dateOfEmployment: '2017'
    },
    {
      name: 'employee7',
      age: 30,
      gender: 'male',
      dateOfEmployment: '2020'
    },
    {
      name: 'employee8',
      age: 26,
      gender: 'female',
      dateOfEmployment: '2020'
    },
    {
      name: 'employee9',
      age: 25,
      gender: 'male',
      dateOfEmployment: '2020'
    },
    {
      name: 'employee10',
      age: 35,
      gender: 'male',
      dateOfEmployment: '2018'
    }
  ];

  yearsCount() {
    let years = [], yearsCount = [], result = {}, y2017 = 0, y2018 = 0, y2019 = 0, y2020 = 0;

    years = this.employees.map(({ dateOfEmployment }) => {
     return dateOfEmployment;
    });

    for (let year of years) {
      if (year === '2017') {
        y2017++;
      } else if (year === '2018') {
        y2018++;
      }
      else if (year === '2019') {
        y2019++;
      }
      else if (year === '2020') {
        y2020++;
      }
    }
    yearsCount.push(y2017, y2018, y2019, y2020);
    return yearsCount;
  }

  genderCount() {
    let noOfMales = 0, noOfFemales = 0;

    for (let emp of this.employees) {
      if (emp.gender === 'male') {
        noOfMales++;
      } else if (emp.gender === 'female') {
        noOfFemales++;
      }
    }
    return { noOfMales, noOfFemales };
  }

  employeesAges() {
    const empAges = this.employees.map(({ age }) => age);
    const empNames = this.employees.map(({ name }) => name);
    return {empNames,empAges};
  }
}

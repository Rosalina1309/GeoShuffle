import { Component, OnInit } from '@angular/core';
import getCountriesFromAPI from '../../../services/getCountriesFromAPI';
import { CountryName } from 'src/app/Interfaces/CountryName';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countryNameList: string[] = [];  // Use lowercase 'string'
  randomCountry: string | null = null;  // Correctly use 'string | null'

  constructor() {}

  async ngOnInit() {
    try {
      const countriesData: CountryName[] = await getCountriesFromAPI();
      this.countryNameList = countriesData.map(country => country.name.official);
    } catch (err) {
      console.error('Error fetching countries:', err);
    }
  }

  getRandomCountry() {
    if (this.countryNameList.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.countryNameList.length);
      this.randomCountry = this.countryNameList[randomIndex];  // Complete the method by assigning a value
    }
  }
}

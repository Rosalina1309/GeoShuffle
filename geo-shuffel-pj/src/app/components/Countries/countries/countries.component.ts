import { Component, OnInit } from '@angular/core';
import getCountriesFromAPI from "../../../services/getCountriesFromAPI";
import { CountryName } from 'src/app/Interfaces/CountryName';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  countryNameList: String[] = [];

  constructor() {}

  async ngOnInit() {
    try {
      const countriesData: CountryName[] = await getCountriesFromAPI();
      this.countryNameList = countriesData.map(country => country.name.official);
    } catch (err) {
      console.error('Error fetching countries:', err);
    }
  }
}

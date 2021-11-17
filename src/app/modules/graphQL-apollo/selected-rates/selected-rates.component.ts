import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { SelectedRatesCurrencyGQL, SelectedRatesCurrencyResponse, SelectedRatesGQL, SelectedRatesResponse } from '../queries';
import { selectedRatesRV } from '../reactive-vars';

@Component({
  selector: 'app-selected-rates',
  templateUrl: './selected-rates.component.html',
  styleUrls: ['./selected-rates.component.sass']
})
export class SelectedRatesComponent implements OnInit {
  selectedCountGQL: number = 0;
  selectedRatesCurrency: string[] = [];

  constructor(
    private selectedRatesGQL: SelectedRatesGQL,
    private selectedRatesCurrencyGQL: SelectedRatesCurrencyGQL
  ) { }

  ngOnInit(): void {
    this.selectedRatesGQL.watch().valueChanges.pipe(
    ).subscribe((result: ApolloQueryResult<SelectedRatesResponse>) => {
      this.selectedCountGQL = result.data.selectedRates.length
      console.warn("selectedCountGQL", result)
    });

    this.selectedRatesCurrencyGQL.watch().valueChanges.pipe(
    ).subscribe((result: ApolloQueryResult<SelectedRatesCurrencyResponse>) => {
      this.selectedRatesCurrency = result.data.selectedRatesCurrency
      console.warn("selectedRatesCurrency", result)
    });
  }

}

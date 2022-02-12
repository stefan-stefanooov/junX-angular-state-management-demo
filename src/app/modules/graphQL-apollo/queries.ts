import {Injectable} from '@angular/core';
import {Query, gql} from 'apollo-angular';

export interface Rate {
    currency: string;
    rate: number;
}

export interface RatesResponse {
    rates: Rate[];
}

export interface RatesParameters {
  currency: string;
}

export interface SelectedRatesResponse {
  selectedRates: Rate[];
}

export interface SelectedRatesCurrencyResponse {
  selectedRatesCurrency: string[];
}

@Injectable()
  export class AllRatesGQL extends Query<RatesResponse, RatesParameters> {
    document = gql`
        query rates($currency: String!) {
          rates(currency: $currency) {
            currency
            rate
          }
        }
      `;
  }

  @Injectable()
  export class SelectedRatesGQL extends Query<SelectedRatesResponse> {
    document = gql`
        query selectedRates {
            selectedRates @client
        }
      `;
  }

  @Injectable()
  export class SelectedRatesCurrencyGQL extends Query<SelectedRatesCurrencyResponse> {
    document = gql`
        query selectedRatesCurrency {
            selectedRatesCurrency @client
        }
      `;
  }

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApolloCache } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { AllRatesGQL, Rate, SelectedRatesCurrencyGQL } from '../queries';
import { selectedRatesRV } from '../reactive-vars';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {
  dataSource: MatTableDataSource<Rate[]>;
  displayedColumns: string[] = ['currency', 'rate'];
  loading = true;
  selectedRows = new Set<Rate>();
  error: any;
  
  constructor(
    private allRatesGQL: AllRatesGQL,
    private selectedRatesCurrencyGQL: SelectedRatesCurrencyGQL,
    private apollo: Apollo
  ) {
    this.dataSource = new MatTableDataSource<Rate[]>([]);
  }

  ngOnInit(): void {
    this.allRatesGQL.watch().valueChanges.pipe(
      map(r => r.data),
    ).subscribe((result: any) => {
      const rates: Array<any> = result.rates
      this.dataSource = new MatTableDataSource<any>(rates.slice(0, 10));
    });
  }

  rowSelected(row: Rate) {
    if(this.selectedRows.has(row)) {
      this.selectedRows.delete(row)
    } else {
      this.selectedRows.add(row)
    }
    
    selectedRatesRV(Array.from(this.selectedRows.values()))
  }

  writeToCache() {
    this.apollo.client.cache.writeQuery({
      query: this.selectedRatesCurrencyGQL.document,
      data: {
        selectedRatesCurrency: Array.from(this.selectedRows).map(r => r.currency),
      },
    });
  }

}

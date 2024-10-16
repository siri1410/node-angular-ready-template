import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  data: any[] = [];
  error: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.error = 'An error occurred while fetching data. Please try again later.';
      }
    );
  }
}

// This component is responsible for displaying the data in a table format.
// It uses the DataService to fetch data from the API and handles any errors that occur during the process.

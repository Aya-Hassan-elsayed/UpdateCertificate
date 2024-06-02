import { Component, OnInit } from '@angular/core';
import { AllUpdateService } from '../../service/all-update.service';
import { NgxSpinnerService } from 'ngx-spinner';

export interface PeriodicElement {
  id: number;
  userName: string;
  updatedAt: string;
  recordsUpdated: number;
  fileContentpath: string;
}

export interface UserName {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-get-all-update',
  templateUrl: './get-all-update.component.html',
  styleUrls: ['./get-all-update.component.css']
})
export class GetAllUpdateComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'updatedAt', 'recordsUpdated', 'fileContentpath'];
  dataSource: PeriodicElement[] = [];
  searchUserName: string = '';
  searchDate: string = '';
  userNames: UserName[] = [
    { value: 'caphatem', viewValue: 'caphatem' },
    { value: 'capbasuoni', viewValue: 'capbasuoni' },
    { value: 'islam', viewValue: 'islam' },
    { value: 'kamel', viewValue: 'kamel' },
    { value: 'lara', viewValue: 'lara' },
  ];
  urlVisibility: { [key: number]: boolean } = {};
  isUserSelected = false;
  noUserSelectedMessage = 'Username parameter is required to select.';
  noUpdatesMessage = '';

  constructor(private service: AllUpdateService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.GetAllUpdate('');
  }

  GetAllUpdate(searchQuery: string) {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found. Please ensure the user is logged in.');
      return;
    }
    this.service.getallUpdate(searchQuery, token).subscribe(
      (data: PeriodicElement[]) => {
        this.dataSource = data;
        if (data.length === 0) {
          this.noUpdatesMessage = 'No updates found for this user.';
        } else {
          this.noUpdatesMessage = '';
        }
        console.log(data);
      }, (error) => {
        console.error('Error fetching updates:', error);
      }
    );
  }

  search(event: any): void {
    const filterValue = (event.target as HTMLSelectElement).value.trim().toLowerCase();
    this.isUserSelected = filterValue !== 'none';
    if (!this.isUserSelected) {
      this.dataSource = [];
      return;
    }
    this.GetAllUpdate(filterValue);
  }

  applyAddedDateFilter(dateFilter: string) {}

  onDateFilterChange(event: any) {
    const date = (event.target as HTMLInputElement).value;
    this.applyAddedDateFilter(date);
  }

  toggleUrlVisibility(id: number): void {
    this.urlVisibility[id] = !this.urlVisibility[id];
  }

  viewFilePath(filePath: string): void {
    // Logic to handle viewing the full file path, e.g., navigating to the file or opening it in a modal
    console.log('Full file path:', filePath);
  }
}

import { SearchService } from './search.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string;
  searchData: any;
  isDivHidden: boolean;
  suggestions: any;
  @ViewChild('input') input: ElementRef;
  constructor(
    private searchService: SearchService
  ) {
    this.searchText = "";
    this.searchData = [];
    this.isDivHidden = false;
    this.suggestions = [];
  }

  ngOnInit() {
  }


  clearSearch() {
    this.searchText = "";
    this.suggestions = [];
  }

  search() {
    this.suggestions = [];
    this.getComments(this.searchText, false);
  }

  getComments(queryString: string, isSuggestion: boolean): void {
    this.searchService
      .getComments(queryString)
      .subscribe((response) => {
        if (response) {
          isSuggestion ? this.suggestions = response : this.searchData = response;
        } else {
          console.log('error')
        }
      });
  }

  keyUp(event: any) {
    let val = event.target.value;
    if (val.length > 5) {
      this.getComments(event.target.value, true);
    } else {
      this.suggestions = [];
    }
  }

  setSearchQuery(value: string) {
    this.searchText = value;
    this.isDivHidden = true;
    this.input.nativeElement.blur();
  }

}

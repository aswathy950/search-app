import { SearchRoutingModule } from './search-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService],
})
export class SearchModule {}

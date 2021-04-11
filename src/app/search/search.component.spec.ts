import { SearchService } from './search.service';
import { TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('SearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SearchRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        SearchComponent
      ],
      providers: [SearchService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should return correct data for search', (done) => {
    const fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.searchText = 'id labore ex et quam laborum';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    setTimeout(() => {
      expect(app.searchData).toEqual([
        {
          "postId": 1,
          "id": 1,
          "name": "id labore ex et quam laborum",
          "email": "Eliseo@gardner.biz",
          "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }
      ]);
      done();
    }, 3000);
  });
});

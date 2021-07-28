import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Program } from '../models/program';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  public listOfPrograms!: Array<Program>;
  public searchData!: string; 
  private params = new HttpParams();
  
  constructor(private http: HttpClient) { 
    this.http.get<any>(environment.baseUrl).subscribe(result =>{
      this.listOfPrograms = result;
    },
    error =>{
      console.log(error);
    })
   }

  ngOnInit(): void {
  }

    getData(searchData: string){
      this.params.set('searchData', this.searchData)      
      return this.http.get<any>(environment.baseUrl, {params: {searchData: this.searchData}}).subscribe(result => {
        this.listOfPrograms = result
      },
      error =>{
        console.log(error);
      });
  }

}

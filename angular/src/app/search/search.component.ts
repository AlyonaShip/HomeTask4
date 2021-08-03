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
  public searchData = ''; 
  private headers = new HttpHeaders();
  private params = new HttpParams();
  public isFirstTap = true;  
  
  constructor(private http: HttpClient) { 
    this.FirstTap();    
   }

  ngOnInit(): void {
    
  } 

  getData(searchData: string){
    this.headers.append('Content-Type', 'application/json');
    this.params.set("searchData", this.searchData);   
    if(searchData && searchData.length >= 3){
      setTimeout(()=>{                           
        this.http.get<any>(environment.baseUrl, {params: {searchData: this.searchData}}).subscribe(result => {        
        if(this.isFirstTap === false){                                 
          this.listOfPrograms = result;             
        }
        else{
          this.listOfPrograms = result.slice(0, 10);
        }
        },
        error =>{
          console.log(error);
        });
      }, 3000);      
    }
  }

  public FirstTap(){    
    this.http.get<any>(environment.baseUrl).subscribe(result =>{
      this.listOfPrograms = result.slice(0, 10);
    },
    error =>{
      console.log(error);
    })  
    this.isFirstTap = false;     
  }
}

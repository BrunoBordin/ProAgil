import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }
getEventos(){
  this.http.get('http://localhost:5000/api/values').subscribe(Response =>{
    this.eventos = Response;
  }, error => {
    console.log(error);
  }
  );
}
}

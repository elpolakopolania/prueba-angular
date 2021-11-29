import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SolicitudService } from '../../service/solicitud.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
  capitalBase = environment.capitalBase;
  capitalPrestado: any = 0;
  valorPrestado: any;
  constructor(private solicitudService: SolicitudService) {

   }

  ngOnInit(): void {
    this.solicitudService.valorPrestadoObservable.subscribe(res => {
      this.capitalPrestado = res
    });
  }

}

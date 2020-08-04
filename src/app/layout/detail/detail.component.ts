import { Component, OnInit } from '@angular/core';
import { AdmissionService } from 'src/app/admission.service';
import { ScolarisationService } from 'src/app/scolarisation.service';
import { NiveauEtudeService } from 'src/app/niveau-etude.service';
import * as Chart from 'chart.js';

declare var google : any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  admission: [ ];
  currentAdmission = null;
  currentIndex = -1;
  region = '';
  scolarisation: [ ];
  currentScolarisation = null;
  niveau_etude: [ ];
  currentNiveauEtude = null;

  constructor(private admissionService: AdmissionService , private scolarisationService: ScolarisationService, private niveauEtudeService: NiveauEtudeService) { }

  ngOnInit(): void {
    this.retrieveAdmission();
    this.retrieveScolarisation();
    this.retrieveNiveauEtude();

    

    
  }

  retrieveAdmission(): void {

    
    this.admissionService.get()
      .subscribe(
        data => {
          this.admission = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });  
}

retrieveScolarisation(): void {

    
  this.scolarisationService.get()
    .subscribe(
      data => {
        this.scolarisation = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });  
}

retrieveNiveauEtude(): void {

    
  this.niveauEtudeService.get()
    .subscribe(
      data => {
        this.niveau_etude = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });  
}

}

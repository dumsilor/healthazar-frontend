import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../core/models/doctors.model';
import { DoctorService } from '../../../core/services/doctors.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})


export class DoctorListComponent implements OnInit {
    doctors: Doctor[] = [];
    city: string = '';
    specialty: string = ''; 
    hospital: string = '';
    
    constructor(private doctorService: DoctorService) { }

    loadDoctors() { // ekhane ekta function create korsi
       this.doctorService.getDoctors({ //function er moddhe doctor service call kore getDoctor method call korsi
            city: this.city,
            specialty: this.specialty,  // GetDoctor er moddhe j optional parameters chilo ogula pass korsi
            hospital: this.hospital
        }).subscribe(doctors => {  // observable er sathe subscribe korsi jate response ashe taropor doctor variable er sathe assign kora jay
            this.doctors = doctors; // doctor variable er sathe assign korsi
        });
    }

    ngOnInit(): void {
        this.loadDoctors(); //loadDoctor fuiction ta onInit e call korsi jate page load hower asathe sathe info ta dekhay

      }

      onFilterChange(): void { // filter change hole abar doctor load kora hobe
        this.loadDoctors(); //kivabe kaj kore ekhono uncertain, but filter change hole abar doctor load kora hobe
      }
} // Component end parenthesis
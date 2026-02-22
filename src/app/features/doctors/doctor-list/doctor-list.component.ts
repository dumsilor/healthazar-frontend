import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../core/models/doctors.model';
import { DoctorService } from '../../../core/services/doctors.service';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css',
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  city: string = '';
  specialty: string = '';
  hospital: string = '';

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  loadDoctors() {
    // ekhane ekta function create korsi
    this.doctorService
      .getDoctors({
        //function er moddhe doctor service call kore getDoctor method call korsi
        city: this.city,
        specialty: this.specialty, // GetDoctor er moddhe j optional parameters chilo ogula pass korsi
        hospital: this.hospital,
      })
      .subscribe((doctors) => {
        // observable er sathe subscribe korsi jate response ashe taropor doctor variable er sathe assign kora jay
        this.doctors = doctors; // doctor variable er sathe assign korsi
      });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      //fire er time e url e ki ase oita er route e subscrbie korbe
      this.city = params['city'] || '';
      this.specialty = params['specialty'] || '';
      this.hospital = params['hospital'];
      this.loadDoctors(); //loadDoctor fuiction ta onInit e call korsi jate page load hower asathe sathe info ta dekhay, ekhane city or speciality variable pass kora lage nai because ogula global variable hisab e call kora
    });
  }

  onFilterChange(): void {
    //jokhon html e kono option select korbe tokhon ei method fire korbe
    this.router.navigate(['/doctors'], {
      queryParams: {
        city: this.city || null,
        specialty: this.specialty || null,
        hospital: this.hospital || null,
      },
    });
  }
} // Component end parenthesis

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from '../models/doctors.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private mockDoctors: Doctor[] = [
    // ekta mock data insert korsi development er jonno
    {
      _id: '1',
      name: 'Dr. Ahmed Rahman',
      slug: 'dr-ahmed-rahman',
      specialty: 'Cardiologist',
      city: 'Dhaka',
      hospital: 'Square Hospital',
      experience: 12,
      fee: 800,
      verified: true,
      image: '',
    },
  ];

  getDoctors(filters?: {
    // getDoctors method create korsi eta doctor list theke all doctor ene dekhabe, jodi filter parameters pass kore thahole filtered information dekhabe
    specialty?: string;
    city?: string;
    hospital?: string;
  }): Observable<Doctor[]> {
    let filteredDoctors = this.mockDoctors;
    console.log(filters);
    if (filters?.specialty) {
      filteredDoctors = filteredDoctors.filter(
        (doctor) =>
          doctor.specialty.toLowerCase() === filters.specialty?.toLowerCase(),
      );
    }

    if (filters?.city) {
      filteredDoctors = filteredDoctors.filter(
        (doctor) => doctor.city === filters.city!,
      );
    }

    if (filters?.hospital) {
      filteredDoctors = filteredDoctors.filter(
        (doctor) =>
          doctor.hospital.toLowerCase() === filters.hospital?.toLowerCase(),
      );
    }

    return of(filteredDoctors); // of operator use korsi jate observable return kore, jate subscribe kora jay component theke
  }

  getDoctorsBySlug(slug: string): Observable<Doctor | undefined> {
    return of(this.mockDoctors.find((doctor) => doctor.slug === slug));
  }
} // DoctorService end parenthesis

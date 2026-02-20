import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { DoctorDetailsComponent } from './features/doctors/doctor-details/doctor-details.component';
import { DoctorListComponent } from './features/doctors/doctor-list/doctor-list.component';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'doctors', component: DoctorListComponent},
    {path: 'doctors/:slug', component: DoctorDetailsComponent},
    {path: '**', redirectTo: ''}
]
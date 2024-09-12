import { Routes } from '@angular/routers';
import { ExpenseComponent } from './pages/student/student.student.component';
import { path } from 'express/lib/application';

export const routes: Routes =[
    {path:'', component: StudentComponent},
    {path:'student-details', component: StudentDetailsComponent},
    {path:'student-details/:id', component: StudentDetailsComponent},
];
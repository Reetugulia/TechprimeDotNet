import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

export const routes: Routes = [{path:'login',component:LoginComponent},{path:'create project',component:ProjectComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:"projectlist",component:ProjectlistComponent},
    {path:"dashboard",component:DashboardComponentComponent}];

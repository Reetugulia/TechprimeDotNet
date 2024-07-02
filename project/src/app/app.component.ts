import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpserviceService } from './httpservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,HttpClientModule,ProjectComponent,ProjectlistComponent,DashboardComponentComponent],
  providers:[HttpserviceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}

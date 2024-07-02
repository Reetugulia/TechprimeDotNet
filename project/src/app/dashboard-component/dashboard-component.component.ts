import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { ProjectCount } from './ProjectCount.dto';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [RouterLink,RouterOutlet,HttpClientModule],
  providers:[HttpserviceService],
  templateUrl: './dashboard-component.component.html',
  styleUrl: './dashboard-component.component.css'
})
export class DashboardComponentComponent implements OnInit {
  selectedIcon: string = '';
 // project:any
  counts?: ProjectCount;

  constructor(private Service:HttpserviceService ) { }

  ngOnInit(): void {
    this.getProjectCount();
      
  }
  getProjectCount():void{
    debugger
    this.Service.getProjectCount().subscribe(data => {
      console.log(data);
      this.counts = data;
    });

  }
  toggleIcon(iconId: string): void {
    this.selectedIcon = iconId; // Update selected icon
  }
  setInitialSelectedIcon(url: string): void {
    switch (url) {
      case '/dashboard':
        this.selectedIcon = 'dashboardIcon';
        break;
      case '/projectlist':
        this.selectedIcon = 'ordersIcon';
        break;
      case '/project':
        this.selectedIcon = 'productsIcon';
        break;
      default:
        this.selectedIcon = '';
        break;
    }

}
}

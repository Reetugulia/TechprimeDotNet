import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { project } from '../Project.dto';
import { Router } from 'express';

@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink ,RouterOutlet],
  providers:[HttpserviceService],
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.css'
})
export class ProjectlistComponent implements OnInit{
  selectedIcon: string = '';
  project:project[]=[];
 

  constructor(private service:HttpserviceService){}
  ngOnInit(): void {
     this.getAllProjects();
     }
      

     getAllProjects()
     {
      this.service.getAllProjects().subscribe(result=>{
        console.log(result);
        this.project=result;});
     }
  updateStatus(id:any, statusId:any): void {
    let project={
      id:id,
      statusId:statusId
    }
    this.service.updateProjectStatus(project).subscribe((res) => {
      this.getAllProjects();
      console.log(res);
    });
  }

  getStatusNameById(id: any): any {
    const statusMap = {
      1: 'Running',
      2: 'Registered',
      3: 'Cancelled',
      4: 'Closed',
    };
  
     
      

//       this.project.forEach(project => {
//         this.fetchRelatedEntityDetails(project);
//     });
// });
//}

// private fetchRelatedEntityDetails(project: project): void {
// // Fetch related entity details and assign them to project properties
// this.service.getReasonById(project.reasonId).subscribe(reason => 
//     project.reasonName = reason.reasonname; // Assuming reason name property exists
// });

// this.service.getbytype(project.typeId).subscribe(type => {
//     project.typeName = type.typename; // Assuming type name property exists
// });

// this.service.getdepartmentbyid(project.departmentId).subscribe(department => {
//     project.departmentName = department.departmentname; // Assuming department name property exists
// });

// this.service.getdivisionbyid(project.divisionId).subscribe(division => {
//     project.divisionName = division.divisionname; // Assuming division name property exists
// });

// this.service.getprioritybyid(project.priorityId).subscribe(priority => {
//     project.priorityName = priority.priorityname; // Assuming priority name property exists
// });

// this.service.getcategorybyid(project.categoryId).subscribe(category => {
//     project.categoryName = category.categoryname; // Assuming category name property exists
// });

// this.service.getlocationbyid(project.categoryId).subscribe(location => {
//   project.locationName = location.locationname; // Assuming category name property exists
// });
 // }
 
     
   

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







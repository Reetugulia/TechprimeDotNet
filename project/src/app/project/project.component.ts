import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { reason } from '../reason.dto';
import { types } from '../types.dto';
import { division } from '../division.dto';
import { category } from '../category.dto';
import { priority } from '../priority.dto';
import { department } from '../department.dto';
import { location } from '../location.dto';
import { HttpserviceService } from '../httpservice.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { compileComponentClassMetadata } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { project } from '../Project.dto';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink],
    providers:[HttpserviceService],
    
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  projectForm!: FormGroup;
  selectedIcon:string=" ";
  projectname!: string;
  reasonList:any
  typesList:any
  divList:any
  categoryList: any
  priorityList:any
  depList: any
  locationList:any
  router=inject(Router)
  EndingndDate: any
  StartingDate:any
  
 
  


  constructor(
    private fb: FormBuilder,
    private apiService: HttpserviceService,
  
  ) { }
  ngOnInit(): void {
    this.initializeForm();
    statustype: ['Registered']
    // this.fetchReasonsFromAPI();
    
   this.apiService.getAllreasons().subscribe(result=>{
       console.log(result);
       this.reasonList=result;
   });

   this.apiService.getAlltypes().subscribe(result=>{
    console.log(result);
    this.typesList=result;
});

this.apiService.getAllcategory().subscribe(result=>{
  console.log(result);
  this.categoryList=result;
})
this.apiService.getAlllocations().subscribe(result=>{
  console.log(result);
  this.locationList=result;
})
this.apiService.getAllpriority().subscribe(result=>{
  console.log(result);
  this.priorityList=result;
})
this.apiService.getAlldepartments().subscribe(result=>{
  console.log(result);
  this.depList=result;
});
this.apiService.getAlldivisions().subscribe(result=>{
  console.log(result);
  this.divList=result;
});
this.apiService.getAllstatus().subscribe(result=>{
  console.log(result);
  
})
  }
  

  
  initializeForm(): void {
    this.projectForm = this.fb.group({
      projectname: ['', Validators.required],
      ReasonId: ['', Validators.required],
      TypeId: ['', Validators.required],
      DivisionId: ['', Validators.required],
      CategoryId: ['', Validators.required],
      PriorityId: ['', Validators.required],
     DepartmentId: ['', Validators.required],
      StartingDate: ['', Validators.required],
      EndingndDate: ['', Validators.required,],
      LocationId: ['', Validators.required],
     
      
    });
  }
  
  saveProject(): void {
    debugger
    console.log(this.projectForm.value)
    if (this.projectForm.valid) {
      const projectData:project=this.projectForm.value;
      projectData.StatusId=1;
      // projectData.typeId=this.projectForm.get('types')?.value;
      // projectData.reasonId=this.projectForm.get('reasons')?.value;
      // projectData.categoryId=this.projectForm.get('category')?.value;

      console.log('Saving project data:', projectData); 

  
      this.apiService.saveProject(projectData).subscribe(response => {
        console.log('Project saved successfully',response);
        this.router.navigate(['/projectlist']);
      });
    } else {
      this.projectForm.markAllAsTouched();
    }
  }
  
  

  
    //   }, error => {
    //     console.error('Error saving project', error);
    //   });
    // } else {
    //   this.projectForm.markAllAsTouched();
   // }
    // if (this.projectForm.valid) {
    //   const projectData: project = this.projectForm.value;
    // //projectData.reasonId=this.projectForm.get('reason')?.value;
    //  projectData.reason = this.getReasonObject(projectData.reason);
    // projectData.types = this.getTypeObject(projectData.types);
    // projectData.division = this.getDivisionObject(projectData.division);
    // projectData.category = this.getCategoryObject(projectData.category);
    // projectData.priority = this.getPriorityObject(projectData.priority);
    // projectData.department = this.getDepartmentObject(projectData.department);
    // projectData.location = this.getLocationObject(projectData.location); 
    //   this.apiService.saveProject(projectData).subscribe(response=>{console.log(response);
        
    //   });
     
 
      
   // }
       
  //  }
  error: any = { isError: false, errorMessage: '' };

  DateComparision() {
    const startDate = new Date(this.projectForm.controls['startingDate'].value);
    const endDate = new Date(this.projectForm.controls['endingndDate'].value);
    if (endDate < startDate) {
      this.error = { isError: true, errorMessage: "End Date can't be before Start Date" };
    } else {
      this.error = { isError: false, errorMessage: '' };
    }
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
        case '/createproject':
          this.selectedIcon = 'productsIcon';
          break;
        default:
          this.selectedIcon = '';
          break;
      }
    }
    
  }
  
        //   response => {
        //     console.log(response);
        //     this.projectForm.reset();
        //     this.router.navigate(['/projectlist']);
        //   },
        //   error => {
        //     console.error('Error:', error);
        //   }
        // );
     // }
    //   console.log(this.projectForm.value)
    //   if (this.projectForm.valid) {
    //     const projectData = this.projectForm.value;
       
    //     // projectData.reason = this.getReasonObject(projectData.reason);
    //     // projectData.types = this.getTypeObject(projectData.types);
    //     // projectData.division = this.getDivisionObject(projectData.division);
    //     // projectData.category = this.getCategoryObject(projectData.category);
    //     // projectData.priority = this.getPriorityObject(projectData.priority);
    //     // projectData.department = this.getDepartmentObject(projectData.department);
    //     // projectData.location = this.getLocationObject(projectData.location);
      
    //     this.apiService.postRequest('api/project/saveproject').subscribe(
    //       response => {
    //         console.log(response);

    //         this.projectForm.reset();
    //         this.router.navigate(['projectlist']);
    //       },
    //       error => {
    //         console.error('Error:', error);
    //       }
    //     );
    //   }
    // }
    //}
     
     
  
  




import { category } from "./category.dto";
import { department } from "./department.dto";
import { division } from "./division.dto";
import { location } from "./location.dto";
import { priority } from "./priority.dto";
import { reason } from "./reason.dto";
import { status } from "./status.dto";
import { types } from "./types.dto";

export interface project{
    id ?:any;
    
    projectname?:string;
    reasonname?:string;
    typename?:string;
    departmentname?:string;
    divisionname?:string;
    locationname?:string;
    categoryname?:string;
    priorityname?:string;
    ReasonId?:number;
    LocationId?:number;
    PriorityId?:number;
    CategoryId:number;
    DepartmenIid?:number;
    DivisionId?:number;
    TypeId?:number
    StatusId:number

    statusType?:string
     StartingDate?:Date
     EndingndDate?:Date
    // projectname?: string;
    // reasonId?: number;
    
   
    // typeId?: number;
    
    // divisionId?: number;
    
    // departmentId?: number;
   
    // priorityId?: number;
    
    // categoryId?: number;
   
    // locationId?: number;
    
    // status?: string;
    
   
}
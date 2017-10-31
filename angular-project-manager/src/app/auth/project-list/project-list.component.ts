import { Component, OnInit } from '@angular/core';
import { ProjectListService } from './services/project-list.service';
import { Project } from './models/project.model';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  isLoading = true;
  projects: Array<Project>;

  constructor(private _projectListService: ProjectListService,
  private _http:Http) { }
 // ngOnInit se ejecuta una vez que mi componente esta listo
  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects(){
    // getAll = El pastelero
    this._projectListService.getAll().subscribe(
      (data: Project[])=>{
        //next
        this.projects = data;
        this.isLoading = false;
      },
      // Error
      err =>{
        console.error(err);
      },
      // Se acabaron los pasteles
      ()=>{
         console.log("Finished");
      }

    );

  }

  onDeleteProject(project: Project){
    this._projectListService.deleteProject(project).subscribe( (data)=>{
      console.log(data);
      this.getAllProjects();
     });
  }



}

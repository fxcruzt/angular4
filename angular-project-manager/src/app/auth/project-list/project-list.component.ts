import { Component, OnInit } from '@angular/core';
import { ProjectListService } from './services/project-list.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  isLoading = true;
  projects: Array<Project>;

  constructor(private _projectListService: ProjectListService) { }

  ngOnInit() {
    // getAll = El pastelero
     this._projectListService.getAll().subscribe(
        (data: Project[])=>{
          //next
          this.projects = data;
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

}

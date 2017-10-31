import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Project } from '../models/project.model';




 @Injectable()
 export class ProjectListService{
    

    constructor(private _http: Http){

    }
    getAll(): Observable<Array<Project>> {
          // Explicación Observable
            //next()
            // error()
            // onFinish()

        //  HTTP Request 
        //  Open  connection --- > Server 
        //  UI <------ Response
        const url = 'http://localhost:8085/projects';
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80iqnk0skp9Jp6NQ3'
          });
        const options = new RequestOptions({headers: headers});

        return this._http.get(url, options).map((response)=>{
            return response.json();
        });        
    }

    deleteProject(project:Project){
        const url =`http://localhost:8085/projects/${project.id}`;
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({
            headers: headers
        });
        return this._http.delete(url, options).map((response)=>{
            console.log(response);
            return response.json();
        })
    }

 }
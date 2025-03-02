import { Component } from '@angular/core';

interface Project {
    name: string;
    logo: string;
    image: string;
}

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    projects: Project[];

    ngOnInit() {
        this.projects = [
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png'
            },
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png'
            },
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png'
            },
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png'
            },
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png'
            },
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png'
            },
        ];
    }
}

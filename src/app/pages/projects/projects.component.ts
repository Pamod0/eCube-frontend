import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
    name: string;
    logo: string;
    image: string;
    link?: string;
}

@Component({
    selector: 'app-projects',
    imports: [RouterLink],
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
                image: '/assets/images/projects/oceanwatch.png',
                link: '/SLC'
            },
            {
                name: 'OceanWatch | MEPA - Beach Cleanup <br> Booking Management System',
                logo: '/assets/images/projects/logo-mepa.png',
                image: '/assets/images/projects/oceanwatch.png',
                link: '/SLC'
            },
            {
                name: 'Basketball Sri Lanka Website & Players Management System',
                logo: '/assets/images/projects/logo-slbf.png',
                image: '/assets/images/projects/oceanwatch.png',
                link: '/SLC'
            },
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png',
                link: '/SLC'
            },
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png',
                link: '/SLC'
            },
            {
                name: 'Sri Lanka Cricket <br> Vendor Management System',
                logo: '/assets/images/projects/logo-slc.png',
                image: '/assets/images/projects/oceanwatch.png',
                link: '/SLC'
            },
        ];
    }
}

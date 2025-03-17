import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from "../../layout/breadcrumb/breadcrumb.component";

interface Project {
    name: string;
    logo: string;
    image: string;
    link?: string[];
}

@Component({
    selector: 'app-projects',
    imports: [RouterLink, BreadcrumbComponent],
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
                image: '/assets/images/projects/slc.png',
                link: ['/projects', 'slcvms']
            },
            {
                name: 'OceanWatch | MEPA - Beach Cleanup <br> Booking Management System',
                logo: '/assets/images/projects/logo-mepa.png',
                image: '/assets/images/projects/oceanwatch.png',
                link: ['/projects', 'oceanwatch']
            },
            {
                name: 'Basketball Sri Lanka Website & Players <br> Management System',
                logo: '/assets/images/projects/logo-slbf.png',
                image: '/assets/images/projects/slbf.png',
                link: ['/projects', 'slbf']
            },
            {
                name: 'NOHSCOPE | MEPA <br> Monitoring System',
                logo: '/assets/images/projects/logo-mepa.png',
                image: '/assets/images/projects/noscop.png',
                link: ['/projects', 'nohscop']
            },
            {
                name: 'CycloneRCM <br> Brand Identity + Website',
                logo: '/assets/images/projects/logo-cyclone.png',
                image: '/assets/images/projects/cyclone.png',
                link: ['/projects', 'cyclone']
            },
            {
                name: 'TOURPILL Website & <br> Tours Management System',
                logo: '/assets/images/projects/logo-tp.png',
                image: '/assets/images/projects/tp.png',
                link: ['/projects', 'tourpill']
            }
        ];
    }
}

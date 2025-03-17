import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectService } from './project.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from "../../layout/breadcrumb/breadcrumb.component";

interface TeamMember {
    image: string;
    name: string;
    position: string;
}

@Component({
    selector: 'app-project-inner',
    imports: [MatIconModule, BreadcrumbComponent],
    templateUrl: './project-inner.component.html',
    styleUrl: './project-inner.component.scss'
})
export class ProjectInnerComponent {
    projects: any;
    project: any;
    teamMembers: TeamMember[];

    private route = inject(ActivatedRoute);
    private _projectService = inject(ProjectService);

    ngOnInit() {
        this._projectService.getProjects().subscribe((data) => {
            this.projects = data;
            // this.projects = Object.values(data); // Convert object to array
            console.log(this.projects);

            // this.route.paramMap.subscribe((params) => {
            //     const serviceKey = params.get('project');
            //     this.project = this.projects[serviceKey || 'slc-srs'];
            //     this.project = this.projects[serviceKey || 'meps-srs'];
            //     this.project = this.projects[serviceKey || 'basketball-srs'];
            //     this.project = this.projects[serviceKey || 'nohscop-srs'];
            //     this.project = this.projects[serviceKey || 'cyclone-srs'];
            //     this.project = this.projects[serviceKey || 'nohscop-srs'];
            // });

            this.route.paramMap.subscribe((params) => {
                const serviceKey = params.get('project');

                switch (serviceKey) {
                    case 'slcvms':
                        this.project = this.projects['slcvms'];
                        break;
                    case 'oceanwatch':
                        this.project = this.projects['oceanwatch'];
                        break;
                    case 'slbf':
                        this.project = this.projects['slbf'];
                        break;
                    case 'nohscop':
                        this.project = this.projects['nohscop'];
                        break;
                    case 'cyclone':
                        this.project = this.projects['cyclone'];
                        break;
                    case 'tourpill':
                        this.project = this.projects['tourpill'];
                        break;
                    default:
                        this.project = this.projects['slcvms'];
                }
            });

            console.log(this.project);
        });

        this.teamMembers = [
            {
                image: '/assets/images/careers/malith.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            },
            {
                image: '/assets/images/careers/divya.png',
                name: 'Divya Perera',
                position: 'Head of Digital'
            },

            {
                image: '/assets/images/careers/pamod.png',
                name: 'Pamod Peiris',
                position: 'Software Engineer'
            },
            {
                image: '/assets/images/careers/keheliya.png',
                name: 'Keheliya Manathunga',
                position: 'Frontend Engineer'
            }
        ];
    }
}

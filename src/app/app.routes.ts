import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './layout/test/test.component';
import { CareersComponent } from './pages/careers/careers.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { SoftwareServiceComponent } from './pages/service-inner/software-service/software-service.component';
import { WebDesignServiceComponent } from './pages/service-inner/web-design-service/web-design-service.component';
import { BlogPageComponent } from './pages/blog/blog-page/blog-page/blog-page.component';
import { UiUxDesignServiceComponent } from './pages/service-inner/ui-ux-design-service/ui-ux-design-service.component';
import { BrandIdentityServiceComponent } from './pages/service-inner/brand-identity-service/brand-identity-service.component';
// import { SrilankaCricketComponent } from './layout/our-projects/srilanka-cricket/srilanka-cricket.component';
// import { MepaComponent } from './layout/our-projects/mepa/mepa.component';
// import { SLBasketballComponent } from './layout/our-projects/sl-basketball/sl-basketball.component';
// import { NOHSCOPComponent } from './layout/our-projects/nohscop/nohscop.component';
// import { CycloneRCMComponent } from './layout/our-projects/cyclone-rcm/cyclone-rcm.component';
// import { TourpillComponent } from './layout/our-projects/tourpill/tourpill.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { ProjectInnerComponent } from './pages/project-inner/project-inner.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { JobVacancyComponent } from './pages/job-vacancy/job-vacancy.component';
import { JobApplicationFormComponent } from './pages/job-vacancy/job-application-form/job-application-form.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'projects-list',
        component: ProjectsComponent,
      },
      {
        path: 'projects/:project',
        component: ProjectInnerComponent,
      },
      {
        path: 'vacancies',
        component: JobVacancyComponent,
      },
    ],
  },
  {
    path: 'careers',
    component: CareersComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog',
    children: [
      {
        path: 'blog-page',
        component: BlogPageComponent,
      },
    ],
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'services',
    children: [
      {
        path: 'software',
        component: SoftwareServiceComponent,
      },
      {
        path: 'web-design',
        component: WebDesignServiceComponent,
      },
      {
        path: 'ui-ux-design',
        component: UiUxDesignServiceComponent,
      },
      {
        path: 'brand-identity',
        component: BrandIdentityServiceComponent,
      },
    ],
  },
  {
    path: 'blog-page',
    component: BlogPageComponent,
  },
  {
    path: 'form',
    component: JobApplicationFormComponent,
  },
  // {
  //     path: 'SLC',
  //     component: SrilankaCricketComponent
  // },
  // {
  //     path: 'mepa',
  //     component: MepaComponent
  // },
  // {
  //     path: 'sl-basketball',
  //     component: SLBasketballComponent
  // },
  // {
  //     path: 'nohscop',
  //     component: NOHSCOPComponent
  // },
  // {
  //     path: 'cyclone',
  //     component: CycloneRCMComponent
  // },
  // {
  //     path: 'tourpill',
  //     component: TourpillComponent
  // },
  {
    path: 'services/:service',
    component: TestPageComponent,
  },
];

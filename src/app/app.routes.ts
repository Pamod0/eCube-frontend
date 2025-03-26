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
import { TestPageComponent } from './pages/test-page/test-page.component';
import { ProjectInnerComponent } from './pages/project-inner/project-inner.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { JobVacancyComponent } from './pages/job-vacancy/job-vacancy.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { breadcrumb: 'Home' },
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        data: { breadcrumb: 'About Us' },
      },
      {
        path: 'projects-list',
        component: ProjectsComponent,
        data: { breadcrumb: 'Our Work' },
      },
      {
        path: 'projects/:project',
        component: ProjectInnerComponent,
        data: { breadcrumb: 'Projects' },
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
    path: 'blogs',
    component: BlogComponent,
  },
  {
    path: 'blog/:blog',
    component: BlogPageComponent,
  },
  // {
  //   path: 'blog',
  //   children: [
  //     {
  //       path: 'blog-page',
  //       component: BlogPageComponent,
  //     },
  //   ],
  // },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'services',
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: 'software',
        component: SoftwareServiceComponent,
        data: { breadcrumb: 'Software Devlopment' },
      },
      {
        path: 'web-design',
        component: WebDesignServiceComponent,
        data: { breadcrumb: 'Web Design' },
      },
      {
        path: 'ui-ux-design',
        component: UiUxDesignServiceComponent,
        data: { breadcrumb: 'UI/UX Design' },
      },
      {
        path: 'brand-identity',
        component: BrandIdentityServiceComponent,
        data: { breadcrumb: 'Brand Identity' },
      },
    ],
  },
  {
    path: 'blog-page',
    component: BlogPageComponent,
  },
  {
    path: 'form',
    // component: JobApplicationFormComponent,
    component: JobVacancyComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './layout/test/test.component';
import { CareersComponent } from './pages/careers/careers.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { SoftwareServiceComponent } from './pages/service-inner/software-service/software-service.component';
import { WebDesignServiceComponent } from './pages/service-inner/web-design-service/web-design-service.component';
import { BlogPageComponent } from './pages/blog/blog-page/blog-page/blog-page.component';
import { UiUxDesignServiceComponent } from './pages/service-inner/ui-ux-design-service/ui-ux-design-service.component';
import { BrandIdentityServiceComponent } from './pages/service-inner/brand-identity-service/brand-identity-service.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: 'careers',
        component: CareersComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'services',
        children: [
            {
                path: 'software',
                component: SoftwareServiceComponent
            },
            {
                path: 'web-design',
                component: WebDesignServiceComponent
            },
            {
                path: 'ui-ux-design',
                component: UiUxDesignServiceComponent
            },
            {
                path: 'brand-identity',
                component: BrandIdentityServiceComponent
            }
        ]
    },
    {
        path: 'blog-page',
        component: BlogPageComponent
    }
];

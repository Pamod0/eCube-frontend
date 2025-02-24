import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './layout/test/test.component';
import { CareersComponent } from './pages/careers/careers.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServiceInnerComponent } from './pages/service-inner/service-inner.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

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
        component: ServiceInnerComponent
    }
];

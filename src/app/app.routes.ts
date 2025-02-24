import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './layout/test/test.component';
import { CareersComponent } from './pages/careers/careers.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
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
    }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './layout/test/test.component';
import { CareersComponent } from './pages/careers/careers.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPageComponent } from './pages/blog/blog-page/blog-page/blog-page.component';
import { SrilankaCricketComponent } from './layout/our-projects/srilanka-cricket/srilanka-cricket.component';

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
    },
    {
        path: 'blog-page',
        component: BlogPageComponent
    },
    {
        path: 'SLC',
        component: SrilankaCricketComponent
    }
];

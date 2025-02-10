import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-hero',
    imports: [MatIconModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {

}

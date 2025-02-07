import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-hero',
    imports: [MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
    longText =
        'We harness AI to build high-quality websites and software in record time. Let’s accelerate your success.';
}

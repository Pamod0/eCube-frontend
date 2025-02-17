import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-hero',
    imports: [MatIconModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
    ngAfterViewInit() {
        const radios = document.querySelectorAll<HTMLInputElement>("input[name='slider']");
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let currentIndex = 0;
        console.log('currentIndex', currentIndex);

        function updateSlide(index: number) {
            radios[index].checked = true;
        }

        nextBtn?.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % radios.length;
            console.log('next-currentIndex', currentIndex);
            updateSlide(currentIndex);
        });

        prevBtn?.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + radios.length) % radios.length;
            updateSlide(currentIndex);
        });
    }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  imports: [MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to the top
  }

  ngAfterViewInit() {
    const radios = document.querySelectorAll<HTMLInputElement>("input[name='slider']");
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    console.log('currentIndex', currentIndex);
    console.log('radios-length', radios.length);

    function updateSlide(index: number) {
      console.log('updateSlide-index', index);
      radios[index].checked = true;
    }
    function next() {
      currentIndex = (currentIndex + 1) % radios.length;
      updateSlide(currentIndex);
    }
    function prev() {
      currentIndex = (currentIndex - 1 + radios.length) % radios.length;
      updateSlide(currentIndex);
    }

    nextBtn?.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % radios.length;
      updateSlide(currentIndex);
    });

    prevBtn?.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + radios.length) % radios.length;
      updateSlide(currentIndex);
    });
  }
}

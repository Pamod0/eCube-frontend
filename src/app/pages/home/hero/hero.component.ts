import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  private currentIndex = 0;
  private radios: NodeListOf<HTMLInputElement> | null = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    this.initializeSlider();
  }

  private initializeSlider(): void {
    this.radios = this.elementRef.nativeElement.querySelectorAll(
      "input[name='slider']",
    ) as NodeListOf<HTMLInputElement>;

    if (!this.radios || this.radios.length === 0) {
      console.warn('No radio elements found for slider');
      return;
    }

    const prevBtn = this.elementRef.nativeElement.querySelector('#prevBtn');
    const nextBtn = this.elementRef.nativeElement.querySelector('#nextBtn');

    if (prevBtn) {
      this.renderer.listen(prevBtn, 'click', () => this.navigateSlide('prev'));
    }

    if (nextBtn) {
      this.renderer.listen(nextBtn, 'click', () => this.navigateSlide('next'));
    }
  }

  private navigateSlide(direction: 'next' | 'prev'): void {
    if (!this.radios) return;

    const totalSlides = this.radios.length;

    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % totalSlides;
    } else {
      this.currentIndex = (this.currentIndex - 1 + totalSlides) % totalSlides;
    }

    this.updateSlide();
  }

  private updateSlide(): void {
    if (!this.radios) return;

    this.renderer.setProperty(this.radios[this.currentIndex], 'checked', true);
  }
}

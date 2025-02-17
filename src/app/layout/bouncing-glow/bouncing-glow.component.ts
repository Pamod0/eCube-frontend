import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-bouncing-glow',
    imports: [],
    templateUrl: './bouncing-glow.component.html',
    styleUrl: './bouncing-glow.component.scss'
})
export class BouncingGlowComponent {
    private glowElement!: HTMLElement;
    private x = Math.random() * window.innerWidth;
    private y = Math.random() * window.innerHeight;
    private speedX = 3;
    private speedY = 3;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.glowElement = this.el.nativeElement.querySelector('.bouncing-glow');
        this.animateGlow();
    }

    animateGlow() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x + this.glowElement.clientWidth > window.innerWidth || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.glowElement.clientHeight > window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }

        this.renderer.setStyle(this.glowElement, 'transform', `translate(${this.x}px, ${this.y}px)`);

        requestAnimationFrame(() => this.animateGlow());
    }
}

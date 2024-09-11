/**
 * This code was generated by Builder.io.
 */
import { NgClass, NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"],
})
export class ProgressBarComponent {
  @Input() currentStep: number = 1;
  @Input() steps: string[] = [];
  get progressPercentage(): number {
    return (this.currentStep / this.steps.length) * 100;
  }

  getStepStatus(step: number): string {
    if (step < this.currentStep) return "completed";
    if (step === this.currentStep) return "active";
    return "upcoming";
  }
}

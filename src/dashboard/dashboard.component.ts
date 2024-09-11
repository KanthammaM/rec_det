import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../receiver-details/header/header.component';
import { UserInfoComponent } from '../receiver-details/user-info/user-info.component';
import { ProgressBarComponent } from '../receiver-details/progress-bar/progress-bar.component';
import { ReceiverFormComponent } from '../receiver-details/receiver-form/receiver-form.component';
import { SummaryComponent } from '../receiver-details/summary/summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    UserInfoComponent,
    ProgressBarComponent,
    ReceiverFormComponent,
    SummaryComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  progressSteps: string[] = [
    "Send",
    "ID Verification",
    "Sender Details",
    "Receiver Details",
    "Compliance",
    "Fraud Consent",
    "Signature",
    "Receipt",
  ];
  currentStep: number = 4;
}
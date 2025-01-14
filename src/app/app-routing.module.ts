/**
 * This code was generated by Builder.io.
 */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "../login/login.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

export const routes: Routes = [
  // { path: "login", component: LoginPageComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  
    { path: 'login', component: LoginPageComponent },
  
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        {
          path: 'receiver-details',
          loadComponent: () => import('../receiver-details/receiver-form/receiver-form.component').then(m => m.ReceiverFormComponent)
        },
        { path: '', redirectTo: 'receiver-details', pathMatch: 'full' }
      ]
    },
  { path: "**", redirectTo: "/receiver-details" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
  declarations: [],
})
export class AppRoutingModule {}

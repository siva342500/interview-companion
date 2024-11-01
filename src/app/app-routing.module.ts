import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mobile-number-otp',
    loadChildren: () => import('./mobile-number-otp/mobile-number-otp.module').then( m => m.MobileNumberOtpPageModule)
  },
  {
    path: 'reserve-companion',
    loadChildren: () => import('./reserve-companion/reserve-companion.module').then( m => m.ReserveCompanionPageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'resume-prep',
    loadChildren: () => import('./resume-prep/resume-prep.module').then( m => m.ResumePrepPageModule)
  },
  {
    path: 'mock-interview',
    loadChildren: () => import('./mock-interview/mock-interview.module').then( m => m.MockInterviewPageModule)
  },
  {
    path: 'interview',
    loadChildren: () => import('./interview/interview.module').then( m => m.InterviewPageModule)
  },
  {
    path: 'coding-test',
    loadChildren: () => import('./coding-test/coding-test.module').then( m => m.CodingTestPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'personal-details',
    loadChildren: () => import('./personal-details/personal-details.module').then( m => m.PersonalDetailsPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'refer-afriend',
    loadChildren: () => import('./refer-afriend/refer-afriend.module').then( m => m.ReferAFriendPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then( m => m.LegalPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'available-companions',
    loadChildren: () => import('./available-companions/available-companions.module').then( m => m.AvailableCompanionsPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('./payment-details/payment-details.module').then( m => m.PaymentDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

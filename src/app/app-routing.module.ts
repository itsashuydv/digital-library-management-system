import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './user/faculty.component';
import { LeaveComponent } from './user/leave/leave.component';
import { MeetingnotificationComponent } from './user/meetingnotification/meetingnotification.component';
import { QuestionpaperComponent } from './user/questionpaper/questionpaper.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
// import { CreatemeetingComponent } from './admin/createmeeting/createmeeting.component';
// import { CreatemeetingComponent } from './admin/createmeeting/createmeeting.component';
// import { ForumComponent } from './admin/forum/forum.component';
import { LeaveapprovelComponent } from './admin/leaveapprovel/leaveapprovel.component';
import { ManagefacultyComponent } from './admin/managefaculty/managefaculty.component';
import { PrincipalComponent } from './admin/principal.component';
import { QpapprovelComponent } from './admin/qpapprovel/qpapprovel.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { BookingComponent } from './user/booking/booking.component';
import { ReceiptComponent } from './user/receipt/receipt.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import { AddbookComponent } from './admin/addbook/addbook.component';
import { FeedbackreviewComponent } from './admin/feedbackreview/feedbackreview.component';
import { ReplyComponent } from './admin/feedbackreview/reply/reply.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'principal', component: PrincipalComponent, children: [
      { path: 'leaveapprovel', component: LeaveapprovelComponent },
      { path: 'addbook', component: AddbookComponent },
      { path: 'feedbackreview', component: FeedbackreviewComponent },
      { path: 'feedbackreview/reply', component: ReplyComponent },
      { path: 'managefaculty', component: ManagefacultyComponent },
      { path: 'qpappeovel', component: QpapprovelComponent },

    ]
  },
  
  {
    path: 'faculty', component: FacultyComponent, children: [
      //  { path: 'forum', component: ForumComponent },
      { path: 'leave', component: LeaveComponent },
      { path:'booking',component:BookingComponent},
      { path:'feedback',component:FeedbackComponent},
      { path:'booking/receipt',component:ReceiptComponent},
      { path: 'metingnotifiation', component: MeetingnotificationComponent },
      { path: 'addqp', component: QuestionpaperComponent },
      
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-login', component: UserLoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './admin/principal.component';
import { FacultyComponent } from './user/faculty.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { PrinheaderComponent } from './admin/prinheader/prinheader.component';
import { FacultysidebarComponent } from './user/facultysidebar/facultysidebar.component';
import { FacultyheaderComponent } from './user/facultyheader/facultyheader.component';
import { QuestionpaperComponent } from './user/questionpaper/questionpaper.component';
import { MeetingnotificationComponent } from './user/meetingnotification/meetingnotification.component';
import { ForumComponent } from './user/forum/forum.component';
import { LeaveComponent } from './user/leave/leave.component';
import { AddfacultyComponent } from './admin/addfaculty/addfaculty.component';
import { ManagefacultyComponent } from './admin/managefaculty/managefaculty.component';
import { CreatemeetingComponent } from './admin/createmeeting/createmeeting.component';
import { LeaveapprovelComponent } from './admin/leaveapprovel/leaveapprovel.component';
import { QpapprovelComponent } from './admin/qpapprovel/qpapprovel.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { BookingComponent } from './user/booking/booking.component';
import { ReceiptComponent } from './user/receipt/receipt.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import { AddbookComponent } from './admin/addbook/addbook.component';
import { FeedbackreviewComponent } from './admin/feedbackreview/feedbackreview.component';
import { ReplyComponent } from './admin/feedbackreview/reply/reply.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PrincipalComponent,
    FacultyComponent,
    SignupComponent,
    LoginComponent,
    SidebarComponent,
    PrinheaderComponent,
    FacultysidebarComponent,
    FacultyheaderComponent,
    QuestionpaperComponent,
    MeetingnotificationComponent,
    ForumComponent,
    LeaveComponent,
    AddfacultyComponent,
    ManagefacultyComponent,
    CreatemeetingComponent,
    LeaveapprovelComponent,
    QpapprovelComponent,
   UserLoginComponent,
   BookingComponent,
   BookingComponent,
   ReceiptComponent,
   FeedbackComponent,
   AddbookComponent,
   FeedbackreviewComponent,
   ReplyComponent
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

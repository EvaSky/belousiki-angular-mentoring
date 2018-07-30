import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CoursesModule } from './modules/courses/courses.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursePageComponent } from './pages/add-course-page/add-course-page.component';
import { CoursesComponent } from './modules/courses/courses.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'courses/new', component: AddCoursePageComponent},
    {path: 'courses/:id', component: AddCoursePageComponent}
] 
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
        LoginPageComponent,
        AddCoursePageComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        CoursesModule,
        AuthModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

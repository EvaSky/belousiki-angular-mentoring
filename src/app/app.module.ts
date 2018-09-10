import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesModule } from './modules/courses/courses.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursePageComponent } from './pages/add-course-page/add-course-page.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuardService } from './modules/auth/services/auth-guard.service';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './components/loader/services/loader.service';

export const ROUTES: Routes = [
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginPageComponent},
    {path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuardService]},
    {path: 'courses/:id', component: AddCoursePageComponent, canActivate: [AuthGuardService]},
    {path: '**', component: PageNotFoundComponent}
];
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginPageComponent,
        AddCoursePageComponent,
        PageNotFoundComponent,
        LoaderComponent
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        BreadcrumbsModule,
        CoursesModule,
        AuthModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    providers: [LoaderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

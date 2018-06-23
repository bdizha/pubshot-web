import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ShotsComponent} from "./components/shots/shots.component";
import {ShotComponent} from "./components/shot/shot.component";
import {PasswordEmailComponent} from "./components/passwords/email/email.component";
import {PasswordResetComponent} from "./components/passwords/reset/reset.component";
import {PageComponent} from "./components/page/page.component";
import {ShotModalComponent} from "./components/shot/shot.modal.component";
import {AuthComponent} from "./components/common/auth.component";
import {
    AppRouterService,
    AuthService,
    CommonService,
    PageService,
    ShotService,
    UserService,
    ValidateService
} from "./services";
import {AuthGuard, NoAuthGuard} from "./guard";
import {JwtInterceptor} from "./helpers";

const appRoutes: Routes = [
    {path: '', component: HomeComponent, data: {isDark: false}},
    {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard], data: {isDark: true, isAuth: true}},
    {path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard], data: {isDark: true, isAuth: true}},
    {path: 'password/email', component: PasswordEmailComponent, canActivate: [NoAuthGuard], data: {isDark: true, isAuth: true}},
    {path: 'password/reset', component: PasswordResetComponent, canActivate: [NoAuthGuard], data: {isDark: true, isAuth: true}},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: {isDark: false}},
    {path: 'page/:slug', component: PageComponent, data: {isDark: true}},
    {path: 'shot/:slug', component: ShotModalComponent, data: {isDark: true, isModal: true}},
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        WelcomeComponent,
        ProfileComponent,
        ShotsComponent,
        ShotComponent,
        PasswordEmailComponent,
        PasswordResetComponent,
        PageComponent,
        ShotModalComponent,
        AuthComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [
        ValidateService,
        AuthService,
        AuthGuard,
        NoAuthGuard,
        CommonService,
        ShotService,
        PageService,
        AppRouterService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {AboutModule} from './components/about/about.module';
import { DonComponent } from './components/don/don.component';
import { ContactComponent } from './components/contact/contact.component';
import { AideComponent } from './components/aide/aide.component';
import {AideModule} from './components/aide/aide.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './components/news/news.component';
import { LatestnewsComponent } from './components/news/latestnews/latestnews.component';
import { ManifestationComponent } from './components/news/manifestation/manifestation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NavBarService } from './components/nav-bar/nav-bar.service';
import { LoginComponent } from './components/admin/login/login.component';
import { httpInterceptorProviders } from './components/services/auth/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { SideBarComponent } from './components/admin/side-bar/side-bar.component';
import { ActualitesComponent } from './components/admin/dashboard/actualites/actualites.component';
import { AddActualitesComponent } from './components/admin/dashboard/actualites/add-actualites/add-actualites.component';
import { EditActualitesComponent } from './components/admin/dashboard/actualites/edit-actualites/edit-actualites.component';
import { EvenementsComponent } from './components/admin/dashboard/evenements/evenements.component';
import { AddEvenementsComponent } from './components/admin/dashboard/evenements/add-evenements/add-evenements.component';
import { EditEvenementsComponent } from './components/admin/dashboard/evenements/edit-evenements/edit-evenements.component';
import { DemandesComponent } from './components/admin/dashboard/demandes/demandes.component';
import { AddDemandesComponent } from './components/admin/dashboard/demandes/add-demandes/add-demandes.component';
import { EditDemandesComponent } from './components/admin/dashboard/demandes/edit-demandes/edit-demandes.component';
import { DonationsComponent } from './components/admin/dashboard/donations/donations.component';
import { AddDonationsComponent } from './components/admin/dashboard/donations/add-donations/add-donations.component';
import { EditDonationsComponent } from './components/admin/dashboard/donations/edit-donations/edit-donations.component';
import { MembresComponent } from './components/admin/dashboard/membres/membres.component';
import { AddMembresComponent } from './components/admin/dashboard/membres/add-membres/add-membres.component';
import { EditMembresComponent } from './components/admin/dashboard/membres/edit-membres/edit-membres.component';
import { OurServicesListComponent } from './components/admin/dashboard/our-services/our-services.component';
import { AddOurServicesComponent } from './components/admin/dashboard/our-services/add-our-services/add-our-services.component';
import { EditOurServicesComponent } from './components/admin/dashboard/our-services/edit-our-services/edit-our-services.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    DonComponent,
    ContactComponent,
    AideComponent,
    NewsComponent,
    LatestnewsComponent,
    ManifestationComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent,
    OurServicesComponent,
    SideBarComponent,
    ActualitesComponent,
    AddActualitesComponent,
    EditActualitesComponent,
    EvenementsComponent,
    AddEvenementsComponent,
    EditEvenementsComponent,
    DemandesComponent,
    AddDemandesComponent,
    EditDemandesComponent,
    DonationsComponent,
    AddDonationsComponent,
    EditDonationsComponent,
    MembresComponent,
    AddMembresComponent,
    EditMembresComponent,
    OurServicesListComponent,
    AddOurServicesComponent,
    EditOurServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AideModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [NavBarService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

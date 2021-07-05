import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {DefinitionComponent} from './components/about/definition/definition.component';
import {StructureComponent} from './components/about/structure/structure.component';
import {DonComponent} from './components/don/don.component';
import {ContactComponent} from './components/contact/contact.component';
import { AideComponent } from './components/aide/aide.component';
import { GarantieComponent } from './components/aide/garantie/garantie.component';
import { ServiceComponent } from './components/aide/service/service.component';
import { InscritComponent } from './components/aide/inscrit/inscrit.component';
import { ImportanceComponent } from './components/aide/importance/importance.component';
import {NewsComponent} from './components/news/news.component';
import {LatestnewsComponent} from './components/news/latestnews/latestnews.component';
import {ManifestationComponent} from './components/news/manifestation/manifestation.component';
import {OurServicesComponent} from './components/our-services/our-services.component';
/* Dashboard */
import {AdminComponent} from './components/admin/admin.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {LoginComponent} from './components/admin/login/login.component';

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


const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'home',  component : HomeComponent},
  { path: 'about',  component : AboutComponent},
  { path: 'definition',  component : DefinitionComponent},
  { path: 'structure',  component : StructureComponent},
  { path: 'donate',  component : DonComponent},
  { path: 'contact',  component : ContactComponent},
  { path: 'aide', component: AideComponent},
  { path : 'garantie', component: GarantieComponent},
  { path : 'service', component: ServiceComponent} ,
  { path : 'inscrit', component: InscritComponent} ,
  { path : 'importance', component : ImportanceComponent},
  { path : 'news', component : NewsComponent},
  { path : 'latestnews', component : LatestnewsComponent},
  { path : 'manifestation', component : ManifestationComponent},
  { path:  'services', component: OurServicesComponent },
  { path:  'services/:caller', component: OurServicesComponent },
  { path:  'login', component: LoginComponent },
  { path:  'admin', component: AdminComponent },
  { path:  'dashboard', component: DashboardComponent },

  { path:  'dashboard/actualites', component: ActualitesComponent },
  { path:  'dashboard/actualites/add', component: AddActualitesComponent },
  { path:  'dashboard/actualites/edit', component: EditActualitesComponent },

  { path:  'dashboard/evenements', component: EvenementsComponent },
  { path:  'dashboard/evenements/add', component: AddEvenementsComponent },
  { path:  'dashboard/evenements/edit', component: EditEvenementsComponent },

  { path:  'dashboard/demandes', component: DemandesComponent },
  { path:  'dashboard/demandes/add', component: AddDemandesComponent },
  { path:  'dashboard/demandes/edit', component: EditDemandesComponent },

  { path:  'dashboard/donations', component: DonationsComponent },
  { path:  'dashboard/donations/add', component: AddDonationsComponent },
  { path:  'dashboard/donations/edit', component: EditDonationsComponent },

  { path:  'dashboard/membres', component: MembresComponent },
  { path:  'dashboard/membres/add', component: AddMembresComponent },
  { path:  'dashboard/membres/edit', component: EditMembresComponent },

  { path:  'dashboard/services', component: OurServicesListComponent},
  { path:  'dashboard/services/add', component: AddOurServicesComponent },
  { path:  'dashboard/services/edit', component: EditOurServicesComponent },

  // {
  //   path: 'news',
  //   component: NewsComponent, // this is the component with the <router-outlet> in the template
  //   children: [
  //       {
  //        path: 'latestnews',
  //       component: latestnews, // child route component that the router renders
  //       },
  //       {
  //         path: 'manifestation',
  //         component: ManifestationComponent, // another child route component that the router renders
  //        }
  //  ]
  // }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

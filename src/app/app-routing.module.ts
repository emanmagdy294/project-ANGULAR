import { NotfoundComponent } from './notfound/notfound.component';
import { StartComponent } from './start/start.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'', redirectTo:'start', pathMatch:'full'},
{path:'about' , component:AboutComponent},
{path:'contact' , component:ContactComponent},
{path:'portfolio' , component:PortfolioComponent},
{path:'start' , component:StartComponent},
{path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

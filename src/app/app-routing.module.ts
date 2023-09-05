import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "menu", component:MenuComponent},
  {path:'menu/:id', component:MenupageComponent},
  {path: "about", component:AboutComponent},
  {path: "contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

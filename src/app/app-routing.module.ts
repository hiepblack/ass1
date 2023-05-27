import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TodoComponent } from './pages/todo/todo.component';
import { DetailproductComponent } from './pages/detailproduct/detailproduct.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'update/:id', component: DetailproductComponent },
  { path: 'add', component: AddProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {InicioSesionService} from './servicios/inicio-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class TipusuGuard implements CanActivate {

  constructor(private iniciosesion:InicioSesionService,private router:Router){}
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  
  canActivate(): boolean{
    if(this.iniciosesion.tipousuario()=='C'){
      return true
    }else{
      this.router.navigate(['/nuevacita'])
    }
  }
}

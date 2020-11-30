import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {InicioSesionService} from './servicios/inicio-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaTipousuGuard implements CanActivate {

  constructor(private router:Router, private iniciosesion:InicioSesionService){}
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
 
  canActivate(): boolean{
    if(this.iniciosesion.tipousuario()=='E'){
      return true
    }else{
      this.router.navigate(['/arduinos'])
    }
  }

}

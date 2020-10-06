import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title: any;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const rt = this.getChild(this.activatedRoute)
        rt.data.subscribe(data => {
          console.log(data);
          this.titleService.setTitle(`${data.title} - BNF Events & Entertainment`)
        })
      })

  }


  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }

}

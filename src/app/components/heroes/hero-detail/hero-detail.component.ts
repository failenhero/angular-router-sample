import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../../../shared/services/hero.service";
import {Observable} from "rxjs";
import {Hero} from "../../../shared/models/hero.model";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;
  heroId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.heroId = params.get('id')!;
        return this.heroService.getHero(this.heroId);
      })
    )
  }

  gotoHeroes() {
    this.router.navigate(['/heroes', {heroId: this.heroId ?? null}])
  }
}

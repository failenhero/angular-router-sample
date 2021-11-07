import {Component, OnInit} from '@angular/core';
import {Hero} from "../../../shared/models/hero.model";
import {HeroService} from "../../../shared/services/hero.service";
import {MessageService} from "../../../shared/services/message.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  selectedId!: number;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('heroId')!);
        return this.heroService.getHeroes();
      })
    )
  }
}

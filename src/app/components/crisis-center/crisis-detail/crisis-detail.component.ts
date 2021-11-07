import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Crisis} from "../../../shared/models/crisis.model";
import {CrisisService} from "../../../shared/services/crisis.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis$ = new Observable<Crisis>();
  crisisId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService
  ) { }

  ngOnInit(): void {
    this.crisis$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.crisisId = params.get('id')!;
        return this.crisisService.getCrisis(this.crisisId)
      })
    )
  }

  gotoCrises(): void {
    this.router.navigate(
      ['../', {crisisId: this.crisisId}],
      {relativeTo: this.activatedRoute}
    )
  }
}

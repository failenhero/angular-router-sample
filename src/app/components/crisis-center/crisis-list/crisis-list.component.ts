import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Crisis} from "../../../shared/models/crisis.model";
import {CrisisService} from "../../../shared/services/crisis.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises$ = new Observable<Crisis[]>();
  selectedId: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crisisService: CrisisService
  ) { }

  ngOnInit(): void {
    this.crises$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id')!);
        return this.crisisService.getCrises();
      })
    )
  }
}

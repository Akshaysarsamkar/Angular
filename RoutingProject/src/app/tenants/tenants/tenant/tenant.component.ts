import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tenant',
  imports: [RouterLink, RouterLink],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.css',
})
export class TenantComponent implements OnInit, OnDestroy {
  tenant!: { id: number; name: string };
  data!: Subscription;
  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.routes.snapshot);
    this.tenant = {
      id: this.routes.snapshot.params['id'],
      name: this.routes.snapshot.params['name'],
    };

    this.data = this.routes.params.subscribe((params: Params) => {
      (this.tenant.id = params['id']),(this.tenant.name = params['name']);
    });
  }

  ngOnDestroy(): void {
    this.data.unsubscribe();
  }
}

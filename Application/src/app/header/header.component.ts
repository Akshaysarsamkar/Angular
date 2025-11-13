import { Component, EventEmitter, Output } from '@angular/core';
import { MyDropdownDirective } from '../shared/my-dropdown.directive';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { StorageService } from '../shared/services/apiHandling/storage.service';

@Component({
  selector: 'app-header',
  imports: [MyDropdownDirective, RouterLink, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() onSelection: EventEmitter<string> = new EventEmitter();

  constructor(private readonly storageService: StorageService) {}

  onSelect(pageName: string) {
    this.onSelection.emit(pageName);
  }

  onSave() {
    this.storageService.storeTeams();
  }

  fetchData(){
    this.storageService.fetchData()
  }



}

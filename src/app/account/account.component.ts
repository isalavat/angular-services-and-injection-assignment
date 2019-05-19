import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountsService} from '../accounts.service';
/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Simple component representing an account.
 * This component uses AccountsService, that will be
 * injected from  Angular.
 * @made_by Salavat
 */
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input() account: { status: string, accountName: string};
  @Input()id: number;
  /**
   * Service Injection inside constructor
   * @param accountsService
   */
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  onSetStatus(status: string) {
    this.accountsService.onStatusChanged(this.id, status);
  }
}

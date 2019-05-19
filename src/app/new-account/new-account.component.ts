import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountsService} from '../accounts.service';
/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Simple component allowing to create an new account.
 * This component uses AccountsService, that will be
 * injected from  Angular.
 * @made_by Salavat
 */
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  /**
   * Service Injection inside constructor
   * @param accountsService
   */
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  onAddAccount(accountName: string, status: string) {
    this.accountsService.onAccountAdded(accountName, status);
  }

}

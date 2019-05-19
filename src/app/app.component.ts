import {Component, OnInit} from '@angular/core';
import {AccountsService} from './accounts.service';
/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Simple component containing array of account.
 * This component uses AccountsService, that will be
 * injected from  Angular.
 * @made_by Salavat
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  /**
   * Service Injection inside constructor
   * @param accountsService
   */
  constructor(private accountsService: AccountsService) {}
  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}

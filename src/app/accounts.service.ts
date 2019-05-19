import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Service managing an array of accounts. It provides
 * methods for adding new accounts and changing some
 * properties of account.
 * @made_by Salavat
 */

/**
 * @Injectable() allows this service to be injectable, that
 * means other services can be injected into this service too
 */
@Injectable()
export class AccountsService {
  accounts: {name: string, status: string}[] = [];
  /**
   * Service Injection inside constructor
   * @param accountsService
   */
  constructor(private loggingService: LoggingService) {}
  onAccountAdded(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }
  onStatusChanged(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}

/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Simple Service for logging
 * @made_by Salavat
 */
export class LoggingService {
  logStatusChange(status: string) {
    console.log('Status was changed. New status is ' + status);
  }
}

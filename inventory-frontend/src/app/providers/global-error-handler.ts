
import { Injectable, ErrorHandler } from '@angular/core';
import { ErrorDialogService } from '../services/error-dialog.service';

@Injectable()
export class GlobalErrorHandler  {
  constructor(private errorDialogService: ErrorDialogService) {}
 // implements ErrorHandler
  // handleError(error: Error) {
  //   console.log(error);
  //   this.errorDialogService.openDialog(
  //     error.message || 'Undefined client error'
  //   );
  // }
}

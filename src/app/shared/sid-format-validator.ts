import { AbstractControl } from '@angular/forms';
export function ValidateSidFormat(control: AbstractControl) {
  if (control.value[0] == 'A' && control.value[1] == '2') {
    return null;
  } else {
    return {
      'sidformat': true
    }
  }
}

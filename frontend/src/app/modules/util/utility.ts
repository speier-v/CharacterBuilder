import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validateInputsHaveSameValue = (
  firstControlName: string,
  secondControlName: string,
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const firstControl = control.get(firstControlName);
    const secondControl = control.get(secondControlName);

    if (!firstControl?.value || !secondControl?.value) {
      return null;
    }

    return firstControl.value === secondControl.value
      ? null
      : { sameValue: true }; // return null if values match
  };
};

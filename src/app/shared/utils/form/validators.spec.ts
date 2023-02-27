import {AbstractControl} from "@angular/forms";
import {ValidateAcao} from "src/app/shared/utils/form/validators";

it('should return right error if value is incorrect', () => {
  const control = {value: 'test'} as AbstractControl;
  const res = ValidateAcao(control);
  expect(res).toEqual({'not-from-list': true})
})
it('should return null if value is correct', () => {
  const control = {value: {}} as AbstractControl;
  const res = ValidateAcao(control);
  expect(res).toEqual(null)
})

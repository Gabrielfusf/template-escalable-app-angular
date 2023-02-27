import { getFieldErrorFromForm } from "src/app/shared/utils/form/form";
import { AbstractControl, FormBuilder } from "@angular/forms";
import {
  ErrorHelpers,
  ErrorNames,
} from "src/app/shared/utils/form/errors";

const fb = new FormBuilder();
const fakeForm = fb.group({ test: null });
describe("getFieldErrorFromForm", () => {
  it("should return null if no form/fieldName", () => {
    expect(getFieldErrorFromForm(fakeForm)).toBeNull();
    expect(getFieldErrorFromForm(undefined, "test")).toBeNull();
    expect(getFieldErrorFromForm()).toBeNull();
    expect(getFieldErrorFromForm(fakeForm, "test")).not.toBeNull();
  });
  describe("dirty field", () => {
    let control: AbstractControl;
    beforeEach(() => {
      control = fakeForm.controls["test"];
      control.markAsDirty();
    });
    it("should return string if error doesnt need body", () => {
      control.setErrors({ [ErrorNames.Required]: true });
      expect(getFieldErrorFromForm(fakeForm, "test")).toBe(
        ErrorHelpers[ErrorNames.Required]
      );
    });
    it("should pass values if error require body", () => {
      const errorBody = { min: 2 };
      control.setErrors({ [ErrorNames.Min]: errorBody });
      expect(getFieldErrorFromForm(fakeForm, "test")).toBe(
        ErrorHelpers[ErrorNames.Min](errorBody)
      );
    });
  });
});
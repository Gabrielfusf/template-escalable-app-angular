import { FormGroup } from "@angular/forms";
import {
  ErrorHelpers,
  ErrorNames,
} from "src/app/shared/utils/form/errors";

export const markAllFieldAsDirty = (form?: FormGroup) => {
  if (form)
    Object.values(form.controls).forEach((control) => control.markAsDirty());
};

export const getFieldErrorFromForm = (
  form?: FormGroup,
  fieldName?: string
): string | null => {
  if (form && fieldName) {
    const field = form.get(fieldName);
    const dirty = field?.dirty;
    const errors = field?.errors;

    if (dirty && errors) {
      const possibleErrorNames = Object.values(ErrorNames);
      const errorLength = possibleErrorNames.length;

      for (let i = 0; i <= errorLength; i++) {
        const actualErrorName = possibleErrorNames[i];
        const errorBody = errors[actualErrorName];
        if (errorBody) {
          if (typeof ErrorHelpers[actualErrorName] === "string") {
            // @ts-ignore
            return ErrorHelpers[actualErrorName];
          } else {
            // @ts-ignore
            return ErrorHelpers[actualErrorName](errorBody);
          }
        }
      }
    }
  }
  return null;
};

export const isValidImage = (file: File) => {
  return file.type.match(/image\/*/);
};

import { AbstractControl } from "@angular/forms";
import { ErrorNames } from "src/app/shared/utils/form/errors";

export function ValidateAcao(
  control: AbstractControl
): { [key: string]: any } | null {
  if (typeof control.value === "string")
    return { [ErrorNames.NotFromList]: true };
  return null;
}


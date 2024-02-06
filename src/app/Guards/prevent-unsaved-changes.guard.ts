import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../Components/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<
  MemberEditComponent
> = (component, currentRoute, currentState, nextState) => {
  if (component.editProfileForm.dirty) {
    return confirm(
      'Are you sure you want to continue? Any changes will be lost.'
    );
  }
  return true;
};

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-pwa-jobs',
  template: `
    <p>
      jobs works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsComponent {}

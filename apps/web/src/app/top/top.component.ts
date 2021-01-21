import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-pwa-top',
  template: `
    <p>
      top works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopComponent {}
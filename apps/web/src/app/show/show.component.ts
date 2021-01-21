import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-pwa-show',
  template: `
    <p>
      show works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowComponent {}

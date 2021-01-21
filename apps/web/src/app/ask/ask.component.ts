import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-pwa-ask',
  template: `
    <p>
      ask works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AskComponent {}
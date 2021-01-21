import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-pwa-news',
  template: `
    <p>
      news works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {}

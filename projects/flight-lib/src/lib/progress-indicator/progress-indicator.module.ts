import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ProgressIndicatorService } from './progress-indicator-service/progress-indicator.service';


export interface ProgressIndicatorModuleConfig {
  timeoutInMillis: number;
}

@NgModule({
  declarations: [ProgressIndicatorComponent],
  exports: [ProgressIndicatorComponent],
  imports: [
    CommonModule
  ]
})
export class ProgressIndicatorModule {
  static forRoot(config?: ProgressIndicatorModuleConfig): ModuleWithProviders {
    return {
      ngModule: ProgressIndicatorModule,
      providers: []
    };
  }
}

import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import { EDITOR_WIDGETS, CmsComponentConfig } from '@angular-cms/core';

import { BaseLayoutComponent } from '../shared/base-layout.component';
import { WidgetService } from '../services/widget.service';

@Component({
    template: `<cms-layout [rightTabs]="rightTabs" [leftTabs]="leftTabs"></cms-layout>`
})
export class EditorComponent extends BaseLayoutComponent {

    constructor(
        @Inject(EDITOR_WIDGETS) private editorWidgets: CmsComponentConfig[][],
        _changeDetectionRef: ChangeDetectorRef,
        widgetService: WidgetService) {
        super(_changeDetectionRef, widgetService);
        this.cmsWidgets = this.getCmsWidgets();
    }

    protected getCmsWidgets(): Array<CmsComponentConfig> {
        return this.editorWidgets.reduce((a, b) => a.concat(b), []);
    }
}

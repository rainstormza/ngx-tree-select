/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './tree-select.component.scss.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from './tree-select-item.component.ngfactory';
import * as i5 from '../../../../../src/ngx-tree-select/src/components/tree-select-item.component';
import * as i6 from '../../../../../src/ngx-tree-select/src/services/select.service';
import * as i7 from '../../../../../src/ngx-tree-select/src/pipes/item.pipe';
import * as i8 from '../../../../../src/ngx-tree-select/src/components/tree-select.component';
import * as i9 from '../../../../../src/ngx-tree-select/src/directives/off-click.directive';
import * as i10 from '../../../../../src/ngx-tree-select/src/models/tree-select-default-options';
var styles_TreeSelectComponent = [i0.styles];
export var RenderType_TreeSelectComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_TreeSelectComponent, data: {} });
function View_TreeSelectComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'span', [['class',
                'ui-select-placeholder text-muted']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.placeholder;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_TreeSelectComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'a', [['class',
                'close']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.removeItem($event, _v.parent.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['x']))], null, null);
}
function View_TreeSelectComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'span', [['class',
                'pull-left']], [[2, 'selected-item-text', null], [2, 'selected-item-item',
                null], [2, 'btn', null], [2, 'btn-default', null], [2, 'btn-xs',
                null]], null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n          ', '\n          '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TreeSelectComponent_4)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_6 = (_co.multiple && !_co.disabled);
        _ck(_v, 3, 0, currVal_6);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.multiple;
        var currVal_1 = _co.multiple;
        var currVal_2 = _co.multiple;
        var currVal_3 = _co.multiple;
        var currVal_4 = _co.multiple;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        var currVal_5 = _v.parent.context.$implicit.text;
        _ck(_v, 1, 0, currVal_5);
    });
}
function View_TreeSelectComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TreeSelectComponent_3)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ((_co.moreLoaded || (_co.maxVisibleItemCount == 0)) || (_v.context.index < _co.maxVisibleItemCount));
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_TreeSelectComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'span', [['class',
                'pull-right more-items-icon']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.loadMore($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['(...)']))], null, null);
}
function View_TreeSelectComponent_7(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'input', [['class',
                'form-control'], ['name', 'filterText'], ['type', 'text']], [[8, 'placeholder', 0],
            [2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'click'], [null, 'blur'], [null,
                'input'], [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.filter = $event) !== false);
                ad = (pd_4 && ad);
            }
            if (('click' === en)) {
                var pd_5 = (_co.setInputFocus() !== false);
                ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
                var pd_6 = (_co.setInputFocusOut() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null),
        i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i3.NgModel, [[8, null],
            [8, null], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'], options: [2, 'options'] }, { update: 'ngModelChange' }), i1.ɵpod({ standalone: 0 }),
        i1.ɵprd(2048, null, i3.NgControl, null, [i3.NgModel]), i1.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_8 = 'filterText';
        var currVal_9 = _co.filter;
        var currVal_10 = _ck(_v, 4, 0, true);
        _ck(_v, 3, 0, currVal_8, currVal_9, currVal_10);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _co.filterPlaceholder, '');
        var currVal_1 = i1.ɵnov(_v, 6).ngClassUntouched;
        var currVal_2 = i1.ɵnov(_v, 6).ngClassTouched;
        var currVal_3 = i1.ɵnov(_v, 6).ngClassPristine;
        var currVal_4 = i1.ɵnov(_v, 6).ngClassDirty;
        var currVal_5 = i1.ɵnov(_v, 6).ngClassValid;
        var currVal_6 = i1.ɵnov(_v, 6).ngClassInvalid;
        var currVal_7 = i1.ɵnov(_v, 6).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
function View_TreeSelectComponent_8(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'li', [['role',
                'menuitem']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 1, 'tree-select-item', [], null, null, null, i4.View_TreeSelectItemComponent_0, i4.RenderType_TreeSelectItemComponent)),
        i1.ɵdid(49152, null, 0, i5.TreeSelectItemComponent, [i6.SelectService], { onTouchedCallBack: [0, 'onTouchedCallBack'], item: [1, 'item'] }, null),
        (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.onTouchedCallback;
        var currVal_1 = _v.context.$implicit;
        _ck(_v, 3, 0, currVal_0, currVal_1);
    }, null);
}
function View_TreeSelectComponent_6(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 8, 'ul', [['class',
                'dropdown-menu'], ['role', 'menu']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_TreeSelectComponent_7)),
        i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵand(16777216, null, null, 2, null, View_TreeSelectComponent_8)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), i1.ɵppd(2), (_l()(),
            i1.ɵted(null, ['\n  ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.allowFilter;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = i1.ɵunv(_v, 6, 0, _ck(_v, 7, 0, i1.ɵnov(_v.parent, 0), _co.internalItems, _co.filter));
        _ck(_v, 6, 0, currVal_1);
    }, null);
}
export function View_TreeSelectComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵpid(0, i7.ItemPipe, []), (_l()(), i1.ɵeld(0, null, null, 24, 'div', [['class', 'dropdown open'], ['tabindex', '0']], null, [[null, 'keyup'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('keyup' === en)) {
                var pd_0 = (_co.keyUp($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (_co.onTouched() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(212992, null, 0, i9.OffClickDirective, [i1.PLATFORM_ID], { offClickHandler: [0, 'offClickHandler'] }, null), (_l()(),
            i1.ɵted(null, ['\n\n  '])), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵeld(0, null, null, 15, 'div', [], [[2, 'disabled',
                null]], null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 7, 'span', [['class', 'btn btn-default btn-secondary form-control'], ['tabindex',
                '-1']], [[2, 'selected-container-text', null], [2, 'selected-container-item',
                null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.toggle($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n      '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TreeSelectComponent_1)),
        i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_TreeSelectComponent_2)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n\n    '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TreeSelectComponent_5)),
        i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵeld(0, null, null, 0, 'i', [['class', 'caret pull-right']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TreeSelectComponent_6)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.clickedOutside;
        _ck(_v, 2, 0, currVal_0);
        var currVal_4 = (_co.selection.length <= 0);
        _ck(_v, 10, 0, currVal_4);
        var currVal_5 = _co.selection;
        _ck(_v, 13, 0, currVal_5);
        var currVal_6 = _co.showMoreLink;
        _ck(_v, 17, 0, currVal_6);
        var currVal_7 = (((!_co.disabled && _co.isOpen) && _co.internalItems) && (_co.internalItems.length > 0));
        _ck(_v, 24, 0, currVal_7);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.disabled;
        _ck(_v, 5, 0, currVal_1);
        var currVal_2 = !_co.multiple;
        var currVal_3 = _co.multiple;
        _ck(_v, 7, 0, currVal_2, currVal_3);
    });
}
export function View_TreeSelectComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 3, 'tree-select', [], null, [[null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('blur' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onTouched() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_TreeSelectComponent_0, RenderType_TreeSelectComponent)), i1.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i8.TreeSelectComponent]), i1.ɵprd(512, null, i6.SelectService, i6.SelectService, []), i1.ɵdid(49152, null, 0, i8.TreeSelectComponent, [i6.SelectService,
            i10.TreeSelectDefaultOptions], null, null)], null, null);
}
export var TreeSelectComponentNgFactory = i1.ɵccf('tree-select', i8.TreeSelectComponent, View_TreeSelectComponent_Host_0, { disabled: 'disabled', placeholder: 'placeholder',
    filterPlaceholder: 'filterPlaceholder', allowFilter: 'allowFilter', items: 'items',
    idField: 'idField', textField: 'textField', allowParentSelection: 'allowParentSelection',
    childrenField: 'childrenField', multiple: 'multiple', maxVisibleItemCount: 'maxVisibleItemCount' }, {}, []);
//# sourceMappingURL=tree-select.component.ngfactory.js.map
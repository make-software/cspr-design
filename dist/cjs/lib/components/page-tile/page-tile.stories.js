"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var page_tile_1 = tslib_1.__importDefault(require("./page-tile"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
exports.default = {
    component: page_tile_1.default,
    title: 'PageTile',
    args: {
        withPadding: true,
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 30 }, { children: (0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 20 }, { children: (0, jsx_runtime_1.jsx)(page_tile_1.default, tslib_1.__assign({}, args, { children: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: "Page Tile Content" })) })) })) }))); };
exports.Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aWxlLnN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcGFnZS10aWxlL3BhZ2UtdGlsZS5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGtFQUFtQztBQUNuQywwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELDZFQUE4QztBQUU5QyxrQkFBZTtJQUNYLFNBQVMsRUFBRSxtQkFBUTtJQUNuQixLQUFLLEVBQUUsVUFBVTtJQUNqQixJQUFJLEVBQUU7UUFDRixXQUFXLEVBQUUsSUFBSTtLQUNwQjtDQUM4QixDQUFDO0FBRXBDLElBQU0sUUFBUSxHQUFvQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQ3hELHVCQUFDLGtCQUFPLHFCQUFDLFlBQVksRUFBRSxFQUFFLGdCQUNyQix1QkFBQyxxQkFBVSxxQkFBQyxZQUFZLEVBQUUsRUFBRSxnQkFDeEIsdUJBQUMsbUJBQVEsdUJBQUssSUFBSSxjQUNkLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLHVDQUE4QixJQUN4QyxJQUNGLElBQ1AsQ0FDYixFQVIyRCxDQVEzRCxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRTdG9yeSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IFBhZ2VUaWxlIGZyb20gJy4vcGFnZS10aWxlJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudDogUGFnZVRpbGUsXG4gICAgdGl0bGU6ICdQYWdlVGlsZScsXG4gICAgYXJnczoge1xuICAgICAgICB3aXRoUGFkZGluZzogdHJ1ZSxcbiAgICB9LFxufSBhcyBDb21wb25lbnRNZXRhPHR5cGVvZiBQYWdlVGlsZT47XG5cbmNvbnN0IFRlbXBsYXRlOiBDb21wb25lbnRTdG9yeTx0eXBlb2YgUGFnZVRpbGU+ID0gKGFyZ3MpID0+IChcbiAgICA8RmxleFJvdyBpdGVtc1NwYWNpbmc9ezMwfT5cbiAgICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXsyMH0+XG4gICAgICAgICAgICA8UGFnZVRpbGUgey4uLmFyZ3N9PlxuICAgICAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXsyfT5QYWdlIFRpbGUgQ29udGVudDwvQm9keVRleHQ+XG4gICAgICAgICAgICA8L1BhZ2VUaWxlPlxuICAgICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgPC9GbGV4Um93PlxuKTtcblxuZXhwb3J0IGNvbnN0IFByaW1hcnkgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = exports.badgeWithLink = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var badge_1 = require("./badge");
var link_1 = tslib_1.__importDefault(require("../link/link"));
var truncate_box_1 = tslib_1.__importDefault(require("../truncate-box/truncate-box"));
exports.default = {
    component: badge_1.Badge,
    title: 'Badge',
    args: {
        variation: 'green',
        label: 'Test',
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(badge_1.Badge, tslib_1.__assign({}, args))); };
var badgeWithLink = function () { return ((0, jsx_runtime_1.jsx)(badge_1.Badge, { label: (0, jsx_runtime_1.jsx)(truncate_box_1.default, tslib_1.__assign({ size: 1, style: { verticalAlign: 'middle' } }, { children: (0, jsx_runtime_1.jsx)(link_1.default, tslib_1.__assign({ color: 'inherit', href: './' }, { children: "Link" })) })), variation: 'blue' })); };
exports.badgeWithLink = badgeWithLink;
exports.Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Uuc3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9iYWRnZS9iYWRnZS5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGlDQUFnQztBQUNoQyw4REFBZ0M7QUFDaEMsc0ZBQXVEO0FBRXZELGtCQUFlO0lBQ1gsU0FBUyxFQUFFLGFBQUs7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUU7UUFDRixTQUFTLEVBQUUsT0FBTztRQUNsQixLQUFLLEVBQUUsTUFBTTtLQUNoQjtDQUMyQixDQUFDO0FBRWpDLElBQU0sUUFBUSxHQUFpQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQ3JELHVCQUFDLGFBQUssdUJBQUssSUFBSSxFQUFHLENBQ3JCLEVBRndELENBRXhELENBQUM7QUFDSyxJQUFNLGFBQWEsR0FBRyxjQUFNLE9BQUEsQ0FDL0IsdUJBQUMsYUFBSyxJQUNGLEtBQUssRUFDRCx1QkFBQyxzQkFBVyxxQkFDUixJQUFJLEVBQUUsQ0FBQyxFQUNQLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsZ0JBRWxDLHVCQUFDLGNBQUkscUJBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSwwQkFFM0IsSUFDRyxFQUNsQixTQUFTLEVBQUUsTUFBTSxHQUNuQixDQUNMLEVBYmtDLENBYWxDLENBQUM7QUFiVyxRQUFBLGFBQWEsaUJBYXhCO0FBQ1csUUFBQSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRTdG9yeSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICcuL2JhZGdlJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2xpbmsvbGluayc7XG5pbXBvcnQgVHJ1bmNhdGVCb3ggZnJvbSAnLi4vdHJ1bmNhdGUtYm94L3RydW5jYXRlLWJveCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnQ6IEJhZGdlLFxuICAgIHRpdGxlOiAnQmFkZ2UnLFxuICAgIGFyZ3M6IHtcbiAgICAgICAgdmFyaWF0aW9uOiAnZ3JlZW4nLFxuICAgICAgICBsYWJlbDogJ1Rlc3QnLFxuICAgIH0sXG59IGFzIENvbXBvbmVudE1ldGE8dHlwZW9mIEJhZGdlPjtcblxuY29uc3QgVGVtcGxhdGU6IENvbXBvbmVudFN0b3J5PHR5cGVvZiBCYWRnZT4gPSAoYXJncykgPT4gKFxuICAgIDxCYWRnZSB7Li4uYXJnc30vPlxuKTtcbmV4cG9ydCBjb25zdCBiYWRnZVdpdGhMaW5rID0gKCkgPT4gKFxuICAgIDxCYWRnZVxuICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICA8VHJ1bmNhdGVCb3hcbiAgICAgICAgICAgICAgICBzaXplPXsxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgY29sb3I9eydpbmhlcml0J30gaHJlZj17Jy4vJ30+XG4gICAgICAgICAgICAgICAgICAgIExpbmtcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L1RydW5jYXRlQm94Pn1cbiAgICAgICAgdmFyaWF0aW9uPXsnYmx1ZSd9XG4gICAgLz5cbik7XG5leHBvcnQgY29uc3QgUHJpbWFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuIl19
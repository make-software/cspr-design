"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeConfig = void 0;
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var match_media_1 = require("./utils/match-media");
var PAGE_MIN_WIDTH = 320;
var PAGE_MAX_WIDTH = 1176;
var themeCommon = {
    minWidth: PAGE_MIN_WIDTH,
    maxWidth: PAGE_MAX_WIDTH,
    withMedia: match_media_1.withMedia,
    zIndex: {
        dropdown: 10,
        modal: 15,
        tooltip: 20,
    },
    typography: {
        fontFamily: {
            primary: '"Inter", sans-serif',
            mono: '"JetBrains Mono", serif',
        },
        fontWeight: {
            // thin: 100,
            // extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            // black: 900,
        },
    },
    borderRadius: {
        base: 4,
    },
    padding: {
        2: '2em',
    },
    animations: {
        fadeIn: (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    "], ["\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    "]))),
    },
};
exports.themeConfig = {
    dark: tslib_1.__assign(tslib_1.__assign({}, themeCommon), { colorSpecialCase: {
            blueBanner: '#294ACC',
            blueBanner2: '#2A5DB2',
        }, styleguideColors: {
            backgroundPrimary: '#161D3B',
            backgroundSecondary: '#0F1429',
            backgroundTertiary: '#131933',
            backgroundQuaternary: '#0F1429',
            borderPrimary: '#1A2347',
            borderSecondary: '#5C6073',
            borderRed: '#FF8680',
            fillPrimaryRed: '#B2332D',
            fillPrimaryRedHover: '#932F30',
            fillPrimaryRedClick: '#742A33',
            fillPrimaryBlue: '#294ACC',
            fillPrimaryBlueHover: '#112A8C',
            fillPrimaryBlueClick: '#14266D',
            fillSecondary: '#1B254A',
            fillSecondaryRedHover: '#FF868029',
            fillSecondaryRedClick: '#FF868014',
            fillSecondaryBlueHover: '#7490FF29',
            fillSecondaryBlueClick: '#7490FF14',
            fillTertriary: '#293667',
            fillGreen: '#2DCC85',
            fillVioletGradient: 'linear-gradient(266.5deg, #A880FF 9.3%, #8B5BF1 94.39%)',
            fillLoadingInTable: 'linear-gradient(90deg, #1B254A 43.6%, rgba(22, 29, 59, 0) 100%)',
            contentPrimary: '#DADCE5',
            contentSecondary: '#A8ADBF',
            contentTertiary: '#989DB2',
            contentQuaternary: '#8D92A6',
            contentOnFill: '#F2F2F2',
            contentBlue: '#8FA6FF',
            contentRed: '#FF8680',
            contentGreen: '#4CD99A',
            contentViolet: '#A880FF',
            contentYellow: '#E0BB38',
            contentWarmGreen: '#BDD94C',
            contentLightBlue: '#8FA6FF',
        }, boxShadow: {
            unset: 'unset',
            block: '0px 2px 4px #0F1429',
            dropdown: 'drop-shadow(0px 2px 16px #0F1429)',
            tooltip: '0px 4px 8px #0F1429',
        }, border: {
            base: '1px solid #5C6073',
            separator: "1px solid #1A2347",
            tableRowSeparator: '1px solid #1A2347', // borderPrimary
        }, themeName: 'dark' }),
    light: tslib_1.__assign(tslib_1.__assign({}, themeCommon), { colorSpecialCase: {
            blueBanner: '#294ACC',
            blueBanner2: '#2A5DB2',
        }, styleguideColors: {
            backgroundPrimary: '#FFFFFF',
            backgroundSecondary: '#F2F3F5',
            backgroundTertiary: '#181D40',
            backgroundQuaternary: '#161A33',
            borderPrimary: '#F2F3F5',
            borderSecondary: '#D2D4D9',
            borderRed: '#E6332A',
            fillPrimaryRed: '#E6332A',
            fillPrimaryRedHover: '#D23028',
            fillPrimaryRedClick: '#BD2E27',
            fillPrimaryBlue: '#0021A5',
            fillPrimaryBlueHover: '#051F89',
            fillPrimaryBlueClick: '#081F7B',
            fillSecondary: '#F5F5F7',
            fillSecondaryRedHover: '#E6332A14',
            fillSecondaryRedClick: '#E6332A1F',
            fillSecondaryBlueHover: '#0021A514',
            fillSecondaryBlueClick: '#0021A51F',
            fillTertriary: '#FEFEFF',
            fillGreen: '#2DCC85',
            fillVioletGradient: 'linear-gradient(266.5deg, #A880FF 9.3%, #8B5BF1 94.39%)',
            fillLoadingInTable: 'linear-gradient(90deg, #F2F3F5 0%, rgba(255, 255, 255, 0) 100%)',
            contentPrimary: '#1A1919',
            contentSecondary: '#84868C',
            contentTertiary: '#BABBBF',
            contentQuaternary: '#D2D3D9',
            contentOnFill: '#FFFFFF',
            contentBlue: '#0021A5',
            contentRed: '#E6332A',
            contentGreen: '#31DE91',
            contentViolet: '#8B5BF1',
            contentYellow: '#F1BF0B',
            contentWarmGreen: '#BBDE31',
            contentLightBlue: '#7490FF',
        }, boxShadow: {
            unset: 'unset',
            block: '0px 2px 4px rgba(143, 144, 152, 0.15)',
            dropdown: 'drop-shadow(0px 4px 8px rgba(26, 25, 25, 0.16))',
            tooltip: '0px 4px 8px rgba(143, 144, 152, 0.2)',
        }, border: {
            base: '1px solid #D2D4D9',
            separator: '1px solid #F2F3F5',
            tableRowSeparator: '1px solid #F2F3F5', // borderPrimary
        }, themeName: 'light' }),
};
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90aGVtZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHVEQUE4QztBQUM5QyxtREFBZ0Q7QUFHaEQsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO0FBQzNCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUU1QixJQUFNLFdBQVcsR0FBRztJQUNsQixRQUFRLEVBQUUsY0FBYztJQUN4QixRQUFRLEVBQUUsY0FBYztJQUN4QixTQUFTLEVBQUUsdUJBQVM7SUFDcEIsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFDRCxVQUFVLEVBQUU7UUFDVixVQUFVLEVBQUU7WUFDVixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLElBQUksRUFBRSx5QkFBeUI7U0FDaEM7UUFDRCxVQUFVLEVBQUU7WUFDVixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLEtBQUssRUFBRSxHQUFHO1lBQ1YsT0FBTyxFQUFFLEdBQUc7WUFDWixNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxHQUFHO1lBQ2IsSUFBSSxFQUFFLEdBQUc7WUFDVCxTQUFTLEVBQUUsR0FBRztZQUNkLGNBQWM7U0FDZjtLQUNGO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLENBQUM7S0FDUjtJQUNELE9BQU8sRUFBRTtRQUNQLENBQUMsRUFBRSxLQUFLO0tBQ1Q7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLE1BQUUsNkJBQVMsMEtBQUEsOEZBT2hCLElBQUE7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBUTtJQUM5QixJQUFJLHdDQUNDLFdBQVcsS0FDZCxnQkFBZ0IsRUFBRTtZQUNoQixVQUFVLEVBQUUsU0FBUztZQUNyQixXQUFXLEVBQUUsU0FBUztTQUN2QixFQUNE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U0FBUztZQUN4QixhQUFhLEVBQUUsU0FBUztZQUN4QixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLGdCQUFnQixFQUFFLFNBQVM7U0FDNUIsRUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSx1Q0FBdUM7WUFDOUMsUUFBUSxFQUFFLGlEQUFpRDtZQUMzRCxPQUFPLEVBQUUsc0NBQXNDO1NBQ2hELEVBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixTQUFTLEVBQUUsbUJBQW1CO1lBQzlCLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQjtTQUN6RCxFQUNELFNBQVMsRUFBRSxPQUFPLEdBQ25CO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB3aXRoTWVkaWEgfSBmcm9tIFwiLi91dGlscy9tYXRjaC1tZWRpYVwiO1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfTUlOX1dJRFRIID0gMzIwO1xyXG5jb25zdCBQQUdFX01BWF9XSURUSCA9IDExNzY7XHJcblxyXG5jb25zdCB0aGVtZUNvbW1vbiA9IHtcclxuICBtaW5XaWR0aDogUEFHRV9NSU5fV0lEVEgsXHJcbiAgbWF4V2lkdGg6IFBBR0VfTUFYX1dJRFRILFxyXG4gIHdpdGhNZWRpYTogd2l0aE1lZGlhLFxyXG4gIHpJbmRleDoge1xyXG4gICAgZHJvcGRvd246IDEwLFxyXG4gICAgbW9kYWw6IDE1LFxyXG4gICAgdG9vbHRpcDogMjAsXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250RmFtaWx5OiB7XHJcbiAgICAgIHByaW1hcnk6ICdcIkludGVyXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgICBtb25vOiAnXCJKZXRCcmFpbnMgTW9ub1wiLCBzZXJpZicsXHJcbiAgICB9LFxyXG4gICAgZm9udFdlaWdodDoge1xyXG4gICAgICAvLyB0aGluOiAxMDAsXHJcbiAgICAgIC8vIGV4dHJhTGlnaHQ6IDIwMCxcclxuICAgICAgbGlnaHQ6IDMwMCxcclxuICAgICAgcmVndWxhcjogNDAwLFxyXG4gICAgICBtZWRpdW06IDUwMCxcclxuICAgICAgc2VtaUJvbGQ6IDYwMCxcclxuICAgICAgYm9sZDogNzAwLFxyXG4gICAgICBleHRyYUJvbGQ6IDgwMCxcclxuICAgICAgLy8gYmxhY2s6IDkwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBib3JkZXJSYWRpdXM6IHtcclxuICAgIGJhc2U6IDQsXHJcbiAgfSxcclxuICBwYWRkaW5nOiB7XHJcbiAgICAyOiAnMmVtJyxcclxuICB9LFxyXG4gIGFuaW1hdGlvbnM6IHtcclxuICAgIGZhZGVJbjoga2V5ZnJhbWVzYFxyXG4gICAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWVDb25maWc6IGFueSA9IHtcclxuICBkYXJrOiB7XHJcbiAgICAuLi50aGVtZUNvbW1vbixcclxuICAgIGNvbG9yU3BlY2lhbENhc2U6IHtcclxuICAgICAgYmx1ZUJhbm5lcjogJyMyOTRBQ0MnLFxyXG4gICAgICBibHVlQmFubmVyMjogJyMyQTVEQjInLFxyXG4gICAgfSxcclxuICAgIHN0eWxlZ3VpZGVDb2xvcnM6IHtcclxuICAgICAgYmFja2dyb3VuZFByaW1hcnk6ICcjMTYxRDNCJyxcclxuICAgICAgYmFja2dyb3VuZFNlY29uZGFyeTogJyMwRjE0MjknLFxyXG4gICAgICBiYWNrZ3JvdW5kVGVydGlhcnk6ICcjMTMxOTMzJyxcclxuICAgICAgYmFja2dyb3VuZFF1YXRlcm5hcnk6ICcjMEYxNDI5JyxcclxuICAgICAgYm9yZGVyUHJpbWFyeTogJyMxQTIzNDcnLFxyXG4gICAgICBib3JkZXJTZWNvbmRhcnk6ICcjNUM2MDczJyxcclxuICAgICAgYm9yZGVyUmVkOiAnI0ZGODY4MCcsXHJcbiAgICAgIGZpbGxQcmltYXJ5UmVkOiAnI0IyMzMyRCcsXHJcbiAgICAgIGZpbGxQcmltYXJ5UmVkSG92ZXI6ICcjOTMyRjMwJyxcclxuICAgICAgZmlsbFByaW1hcnlSZWRDbGljazogJyM3NDJBMzMnLFxyXG4gICAgICBmaWxsUHJpbWFyeUJsdWU6ICcjMjk0QUNDJyxcclxuICAgICAgZmlsbFByaW1hcnlCbHVlSG92ZXI6ICcjMTEyQThDJyxcclxuICAgICAgZmlsbFByaW1hcnlCbHVlQ2xpY2s6ICcjMTQyNjZEJyxcclxuICAgICAgZmlsbFNlY29uZGFyeTogJyMxQjI1NEEnLFxyXG4gICAgICBmaWxsU2Vjb25kYXJ5UmVkSG92ZXI6ICcjRkY4NjgwMjknLFxyXG4gICAgICBmaWxsU2Vjb25kYXJ5UmVkQ2xpY2s6ICcjRkY4NjgwMTQnLFxyXG4gICAgICBmaWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyOiAnIzc0OTBGRjI5JyxcclxuICAgICAgZmlsbFNlY29uZGFyeUJsdWVDbGljazogJyM3NDkwRkYxNCcsXHJcbiAgICAgIGZpbGxUZXJ0cmlhcnk6ICcjMjkzNjY3JyxcclxuICAgICAgZmlsbEdyZWVuOiAnIzJEQ0M4NScsXHJcbiAgICAgIGZpbGxWaW9sZXRHcmFkaWVudDpcclxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KDI2Ni41ZGVnLCAjQTg4MEZGIDkuMyUsICM4QjVCRjEgOTQuMzklKScsXHJcbiAgICAgIGZpbGxMb2FkaW5nSW5UYWJsZTpcclxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMUIyNTRBIDQzLjYlLCByZ2JhKDIyLCAyOSwgNTksIDApIDEwMCUpJyxcclxuICAgICAgY29udGVudFByaW1hcnk6ICcjREFEQ0U1JyxcclxuICAgICAgY29udGVudFNlY29uZGFyeTogJyNBOEFEQkYnLFxyXG4gICAgICBjb250ZW50VGVydGlhcnk6ICcjOTg5REIyJyxcclxuICAgICAgY29udGVudFF1YXRlcm5hcnk6ICcjOEQ5MkE2JyxcclxuICAgICAgY29udGVudE9uRmlsbDogJyNGMkYyRjInLFxyXG4gICAgICBjb250ZW50Qmx1ZTogJyM4RkE2RkYnLFxyXG4gICAgICBjb250ZW50UmVkOiAnI0ZGODY4MCcsXHJcbiAgICAgIGNvbnRlbnRHcmVlbjogJyM0Q0Q5OUEnLFxyXG4gICAgICBjb250ZW50VmlvbGV0OiAnI0E4ODBGRicsXHJcbiAgICAgIGNvbnRlbnRZZWxsb3c6ICcjRTBCQjM4JyxcclxuICAgICAgY29udGVudFdhcm1HcmVlbjogJyNCREQ5NEMnLFxyXG4gICAgICBjb250ZW50TGlnaHRCbHVlOiAnIzhGQTZGRicsXHJcbiAgICB9LFxyXG4gICAgYm94U2hhZG93OiB7XHJcbiAgICAgIHVuc2V0OiAndW5zZXQnLFxyXG4gICAgICBibG9jazogJzBweCAycHggNHB4ICMwRjE0MjknLFxyXG4gICAgICBkcm9wZG93bjogJ2Ryb3Atc2hhZG93KDBweCAycHggMTZweCAjMEYxNDI5KScsXHJcbiAgICAgIHRvb2x0aXA6ICcwcHggNHB4IDhweCAjMEYxNDI5JyxcclxuICAgIH0sXHJcbiAgICBib3JkZXI6IHtcclxuICAgICAgYmFzZTogJzFweCBzb2xpZCAjNUM2MDczJywgLy8gYm9yZGVyU2Vjb25kYXJ5XHJcbiAgICAgIHNlcGFyYXRvcjogYDFweCBzb2xpZCAjMUEyMzQ3YCwgLy8gYm9yZGVyUHJpbWFyeVxyXG4gICAgICB0YWJsZVJvd1NlcGFyYXRvcjogJzFweCBzb2xpZCAjMUEyMzQ3JywgLy8gYm9yZGVyUHJpbWFyeVxyXG4gICAgfSxcclxuICAgIHRoZW1lTmFtZTogJ2RhcmsnXHJcbiAgfSxcclxuICBsaWdodDoge1xyXG4gICAgLi4udGhlbWVDb21tb24sXHJcbiAgICBjb2xvclNwZWNpYWxDYXNlOiB7XHJcbiAgICAgIGJsdWVCYW5uZXI6ICcjMjk0QUNDJyxcclxuICAgICAgYmx1ZUJhbm5lcjI6ICcjMkE1REIyJyxcclxuICAgIH0sXHJcbiAgICBzdHlsZWd1aWRlQ29sb3JzOiB7XHJcbiAgICAgIGJhY2tncm91bmRQcmltYXJ5OiAnI0ZGRkZGRicsXHJcbiAgICAgIGJhY2tncm91bmRTZWNvbmRhcnk6ICcjRjJGM0Y1JyxcclxuICAgICAgYmFja2dyb3VuZFRlcnRpYXJ5OiAnIzE4MUQ0MCcsXHJcbiAgICAgIGJhY2tncm91bmRRdWF0ZXJuYXJ5OiAnIzE2MUEzMycsXHJcbiAgICAgIGJvcmRlclByaW1hcnk6ICcjRjJGM0Y1JyxcclxuICAgICAgYm9yZGVyU2Vjb25kYXJ5OiAnI0QyRDREOScsXHJcbiAgICAgIGJvcmRlclJlZDogJyNFNjMzMkEnLFxyXG4gICAgICBmaWxsUHJpbWFyeVJlZDogJyNFNjMzMkEnLFxyXG4gICAgICBmaWxsUHJpbWFyeVJlZEhvdmVyOiAnI0QyMzAyOCcsXHJcbiAgICAgIGZpbGxQcmltYXJ5UmVkQ2xpY2s6ICcjQkQyRTI3JyxcclxuICAgICAgZmlsbFByaW1hcnlCbHVlOiAnIzAwMjFBNScsXHJcbiAgICAgIGZpbGxQcmltYXJ5Qmx1ZUhvdmVyOiAnIzA1MUY4OScsXHJcbiAgICAgIGZpbGxQcmltYXJ5Qmx1ZUNsaWNrOiAnIzA4MUY3QicsXHJcbiAgICAgIGZpbGxTZWNvbmRhcnk6ICcjRjVGNUY3JyxcclxuICAgICAgZmlsbFNlY29uZGFyeVJlZEhvdmVyOiAnI0U2MzMyQTE0JyxcclxuICAgICAgZmlsbFNlY29uZGFyeVJlZENsaWNrOiAnI0U2MzMyQTFGJyxcclxuICAgICAgZmlsbFNlY29uZGFyeUJsdWVIb3ZlcjogJyMwMDIxQTUxNCcsXHJcbiAgICAgIGZpbGxTZWNvbmRhcnlCbHVlQ2xpY2s6ICcjMDAyMUE1MUYnLFxyXG4gICAgICBmaWxsVGVydHJpYXJ5OiAnI0ZFRkVGRicsXHJcbiAgICAgIGZpbGxHcmVlbjogJyMyRENDODUnLFxyXG4gICAgICBmaWxsVmlvbGV0R3JhZGllbnQ6XHJcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgyNjYuNWRlZywgI0E4ODBGRiA5LjMlLCAjOEI1QkYxIDk0LjM5JSknLFxyXG4gICAgICBmaWxsTG9hZGluZ0luVGFibGU6XHJcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgI0YyRjNGNSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKScsXHJcbiAgICAgIGNvbnRlbnRQcmltYXJ5OiAnIzFBMTkxOScsXHJcbiAgICAgIGNvbnRlbnRTZWNvbmRhcnk6ICcjODQ4NjhDJyxcclxuICAgICAgY29udGVudFRlcnRpYXJ5OiAnI0JBQkJCRicsXHJcbiAgICAgIGNvbnRlbnRRdWF0ZXJuYXJ5OiAnI0QyRDNEOScsXHJcbiAgICAgIGNvbnRlbnRPbkZpbGw6ICcjRkZGRkZGJyxcclxuICAgICAgY29udGVudEJsdWU6ICcjMDAyMUE1JyxcclxuICAgICAgY29udGVudFJlZDogJyNFNjMzMkEnLFxyXG4gICAgICBjb250ZW50R3JlZW46ICcjMzFERTkxJyxcclxuICAgICAgY29udGVudFZpb2xldDogJyM4QjVCRjEnLFxyXG4gICAgICBjb250ZW50WWVsbG93OiAnI0YxQkYwQicsXHJcbiAgICAgIGNvbnRlbnRXYXJtR3JlZW46ICcjQkJERTMxJyxcclxuICAgICAgY29udGVudExpZ2h0Qmx1ZTogJyM3NDkwRkYnLFxyXG4gICAgfSxcclxuICAgIGJveFNoYWRvdzoge1xyXG4gICAgICB1bnNldDogJ3Vuc2V0JyxcclxuICAgICAgYmxvY2s6ICcwcHggMnB4IDRweCByZ2JhKDE0MywgMTQ0LCAxNTIsIDAuMTUpJyxcclxuICAgICAgZHJvcGRvd246ICdkcm9wLXNoYWRvdygwcHggNHB4IDhweCByZ2JhKDI2LCAyNSwgMjUsIDAuMTYpKScsXHJcbiAgICAgIHRvb2x0aXA6ICcwcHggNHB4IDhweCByZ2JhKDE0MywgMTQ0LCAxNTIsIDAuMiknLFxyXG4gICAgfSxcclxuICAgIGJvcmRlcjoge1xyXG4gICAgICBiYXNlOiAnMXB4IHNvbGlkICNEMkQ0RDknLFxyXG4gICAgICBzZXBhcmF0b3I6ICcxcHggc29saWQgI0YyRjNGNScsIC8vIGJvcmRlclByaW1hcnlcclxuICAgICAgdGFibGVSb3dTZXBhcmF0b3I6ICcxcHggc29saWQgI0YyRjNGNScsIC8vIGJvcmRlclByaW1hcnlcclxuICAgIH0sXHJcbiAgICB0aGVtZU5hbWU6ICdsaWdodCdcclxuICB9LFxyXG59O1xyXG5cclxudHlwZSBUaGVtZUNvbmZpZyA9IHR5cGVvZiB0aGVtZUNvbmZpZy5saWdodDtcclxuXHJcbmRlY2xhcmUgbW9kdWxlICdzdHlsZWQtY29tcG9uZW50cycge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFRoZW1lIGV4dGVuZHMgVGhlbWVDb25maWcge31cclxufVxyXG4iXX0=
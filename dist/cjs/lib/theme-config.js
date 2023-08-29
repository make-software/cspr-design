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
            fillBlueGradient: 'linear-gradient(89.56deg, #0021A5 0%, #2C53EF 75.01%)',
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
            fillBlueGradient: 'linear-gradient(89.56deg, #0021A5 0%, #2C53EF 75.01%)',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90aGVtZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHVEQUE4QztBQUM5QyxtREFBZ0Q7QUFHaEQsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO0FBQzNCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUU1QixJQUFNLFdBQVcsR0FBRztJQUNsQixRQUFRLEVBQUUsY0FBYztJQUN4QixRQUFRLEVBQUUsY0FBYztJQUN4QixTQUFTLEVBQUUsdUJBQVM7SUFDcEIsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFDRCxVQUFVLEVBQUU7UUFDVixVQUFVLEVBQUU7WUFDVixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLElBQUksRUFBRSx5QkFBeUI7U0FDaEM7UUFDRCxVQUFVLEVBQUU7WUFDVixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLEtBQUssRUFBRSxHQUFHO1lBQ1YsT0FBTyxFQUFFLEdBQUc7WUFDWixNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxHQUFHO1lBQ2IsSUFBSSxFQUFFLEdBQUc7WUFDVCxTQUFTLEVBQUUsR0FBRztZQUNkLGNBQWM7U0FDZjtLQUNGO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLENBQUM7S0FDUjtJQUNELE9BQU8sRUFBRTtRQUNQLENBQUMsRUFBRSxLQUFLO0tBQ1Q7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLE1BQUUsNkJBQVMsMEtBQUEsOEZBT2hCLElBQUE7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBUTtJQUM5QixJQUFJLHdDQUNDLFdBQVcsS0FDZCxnQkFBZ0IsRUFBRTtZQUNoQixVQUFVLEVBQUUsU0FBUztZQUNyQixXQUFXLEVBQUUsU0FBUztTQUN2QixFQUNELGdCQUFnQixFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsbUJBQW1CLEVBQUUsU0FBUztZQUM5QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLG9CQUFvQixFQUFFLFNBQVM7WUFDL0IsYUFBYSxFQUFFLFNBQVM7WUFDeEIsZUFBZSxFQUFFLFNBQVM7WUFDMUIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsbUJBQW1CLEVBQUUsU0FBUztZQUM5QixtQkFBbUIsRUFBRSxTQUFTO1lBQzlCLGVBQWUsRUFBRSxTQUFTO1lBQzFCLG9CQUFvQixFQUFFLFNBQVM7WUFDL0Isb0JBQW9CLEVBQUUsU0FBUztZQUMvQixhQUFhLEVBQUUsU0FBUztZQUN4QixxQkFBcUIsRUFBRSxXQUFXO1lBQ2xDLHFCQUFxQixFQUFFLFdBQVc7WUFDbEMsc0JBQXNCLEVBQUUsV0FBVztZQUNuQyxzQkFBc0IsRUFBRSxXQUFXO1lBQ25DLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLGtCQUFrQixFQUNoQix5REFBeUQ7WUFDM0QsZ0JBQWdCLEVBQUUsdURBQXVEO1lBQ3pFLGtCQUFrQixFQUNoQixpRUFBaUU7WUFDbkUsY0FBYyxFQUFFLFNBQVM7WUFDekIsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixlQUFlLEVBQUUsU0FBUztZQUMxQixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsZ0JBQWdCLEVBQUUsU0FBUztTQUM1QixFQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLE9BQU8sRUFBRSxxQkFBcUI7U0FDL0IsRUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCO1NBQ3pELEVBQ0QsU0FBUyxFQUFFLE1BQU0sR0FDbEI7SUFDRCxLQUFLLHdDQUNBLFdBQVcsS0FDZCxnQkFBZ0IsRUFBRTtZQUNoQixVQUFVLEVBQUUsU0FBUztZQUNyQixXQUFXLEVBQUUsU0FBUztTQUN2QixFQUNELGdCQUFnQixFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsbUJBQW1CLEVBQUUsU0FBUztZQUM5QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLG9CQUFvQixFQUFFLFNBQVM7WUFDL0IsYUFBYSxFQUFFLFNBQVM7WUFDeEIsZUFBZSxFQUFFLFNBQVM7WUFDMUIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsbUJBQW1CLEVBQUUsU0FBUztZQUM5QixtQkFBbUIsRUFBRSxTQUFTO1lBQzlCLGVBQWUsRUFBRSxTQUFTO1lBQzFCLG9CQUFvQixFQUFFLFNBQVM7WUFDL0Isb0JBQW9CLEVBQUUsU0FBUztZQUMvQixhQUFhLEVBQUUsU0FBUztZQUN4QixxQkFBcUIsRUFBRSxXQUFXO1lBQ2xDLHFCQUFxQixFQUFFLFdBQVc7WUFDbEMsc0JBQXNCLEVBQUUsV0FBVztZQUNuQyxzQkFBc0IsRUFBRSxXQUFXO1lBQ25DLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLGtCQUFrQixFQUNoQix5REFBeUQ7WUFDM0QsZ0JBQWdCLEVBQUUsdURBQXVEO1lBQ3pFLGtCQUFrQixFQUNoQixpRUFBaUU7WUFDbkUsY0FBYyxFQUFFLFNBQVM7WUFDekIsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixlQUFlLEVBQUUsU0FBUztZQUMxQixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsZ0JBQWdCLEVBQUUsU0FBUztTQUM1QixFQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLHVDQUF1QztZQUM5QyxRQUFRLEVBQUUsaURBQWlEO1lBQzNELE9BQU8sRUFBRSxzQ0FBc0M7U0FDaEQsRUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCO1NBQ3pELEVBQ0QsU0FBUyxFQUFFLE9BQU8sR0FDbkI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB3aXRoTWVkaWEgfSBmcm9tIFwiLi91dGlscy9tYXRjaC1tZWRpYVwiO1xuXG5cbmNvbnN0IFBBR0VfTUlOX1dJRFRIID0gMzIwO1xuY29uc3QgUEFHRV9NQVhfV0lEVEggPSAxMTc2O1xuXG5jb25zdCB0aGVtZUNvbW1vbiA9IHtcbiAgbWluV2lkdGg6IFBBR0VfTUlOX1dJRFRILFxuICBtYXhXaWR0aDogUEFHRV9NQVhfV0lEVEgsXG4gIHdpdGhNZWRpYTogd2l0aE1lZGlhLFxuICB6SW5kZXg6IHtcbiAgICBkcm9wZG93bjogMTAsXG4gICAgbW9kYWw6IDE1LFxuICAgIHRvb2x0aXA6IDIwLFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseToge1xuICAgICAgcHJpbWFyeTogJ1wiSW50ZXJcIiwgc2Fucy1zZXJpZicsXG4gICAgICBtb25vOiAnXCJKZXRCcmFpbnMgTW9ub1wiLCBzZXJpZicsXG4gICAgfSxcbiAgICBmb250V2VpZ2h0OiB7XG4gICAgICAvLyB0aGluOiAxMDAsXG4gICAgICAvLyBleHRyYUxpZ2h0OiAyMDAsXG4gICAgICBsaWdodDogMzAwLFxuICAgICAgcmVndWxhcjogNDAwLFxuICAgICAgbWVkaXVtOiA1MDAsXG4gICAgICBzZW1pQm9sZDogNjAwLFxuICAgICAgYm9sZDogNzAwLFxuICAgICAgZXh0cmFCb2xkOiA4MDAsXG4gICAgICAvLyBibGFjazogOTAwLFxuICAgIH0sXG4gIH0sXG4gIGJvcmRlclJhZGl1czoge1xuICAgIGJhc2U6IDQsXG4gIH0sXG4gIHBhZGRpbmc6IHtcbiAgICAyOiAnMmVtJyxcbiAgfSxcbiAgYW5pbWF0aW9uczoge1xuICAgIGZhZGVJbjoga2V5ZnJhbWVzYFxuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgYCxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCB0aGVtZUNvbmZpZzogYW55ID0ge1xuICBkYXJrOiB7XG4gICAgLi4udGhlbWVDb21tb24sXG4gICAgY29sb3JTcGVjaWFsQ2FzZToge1xuICAgICAgYmx1ZUJhbm5lcjogJyMyOTRBQ0MnLFxuICAgICAgYmx1ZUJhbm5lcjI6ICcjMkE1REIyJyxcbiAgICB9LFxuICAgIHN0eWxlZ3VpZGVDb2xvcnM6IHtcbiAgICAgIGJhY2tncm91bmRQcmltYXJ5OiAnIzE2MUQzQicsXG4gICAgICBiYWNrZ3JvdW5kU2Vjb25kYXJ5OiAnIzBGMTQyOScsXG4gICAgICBiYWNrZ3JvdW5kVGVydGlhcnk6ICcjMTMxOTMzJyxcbiAgICAgIGJhY2tncm91bmRRdWF0ZXJuYXJ5OiAnIzBGMTQyOScsXG4gICAgICBib3JkZXJQcmltYXJ5OiAnIzFBMjM0NycsXG4gICAgICBib3JkZXJTZWNvbmRhcnk6ICcjNUM2MDczJyxcbiAgICAgIGJvcmRlclJlZDogJyNGRjg2ODAnLFxuICAgICAgZmlsbFByaW1hcnlSZWQ6ICcjQjIzMzJEJyxcbiAgICAgIGZpbGxQcmltYXJ5UmVkSG92ZXI6ICcjOTMyRjMwJyxcbiAgICAgIGZpbGxQcmltYXJ5UmVkQ2xpY2s6ICcjNzQyQTMzJyxcbiAgICAgIGZpbGxQcmltYXJ5Qmx1ZTogJyMyOTRBQ0MnLFxuICAgICAgZmlsbFByaW1hcnlCbHVlSG92ZXI6ICcjMTEyQThDJyxcbiAgICAgIGZpbGxQcmltYXJ5Qmx1ZUNsaWNrOiAnIzE0MjY2RCcsXG4gICAgICBmaWxsU2Vjb25kYXJ5OiAnIzFCMjU0QScsXG4gICAgICBmaWxsU2Vjb25kYXJ5UmVkSG92ZXI6ICcjRkY4NjgwMjknLFxuICAgICAgZmlsbFNlY29uZGFyeVJlZENsaWNrOiAnI0ZGODY4MDE0JyxcbiAgICAgIGZpbGxTZWNvbmRhcnlCbHVlSG92ZXI6ICcjNzQ5MEZGMjknLFxuICAgICAgZmlsbFNlY29uZGFyeUJsdWVDbGljazogJyM3NDkwRkYxNCcsXG4gICAgICBmaWxsVGVydHJpYXJ5OiAnIzI5MzY2NycsXG4gICAgICBmaWxsR3JlZW46ICcjMkRDQzg1JyxcbiAgICAgIGZpbGxWaW9sZXRHcmFkaWVudDpcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgyNjYuNWRlZywgI0E4ODBGRiA5LjMlLCAjOEI1QkYxIDk0LjM5JSknLFxuICAgICAgZmlsbEJsdWVHcmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCg4OS41NmRlZywgIzAwMjFBNSAwJSwgIzJDNTNFRiA3NS4wMSUpJyxcbiAgICAgIGZpbGxMb2FkaW5nSW5UYWJsZTpcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgIzFCMjU0QSA0My42JSwgcmdiYSgyMiwgMjksIDU5LCAwKSAxMDAlKScsXG4gICAgICBjb250ZW50UHJpbWFyeTogJyNEQURDRTUnLFxuICAgICAgY29udGVudFNlY29uZGFyeTogJyNBOEFEQkYnLFxuICAgICAgY29udGVudFRlcnRpYXJ5OiAnIzk4OURCMicsXG4gICAgICBjb250ZW50UXVhdGVybmFyeTogJyM4RDkyQTYnLFxuICAgICAgY29udGVudE9uRmlsbDogJyNGMkYyRjInLFxuICAgICAgY29udGVudEJsdWU6ICcjOEZBNkZGJyxcbiAgICAgIGNvbnRlbnRSZWQ6ICcjRkY4NjgwJyxcbiAgICAgIGNvbnRlbnRHcmVlbjogJyM0Q0Q5OUEnLFxuICAgICAgY29udGVudFZpb2xldDogJyNBODgwRkYnLFxuICAgICAgY29udGVudFllbGxvdzogJyNFMEJCMzgnLFxuICAgICAgY29udGVudFdhcm1HcmVlbjogJyNCREQ5NEMnLFxuICAgICAgY29udGVudExpZ2h0Qmx1ZTogJyM4RkE2RkYnLFxuICAgIH0sXG4gICAgYm94U2hhZG93OiB7XG4gICAgICB1bnNldDogJ3Vuc2V0JyxcbiAgICAgIGJsb2NrOiAnMHB4IDJweCA0cHggIzBGMTQyOScsXG4gICAgICBkcm9wZG93bjogJ2Ryb3Atc2hhZG93KDBweCAycHggMTZweCAjMEYxNDI5KScsXG4gICAgICB0b29sdGlwOiAnMHB4IDRweCA4cHggIzBGMTQyOScsXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIGJhc2U6ICcxcHggc29saWQgIzVDNjA3MycsIC8vIGJvcmRlclNlY29uZGFyeVxuICAgICAgc2VwYXJhdG9yOiBgMXB4IHNvbGlkICMxQTIzNDdgLCAvLyBib3JkZXJQcmltYXJ5XG4gICAgICB0YWJsZVJvd1NlcGFyYXRvcjogJzFweCBzb2xpZCAjMUEyMzQ3JywgLy8gYm9yZGVyUHJpbWFyeVxuICAgIH0sXG4gICAgdGhlbWVOYW1lOiAnZGFyaydcbiAgfSxcbiAgbGlnaHQ6IHtcbiAgICAuLi50aGVtZUNvbW1vbixcbiAgICBjb2xvclNwZWNpYWxDYXNlOiB7XG4gICAgICBibHVlQmFubmVyOiAnIzI5NEFDQycsXG4gICAgICBibHVlQmFubmVyMjogJyMyQTVEQjInLFxuICAgIH0sXG4gICAgc3R5bGVndWlkZUNvbG9yczoge1xuICAgICAgYmFja2dyb3VuZFByaW1hcnk6ICcjRkZGRkZGJyxcbiAgICAgIGJhY2tncm91bmRTZWNvbmRhcnk6ICcjRjJGM0Y1JyxcbiAgICAgIGJhY2tncm91bmRUZXJ0aWFyeTogJyMxODFENDAnLFxuICAgICAgYmFja2dyb3VuZFF1YXRlcm5hcnk6ICcjMTYxQTMzJyxcbiAgICAgIGJvcmRlclByaW1hcnk6ICcjRjJGM0Y1JyxcbiAgICAgIGJvcmRlclNlY29uZGFyeTogJyNEMkQ0RDknLFxuICAgICAgYm9yZGVyUmVkOiAnI0U2MzMyQScsXG4gICAgICBmaWxsUHJpbWFyeVJlZDogJyNFNjMzMkEnLFxuICAgICAgZmlsbFByaW1hcnlSZWRIb3ZlcjogJyNEMjMwMjgnLFxuICAgICAgZmlsbFByaW1hcnlSZWRDbGljazogJyNCRDJFMjcnLFxuICAgICAgZmlsbFByaW1hcnlCbHVlOiAnIzAwMjFBNScsXG4gICAgICBmaWxsUHJpbWFyeUJsdWVIb3ZlcjogJyMwNTFGODknLFxuICAgICAgZmlsbFByaW1hcnlCbHVlQ2xpY2s6ICcjMDgxRjdCJyxcbiAgICAgIGZpbGxTZWNvbmRhcnk6ICcjRjVGNUY3JyxcbiAgICAgIGZpbGxTZWNvbmRhcnlSZWRIb3ZlcjogJyNFNjMzMkExNCcsXG4gICAgICBmaWxsU2Vjb25kYXJ5UmVkQ2xpY2s6ICcjRTYzMzJBMUYnLFxuICAgICAgZmlsbFNlY29uZGFyeUJsdWVIb3ZlcjogJyMwMDIxQTUxNCcsXG4gICAgICBmaWxsU2Vjb25kYXJ5Qmx1ZUNsaWNrOiAnIzAwMjFBNTFGJyxcbiAgICAgIGZpbGxUZXJ0cmlhcnk6ICcjRkVGRUZGJyxcbiAgICAgIGZpbGxHcmVlbjogJyMyRENDODUnLFxuICAgICAgZmlsbFZpb2xldEdyYWRpZW50OlxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KDI2Ni41ZGVnLCAjQTg4MEZGIDkuMyUsICM4QjVCRjEgOTQuMzklKScsXG4gICAgICBmaWxsQmx1ZUdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDg5LjU2ZGVnLCAjMDAyMUE1IDAlLCAjMkM1M0VGIDc1LjAxJSknLFxuICAgICAgZmlsbExvYWRpbmdJblRhYmxlOlxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRjJGM0Y1IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpJyxcbiAgICAgIGNvbnRlbnRQcmltYXJ5OiAnIzFBMTkxOScsXG4gICAgICBjb250ZW50U2Vjb25kYXJ5OiAnIzg0ODY4QycsXG4gICAgICBjb250ZW50VGVydGlhcnk6ICcjQkFCQkJGJyxcbiAgICAgIGNvbnRlbnRRdWF0ZXJuYXJ5OiAnI0QyRDNEOScsXG4gICAgICBjb250ZW50T25GaWxsOiAnI0ZGRkZGRicsXG4gICAgICBjb250ZW50Qmx1ZTogJyMwMDIxQTUnLFxuICAgICAgY29udGVudFJlZDogJyNFNjMzMkEnLFxuICAgICAgY29udGVudEdyZWVuOiAnIzMxREU5MScsXG4gICAgICBjb250ZW50VmlvbGV0OiAnIzhCNUJGMScsXG4gICAgICBjb250ZW50WWVsbG93OiAnI0YxQkYwQicsXG4gICAgICBjb250ZW50V2FybUdyZWVuOiAnI0JCREUzMScsXG4gICAgICBjb250ZW50TGlnaHRCbHVlOiAnIzc0OTBGRicsXG4gICAgfSxcbiAgICBib3hTaGFkb3c6IHtcbiAgICAgIHVuc2V0OiAndW5zZXQnLFxuICAgICAgYmxvY2s6ICcwcHggMnB4IDRweCByZ2JhKDE0MywgMTQ0LCAxNTIsIDAuMTUpJyxcbiAgICAgIGRyb3Bkb3duOiAnZHJvcC1zaGFkb3coMHB4IDRweCA4cHggcmdiYSgyNiwgMjUsIDI1LCAwLjE2KSknLFxuICAgICAgdG9vbHRpcDogJzBweCA0cHggOHB4IHJnYmEoMTQzLCAxNDQsIDE1MiwgMC4yKScsXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIGJhc2U6ICcxcHggc29saWQgI0QyRDREOScsXG4gICAgICBzZXBhcmF0b3I6ICcxcHggc29saWQgI0YyRjNGNScsIC8vIGJvcmRlclByaW1hcnlcbiAgICAgIHRhYmxlUm93U2VwYXJhdG9yOiAnMXB4IHNvbGlkICNGMkYzRjUnLCAvLyBib3JkZXJQcmltYXJ5XG4gICAgfSxcbiAgICB0aGVtZU5hbWU6ICdsaWdodCdcbiAgfSxcbn07XG5cbnR5cGUgVGhlbWVDb25maWcgPSB0eXBlb2YgdGhlbWVDb25maWcubGlnaHQ7XG5cbmRlY2xhcmUgbW9kdWxlICdzdHlsZWQtY29tcG9uZW50cycge1xuICBleHBvcnQgaW50ZXJmYWNlIERlZmF1bHRUaGVtZSBleHRlbmRzIFRoZW1lQ29uZmlnIHt9XG59XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeConfig = void 0;
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var match_media_1 = require("./utils/match-media");
var scaleFont = function (rem, rootSize) { return "calc(".concat(rem, " * 10/").concat(rootSize, ")"); };
var PAGE_MIN_WIDTH = 320;
var PAGE_MAX_WIDTH = 1176;
var ROOT_FONT_SIZE = 16;
var themeCommon = {
    minWidth: PAGE_MIN_WIDTH,
    maxWidth: PAGE_MAX_WIDTH,
    // do not use for now, let's see if we need it at all
    // media: MediaQueries,
    withMedia: match_media_1.withMedia,
    rootFontSize: ROOT_FONT_SIZE,
    scale: scaleFont,
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
        } }),
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
        } }),
    rootFontSize: '10'
};
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90aGVtZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHVEQUE4QztBQUM5QyxtREFBZ0Q7QUFFaEQsSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFHLEVBQUUsUUFBUSxJQUFLLE9BQUEsZUFBUSxHQUFHLG1CQUFTLFFBQVEsTUFBRyxFQUEvQixDQUErQixDQUFBO0FBRXBFLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztBQUMzQixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBRTFCLElBQU0sV0FBVyxHQUFHO0lBQ2xCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLHFEQUFxRDtJQUNyRCx1QkFBdUI7SUFDdkIsU0FBUyxFQUFFLHVCQUFTO0lBQ3BCLFlBQVksRUFBRSxjQUFjO0lBQzVCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtLQUNaO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFO1lBQ1YsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixJQUFJLEVBQUUseUJBQXlCO1NBQ2hDO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixLQUFLLEVBQUUsR0FBRztZQUNWLE9BQU8sRUFBRSxHQUFHO1lBQ1osTUFBTSxFQUFFLEdBQUc7WUFDWCxRQUFRLEVBQUUsR0FBRztZQUNiLElBQUksRUFBRSxHQUFHO1lBQ1QsU0FBUyxFQUFFLEdBQUc7WUFDZCxjQUFjO1NBQ2Y7S0FDRjtJQUNELFlBQVksRUFBRTtRQUNaLElBQUksRUFBRSxDQUFDO0tBQ1I7SUFDRCxPQUFPLEVBQUU7UUFDUCxDQUFDLEVB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U0FBUztZQUN6QixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLGVBQWUsRUFBRSxTQUFTO1lBQzFCLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsVUFBVSxFQUFFLFNBQVM7WUFDckIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixnQkFBZ0IsRUFBRSxTQUFTO1NBQzVCLEVBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsdUNBQXVDO1lBQzlDLFFBQVEsRUFBRSxpREFBaUQ7WUFDM0QsT0FBTyxFQUFFLHNDQUFzQztTQUNoRCxFQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxtQkFBbUI7WUFDekIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0I7U0FDekQsR0FDRjtJQUNELFlBQVksRUFBRSxJQUFJO0NBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHdpdGhNZWRpYSB9IGZyb20gXCIuL3V0aWxzL21hdGNoLW1lZGlhXCI7XG5cbmNvbnN0IHNjYWxlRm9udCA9IChyZW0sIHJvb3RTaXplKSA9PiBgY2FsYygke3JlbX0gKiAxMC8ke3Jvb3RTaXplfSlgXG5cbmNvbnN0IFBBR0VfTUlOX1dJRFRIID0gMzIwO1xuY29uc3QgUEFHRV9NQVhfV0lEVEggPSAxMTc2O1xuY29uc3QgUk9PVF9GT05UX1NJWkUgPSAxNjtcblxuY29uc3QgdGhlbWVDb21tb24gPSB7XG4gIG1pbldpZHRoOiBQQUdFX01JTl9XSURUSCxcbiAgbWF4V2lkdGg6IFBBR0VfTUFYX1dJRFRILFxuICAvLyBkbyBub3QgdXNlIGZvciBub3csIGxldCdzIHNlZSBpZiB3ZSBuZWVkIGl0IGF0IGFsbFxuICAvLyBtZWRpYTogTWVkaWFRdWVyaWVzLFxuICB3aXRoTWVkaWE6IHdpdGhNZWRpYSxcbiAgcm9vdEZvbnRTaXplOiBST09UX0ZPTlRfU0laRSxcbiAgc2NhbGU6IHNjYWxlRm9udCxcbiAgekluZGV4OiB7XG4gICAgZHJvcGRvd246IDEwLFxuICAgIG1vZGFsOiAxNSxcbiAgICB0b29sdGlwOiAyMCxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgIHByaW1hcnk6ICdcIkludGVyXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgbW9ubzogJ1wiSmV0QnJhaW5zIE1vbm9cIiwgc2VyaWYnLFxuICAgIH0sXG4gICAgZm9udFdlaWdodDoge1xuICAgICAgLy8gdGhpbjogMTAwLFxuICAgICAgLy8gZXh0cmFMaWdodDogMjAwLFxuICAgICAgbGlnaHQ6IDMwMCxcbiAgICAgIHJlZ3VsYXI6IDQwMCxcbiAgICAgIG1lZGl1bTogNTAwLFxuICAgICAgc2VtaUJvbGQ6IDYwMCxcbiAgICAgIGJvbGQ6IDcwMCxcbiAgICAgIGV4dHJhQm9sZDogODAwLFxuICAgICAgLy8gYmxhY2s6IDkwMCxcbiAgICB9LFxuICB9LFxuICBib3JkZXJSYWRpdXM6IHtcbiAgICBiYXNlOiA0LFxuICB9LFxuICBwYWRkaW5nOiB7XG4gICAgMjogJzJlbScsXG4gIH0sXG4gIGFuaW1hdGlvbnM6IHtcbiAgICBmYWRlSW46IGtleWZyYW1lc2BcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGAsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdGhlbWVDb25maWc6IGFueSA9IHtcbiAgZGFyazoge1xuICAgIC4uLnRoZW1lQ29tbW9uLFxuICAgIGNvbG9yU3BlY2lhbENhc2U6IHtcbiAgICAgIGJsdWVCYW5uZXI6ICcjMjk0QUNDJyxcbiAgICAgIGJsdWVCYW5uZXIyOiAnIzJBNURCMicsXG4gICAgfSxcbiAgICBzdHlsZWd1aWRlQ29sb3JzOiB7XG4gICAgICBiYWNrZ3JvdW5kUHJpbWFyeTogJyMxNjFEM0InLFxuICAgICAgYmFja2dyb3VuZFNlY29uZGFyeTogJyMwRjE0MjknLFxuICAgICAgYmFja2dyb3VuZFRlcnRpYXJ5OiAnIzEzMTkzMycsXG4gICAgICBiYWNrZ3JvdW5kUXVhdGVybmFyeTogJyMwRjE0MjknLFxuICAgICAgYm9yZGVyUHJpbWFyeTogJyMxQTIzNDcnLFxuICAgICAgYm9yZGVyU2Vjb25kYXJ5OiAnIzVDNjA3MycsXG4gICAgICBib3JkZXJSZWQ6ICcjRkY4NjgwJyxcbiAgICAgIGZpbGxQcmltYXJ5UmVkOiAnI0IyMzMyRCcsXG4gICAgICBmaWxsUHJpbWFyeVJlZEhvdmVyOiAnIzkzMkYzMCcsXG4gICAgICBmaWxsUHJpbWFyeVJlZENsaWNrOiAnIzc0MkEzMycsXG4gICAgICBmaWxsUHJpbWFyeUJsdWU6ICcjMjk0QUNDJyxcbiAgICAgIGZpbGxQcmltYXJ5Qmx1ZUhvdmVyOiAnIzExMkE4QycsXG4gICAgICBmaWxsUHJpbWFyeUJsdWVDbGljazogJyMxNDI2NkQnLFxuICAgICAgZmlsbFNlY29uZGFyeTogJyMxQjI1NEEnLFxuICAgICAgZmlsbFNlY29uZGFyeVJlZEhvdmVyOiAnI0ZGODY4MDI5JyxcbiAgICAgIGZpbGxTZWNvbmRhcnlSZWRDbGljazogJyNGRjg2ODAxNCcsXG4gICAgICBmaWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyOiAnIzc0OTBGRjI5JyxcbiAgICAgIGZpbGxTZWNvbmRhcnlCbHVlQ2xpY2s6ICcjNzQ5MEZGMTQnLFxuICAgICAgZmlsbFRlcnRyaWFyeTogJyMyOTM2NjcnLFxuICAgICAgZmlsbEdyZWVuOiAnIzJEQ0M4NScsXG4gICAgICBmaWxsVmlvbGV0R3JhZGllbnQ6XG4gICAgICAgICdsaW5lYXItZ3JhZGllbnQoMjY2LjVkZWcsICNBODgwRkYgOS4zJSwgIzhCNUJGMSA5NC4zOSUpJyxcbiAgICAgIGZpbGxMb2FkaW5nSW5UYWJsZTpcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgIzFCMjU0QSA0My42JSwgcmdiYSgyMiwgMjksIDU5LCAwKSAxMDAlKScsXG4gICAgICBjb250ZW50UHJpbWFyeTogJyNEQURDRTUnLFxuICAgICAgY29udGVudFNlY29uZGFyeTogJyNBOEFEQkYnLFxuICAgICAgY29udGVudFRlcnRpYXJ5OiAnIzk4OURCMicsXG4gICAgICBjb250ZW50UXVhdGVybmFyeTogJyM4RDkyQTYnLFxuICAgICAgY29udGVudE9uRmlsbDogJyNGMkYyRjInLFxuICAgICAgY29udGVudEJsdWU6ICcjOEZBNkZGJyxcbiAgICAgIGNvbnRlbnRSZWQ6ICcjRkY4NjgwJyxcbiAgICAgIGNvbnRlbnRHcmVlbjogJyM0Q0Q5OUEnLFxuICAgICAgY29udGVudFZpb2xldDogJyNBODgwRkYnLFxuICAgICAgY29udGVudFllbGxvdzogJyNFMEJCMzgnLFxuICAgICAgY29udGVudFdhcm1HcmVlbjogJyNCREQ5NEMnLFxuICAgICAgY29udGVudExpZ2h0Qmx1ZTogJyM4RkE2RkYnLFxuICAgIH0sXG4gICAgYm94U2hhZG93OiB7XG4gICAgICB1bnNldDogJ3Vuc2V0JyxcbiAgICAgIGJsb2NrOiAnMHB4IDJweCA0cHggIzBGMTQyOScsXG4gICAgICBkcm9wZG93bjogJ2Ryb3Atc2hhZG93KDBweCAycHggMTZweCAjMEYxNDI5KScsXG4gICAgICB0b29sdGlwOiAnMHB4IDRweCA4cHggIzBGMTQyOScsXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIGJhc2U6ICcxcHggc29saWQgIzVDNjA3MycsIC8vIGJvcmRlclNlY29uZGFyeVxuICAgICAgc2VwYXJhdG9yOiBgMXB4IHNvbGlkICMxQTIzNDdgLCAvLyBib3JkZXJQcmltYXJ5XG4gICAgICB0YWJsZVJvd1NlcGFyYXRvcjogJzFweCBzb2xpZCAjMUEyMzQ3JywgLy8gYm9yZGVyUHJpbWFyeVxuICAgIH0sXG4gIH0sXG4gIGxpZ2h0OiB7XG4gICAgLi4udGhlbWVDb21tb24sXG4gICAgY29sb3JTcGVjaWFsQ2FzZToge1xuICAgICAgYmx1ZUJhbm5lcjogJyMyOTRBQ0MnLFxuICAgICAgYmx1ZUJhbm5lcjI6ICcjMkE1REIyJyxcbiAgICB9LFxuICAgIHN0eWxlZ3VpZGVDb2xvcnM6IHtcbiAgICAgIGJhY2tncm91bmRQcmltYXJ5OiAnI0ZGRkZGRicsXG4gICAgICBiYWNrZ3JvdW5kU2Vjb25kYXJ5OiAnI0YyRjNGNScsXG4gICAgICBiYWNrZ3JvdW5kVGVydGlhcnk6ICcjMTgxRDQwJyxcbiAgICAgIGJhY2tncm91bmRRdWF0ZXJuYXJ5OiAnIzE2MUEzMycsXG4gICAgICBib3JkZXJQcmltYXJ5OiAnI0YyRjNGNScsXG4gICAgICBib3JkZXJTZWNvbmRhcnk6ICcjRDJENEQ5JyxcbiAgICAgIGJvcmRlclJlZDogJyNFNjMzMkEnLFxuICAgICAgZmlsbFByaW1hcnlSZWQ6ICcjRTYzMzJBJyxcbiAgICAgIGZpbGxQcmltYXJ5UmVkSG92ZXI6ICcjRDIzMDI4JyxcbiAgICAgIGZpbGxQcmltYXJ5UmVkQ2xpY2s6ICcjQkQyRTI3JyxcbiAgICAgIGZpbGxQcmltYXJ5Qmx1ZTogJyMwMDIxQTUnLFxuICAgICAgZmlsbFByaW1hcnlCbHVlSG92ZXI6ICcjMDUxRjg5JyxcbiAgICAgIGZpbGxQcmltYXJ5Qmx1ZUNsaWNrOiAnIzA4MUY3QicsXG4gICAgICBmaWxsU2Vjb25kYXJ5OiAnI0Y1RjVGNycsXG4gICAgICBmaWxsU2Vjb25kYXJ5UmVkSG92ZXI6ICcjRTYzMzJBMTQnLFxuICAgICAgZmlsbFNlY29uZGFyeVJlZENsaWNrOiAnI0U2MzMyQTFGJyxcbiAgICAgIGZpbGxTZWNvbmRhcnlCbHVlSG92ZXI6ICcjMDAyMUE1MTQnLFxuICAgICAgZmlsbFNlY29uZGFyeUJsdWVDbGljazogJyMwMDIxQTUxRicsXG4gICAgICBmaWxsVGVydHJpYXJ5OiAnI0ZFRkVGRicsXG4gICAgICBmaWxsR3JlZW46ICcjMkRDQzg1JyxcbiAgICAgIGZpbGxWaW9sZXRHcmFkaWVudDpcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgyNjYuNWRlZywgI0E4ODBGRiA5LjMlLCAjOEI1QkYxIDk0LjM5JSknLFxuICAgICAgZmlsbExvYWRpbmdJblRhYmxlOlxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRjJGM0Y1IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpJyxcbiAgICAgIGNvbnRlbnRQcmltYXJ5OiAnIzFBMTkxOScsXG4gICAgICBjb250ZW50U2Vjb25kYXJ5OiAnIzg0ODY4QycsXG4gICAgICBjb250ZW50VGVydGlhcnk6ICcjQkFCQkJGJyxcbiAgICAgIGNvbnRlbnRRdWF0ZXJuYXJ5OiAnI0QyRDNEOScsXG4gICAgICBjb250ZW50T25GaWxsOiAnI0ZGRkZGRicsXG4gICAgICBjb250ZW50Qmx1ZTogJyMwMDIxQTUnLFxuICAgICAgY29udGVudFJlZDogJyNFNjMzMkEnLFxuICAgICAgY29udGVudEdyZWVuOiAnIzMxREU5MScsXG4gICAgICBjb250ZW50VmlvbGV0OiAnIzhCNUJGMScsXG4gICAgICBjb250ZW50WWVsbG93OiAnI0YxQkYwQicsXG4gICAgICBjb250ZW50V2FybUdyZWVuOiAnI0JCREUzMScsXG4gICAgICBjb250ZW50TGlnaHRCbHVlOiAnIzc0OTBGRicsXG4gICAgfSxcbiAgICBib3hTaGFkb3c6IHtcbiAgICAgIHVuc2V0OiAndW5zZXQnLFxuICAgICAgYmxvY2s6ICcwcHggMnB4IDRweCByZ2JhKDE0MywgMTQ0LCAxNTIsIDAuMTUpJyxcbiAgICAgIGRyb3Bkb3duOiAnZHJvcC1zaGFkb3coMHB4IDRweCA4cHggcmdiYSgyNiwgMjUsIDI1LCAwLjE2KSknLFxuICAgICAgdG9vbHRpcDogJzBweCA0cHggOHB4IHJnYmEoMTQzLCAxNDQsIDE1MiwgMC4yKScsXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIGJhc2U6ICcxcHggc29saWQgI0QyRDREOScsXG4gICAgICBzZXBhcmF0b3I6ICcxcHggc29saWQgI0YyRjNGNScsIC8vIGJvcmRlclByaW1hcnlcbiAgICAgIHRhYmxlUm93U2VwYXJhdG9yOiAnMXB4IHNvbGlkICNGMkYzRjUnLCAvLyBib3JkZXJQcmltYXJ5XG4gICAgfSxcbiAgfSxcbiAgcm9vdEZvbnRTaXplOiAnMTAnXG59O1xuXG50eXBlIFRoZW1lQ29uZmlnID0gdHlwZW9mIHRoZW1lQ29uZmlnLmxpZ2h0O1xuXG5kZWNsYXJlIG1vZHVsZSAnc3R5bGVkLWNvbXBvbmVudHMnIHtcbiAgZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VGhlbWUgZXh0ZW5kcyBUaGVtZUNvbmZpZyB7fVxufVxuIl19
import { __assign, __makeTemplateObject } from "tslib";
import { keyframes } from 'styled-components';
import { withMedia } from './utils/match-media';
var PAGE_MIN_WIDTH = 320;
var PAGE_MAX_WIDTH = 1176;
var themeCommon = {
    minWidth: PAGE_MIN_WIDTH,
    maxWidth: PAGE_MAX_WIDTH,
    // do not use for now, let's see if we need it at all
    // media: MediaQueries,
    withMedia: withMedia,
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
        fadeIn: keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    "], ["\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    "]))),
    },
};
export var themeConfig = {
    dark: __assign(__assign({}, themeCommon), { colorSpecialCase: {
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
    light: __assign(__assign({}, themeCommon), { colorSpecialCase: {
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
};
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi90aGVtZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO0FBQzNCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUU1QixJQUFNLFdBQVcsR0FBRztJQUNsQixRQUFRLEVBQUUsY0FBYztJQUN4QixRQUFRLEVBQUUsY0FBYztJQUN4QixxREFBcUQ7SUFDckQsdUJBQXVCO0lBQ3ZCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtLQUNaO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFO1lBQ1YsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixJQUFJLEVBQUUseUJBQXlCO1NBQ2hDO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixLQUFLLEVBQUUsR0FBRztZQUNWLE9BQU8sRUFBRSxHQUFHO1lBQ1osTUFBTSxFQUFFLEdBQUc7WUFDWCxRQUFRLEVBQUUsR0FBRztZQUNiLElBQUksRUFBRSxHQUFHO1lBQ1QsU0FBUyxFQUFFLEdBQUc7WUFDZCxjQUFjO1NBQ2Y7S0FDRjtJQUNELFlBQVksRUFBRTtRQUNaLElBQUksRUFBRSxDQUFDO0tBQ1I7SUFDRCxPQUFPLEVBQUU7UUFDUCxDQUFDLEVBQUUsS0FBSztLQUNUO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLFNBQVMsaUtBQUEsOEZBT2hCLElBQUE7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxXQUFXLEdBQVE7SUFD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QUFFLFNBQVM7WUFDdEIsVUFBVSxFQUFFLFNBQVM7WUFDckIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixnQkFBZ0IsRUFBRSxTQUFTO1NBQzVCLEVBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsdUNBQXVDO1lBQzlDLFFBQVEsRUFBRSxpREFBaUQ7WUFDM0QsT0FBTyxFQUFFLHNDQUFzQztTQUNoRCxFQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxtQkFBbUI7WUFDekIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0I7U0FDekQsR0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB3aXRoTWVkaWEgfSBmcm9tICcuL3V0aWxzL21hdGNoLW1lZGlhJztcblxuY29uc3QgUEFHRV9NSU5fV0lEVEggPSAzMjA7XG5jb25zdCBQQUdFX01BWF9XSURUSCA9IDExNzY7XG5cbmNvbnN0IHRoZW1lQ29tbW9uID0ge1xuICBtaW5XaWR0aDogUEFHRV9NSU5fV0lEVEgsXG4gIG1heFdpZHRoOiBQQUdFX01BWF9XSURUSCxcbiAgLy8gZG8gbm90IHVzZSBmb3Igbm93LCBsZXQncyBzZWUgaWYgd2UgbmVlZCBpdCBhdCBhbGxcbiAgLy8gbWVkaWE6IE1lZGlhUXVlcmllcyxcbiAgd2l0aE1lZGlhOiB3aXRoTWVkaWEsXG4gIHpJbmRleDoge1xuICAgIGRyb3Bkb3duOiAxMCxcbiAgICBtb2RhbDogMTUsXG4gICAgdG9vbHRpcDogMjAsXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiB7XG4gICAgICBwcmltYXJ5OiAnXCJJbnRlclwiLCBzYW5zLXNlcmlmJyxcbiAgICAgIG1vbm86ICdcIkpldEJyYWlucyBNb25vXCIsIHNlcmlmJyxcbiAgICB9LFxuICAgIGZvbnRXZWlnaHQ6IHtcbiAgICAgIC8vIHRoaW46IDEwMCxcbiAgICAgIC8vIGV4dHJhTGlnaHQ6IDIwMCxcbiAgICAgIGxpZ2h0OiAzMDAsXG4gICAgICByZWd1bGFyOiA0MDAsXG4gICAgICBtZWRpdW06IDUwMCxcbiAgICAgIHNlbWlCb2xkOiA2MDAsXG4gICAgICBib2xkOiA3MDAsXG4gICAgICBleHRyYUJvbGQ6IDgwMCxcbiAgICAgIC8vIGJsYWNrOiA5MDAsXG4gICAgfSxcbiAgfSxcbiAgYm9yZGVyUmFkaXVzOiB7XG4gICAgYmFzZTogNCxcbiAgfSxcbiAgcGFkZGluZzoge1xuICAgIDI6ICcyZW0nLFxuICB9LFxuICBhbmltYXRpb25zOiB7XG4gICAgZmFkZUluOiBrZXlmcmFtZXNgXG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lQ29uZmlnOiBhbnkgPSB7XG4gIGRhcms6IHtcbiAgICAuLi50aGVtZUNvbW1vbixcbiAgICBjb2xvclNwZWNpYWxDYXNlOiB7XG4gICAgICBibHVlQmFubmVyOiAnIzI5NEFDQycsXG4gICAgICBibHVlQmFubmVyMjogJyMyQTVEQjInLFxuICAgIH0sXG4gICAgc3R5bGVndWlkZUNvbG9yczoge1xuICAgICAgYmFja2dyb3VuZFByaW1hcnk6ICcjMTYxRDNCJyxcbiAgICAgIGJhY2tncm91bmRTZWNvbmRhcnk6ICcjMEYxNDI5JyxcbiAgICAgIGJhY2tncm91bmRUZXJ0aWFyeTogJyMxMzE5MzMnLFxuICAgICAgYmFja2dyb3VuZFF1YXRlcm5hcnk6ICcjMEYxNDI5JyxcbiAgICAgIGJvcmRlclByaW1hcnk6ICcjMUEyMzQ3JyxcbiAgICAgIGJvcmRlclNlY29uZGFyeTogJyM1QzYwNzMnLFxuICAgICAgYm9yZGVyUmVkOiAnI0ZGODY4MCcsXG4gICAgICBmaWxsUHJpbWFyeVJlZDogJyNCMjMzMkQnLFxuICAgICAgZmlsbFByaW1hcnlSZWRIb3ZlcjogJyM5MzJGMzAnLFxuICAgICAgZmlsbFByaW1hcnlSZWRDbGljazogJyM3NDJBMzMnLFxuICAgICAgZmlsbFByaW1hcnlCbHVlOiAnIzI5NEFDQycsXG4gICAgICBmaWxsUHJpbWFyeUJsdWVIb3ZlcjogJyMxMTJBOEMnLFxuICAgICAgZmlsbFByaW1hcnlCbHVlQ2xpY2s6ICcjMTQyNjZEJyxcbiAgICAgIGZpbGxTZWNvbmRhcnk6ICcjMUIyNTRBJyxcbiAgICAgIGZpbGxTZWNvbmRhcnlSZWRIb3ZlcjogJyNGRjg2ODAyOScsXG4gICAgICBmaWxsU2Vjb25kYXJ5UmVkQ2xpY2s6ICcjRkY4NjgwMTQnLFxuICAgICAgZmlsbFNlY29uZGFyeUJsdWVIb3ZlcjogJyM3NDkwRkYyOScsXG4gICAgICBmaWxsU2Vjb25kYXJ5Qmx1ZUNsaWNrOiAnIzc0OTBGRjE0JyxcbiAgICAgIGZpbGxUZXJ0cmlhcnk6ICcjMjkzNjY3JyxcbiAgICAgIGZpbGxHcmVlbjogJyMyRENDODUnLFxuICAgICAgZmlsbFZpb2xldEdyYWRpZW50OlxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KDI2Ni41ZGVnLCAjQTg4MEZGIDkuMyUsICM4QjVCRjEgOTQuMzklKScsXG4gICAgICBmaWxsTG9hZGluZ0luVGFibGU6XG4gICAgICAgICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxQjI1NEEgNDMuNiUsIHJnYmEoMjIsIDI5LCA1OSwgMCkgMTAwJSknLFxuICAgICAgY29udGVudFByaW1hcnk6ICcjREFEQ0U1JyxcbiAgICAgIGNvbnRlbnRTZWNvbmRhcnk6ICcjQThBREJGJyxcbiAgICAgIGNvbnRlbnRUZXJ0aWFyeTogJyM5ODlEQjInLFxuICAgICAgY29udGVudFF1YXRlcm5hcnk6ICcjOEQ5MkE2JyxcbiAgICAgIGNvbnRlbnRPbkZpbGw6ICcjRjJGMkYyJyxcbiAgICAgIGNvbnRlbnRCbHVlOiAnIzhGQTZGRicsXG4gICAgICBjb250ZW50UmVkOiAnI0ZGODY4MCcsXG4gICAgICBjb250ZW50R3JlZW46ICcjNENEOTlBJyxcbiAgICAgIGNvbnRlbnRWaW9sZXQ6ICcjQTg4MEZGJyxcbiAgICAgIGNvbnRlbnRZZWxsb3c6ICcjRTBCQjM4JyxcbiAgICAgIGNvbnRlbnRXYXJtR3JlZW46ICcjQkREOTRDJyxcbiAgICAgIGNvbnRlbnRMaWdodEJsdWU6ICcjOEZBNkZGJyxcbiAgICB9LFxuICAgIGJveFNoYWRvdzoge1xuICAgICAgdW5zZXQ6ICd1bnNldCcsXG4gICAgICBibG9jazogJzBweCAycHggNHB4ICMwRjE0MjknLFxuICAgICAgZHJvcGRvd246ICdkcm9wLXNoYWRvdygwcHggMnB4IDE2cHggIzBGMTQyOSknLFxuICAgICAgdG9vbHRpcDogJzBweCA0cHggOHB4ICMwRjE0MjknLFxuICAgIH0sXG4gICAgYm9yZGVyOiB7XG4gICAgICBiYXNlOiAnMXB4IHNvbGlkICM1QzYwNzMnLCAvLyBib3JkZXJTZWNvbmRhcnlcbiAgICAgIHNlcGFyYXRvcjogYDFweCBzb2xpZCAjMUEyMzQ3YCwgLy8gYm9yZGVyUHJpbWFyeVxuICAgICAgdGFibGVSb3dTZXBhcmF0b3I6ICcxcHggc29saWQgIzFBMjM0NycsIC8vIGJvcmRlclByaW1hcnlcbiAgICB9LFxuICB9LFxuICBsaWdodDoge1xuICAgIC4uLnRoZW1lQ29tbW9uLFxuICAgIGNvbG9yU3BlY2lhbENhc2U6IHtcbiAgICAgIGJsdWVCYW5uZXI6ICcjMjk0QUNDJyxcbiAgICAgIGJsdWVCYW5uZXIyOiAnIzJBNURCMicsXG4gICAgfSxcbiAgICBzdHlsZWd1aWRlQ29sb3JzOiB7XG4gICAgICBiYWNrZ3JvdW5kUHJpbWFyeTogJyNGRkZGRkYnLFxuICAgICAgYmFja2dyb3VuZFNlY29uZGFyeTogJyNGMkYzRjUnLFxuICAgICAgYmFja2dyb3VuZFRlcnRpYXJ5OiAnIzE4MUQ0MCcsXG4gICAgICBiYWNrZ3JvdW5kUXVhdGVybmFyeTogJyMxNjFBMzMnLFxuICAgICAgYm9yZGVyUHJpbWFyeTogJyNGMkYzRjUnLFxuICAgICAgYm9yZGVyU2Vjb25kYXJ5OiAnI0QyRDREOScsXG4gICAgICBib3JkZXJSZWQ6ICcjRTYzMzJBJyxcbiAgICAgIGZpbGxQcmltYXJ5UmVkOiAnI0U2MzMyQScsXG4gICAgICBmaWxsUHJpbWFyeVJlZEhvdmVyOiAnI0QyMzAyOCcsXG4gICAgICBmaWxsUHJpbWFyeVJlZENsaWNrOiAnI0JEMkUyNycsXG4gICAgICBmaWxsUHJpbWFyeUJsdWU6ICcjMDAyMUE1JyxcbiAgICAgIGZpbGxQcmltYXJ5Qmx1ZUhvdmVyOiAnIzA1MUY4OScsXG4gICAgICBmaWxsUHJpbWFyeUJsdWVDbGljazogJyMwODFGN0InLFxuICAgICAgZmlsbFNlY29uZGFyeTogJyNGNUY1RjcnLFxuICAgICAgZmlsbFNlY29uZGFyeVJlZEhvdmVyOiAnI0U2MzMyQTE0JyxcbiAgICAgIGZpbGxTZWNvbmRhcnlSZWRDbGljazogJyNFNjMzMkExRicsXG4gICAgICBmaWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyOiAnIzAwMjFBNTE0JyxcbiAgICAgIGZpbGxTZWNvbmRhcnlCbHVlQ2xpY2s6ICcjMDAyMUE1MUYnLFxuICAgICAgZmlsbFRlcnRyaWFyeTogJyNGRUZFRkYnLFxuICAgICAgZmlsbEdyZWVuOiAnIzJEQ0M4NScsXG4gICAgICBmaWxsVmlvbGV0R3JhZGllbnQ6XG4gICAgICAgICdsaW5lYXItZ3JhZGllbnQoMjY2LjVkZWcsICNBODgwRkYgOS4zJSwgIzhCNUJGMSA5NC4zOSUpJyxcbiAgICAgIGZpbGxMb2FkaW5nSW5UYWJsZTpcbiAgICAgICAgJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgI0YyRjNGNSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKScsXG4gICAgICBjb250ZW50UHJpbWFyeTogJyMxQTE5MTknLFxuICAgICAgY29udGVudFNlY29uZGFyeTogJyM4NDg2OEMnLFxuICAgICAgY29udGVudFRlcnRpYXJ5OiAnI0JBQkJCRicsXG4gICAgICBjb250ZW50UXVhdGVybmFyeTogJyNEMkQzRDknLFxuICAgICAgY29udGVudE9uRmlsbDogJyNGRkZGRkYnLFxuICAgICAgY29udGVudEJsdWU6ICcjMDAyMUE1JyxcbiAgICAgIGNvbnRlbnRSZWQ6ICcjRTYzMzJBJyxcbiAgICAgIGNvbnRlbnRHcmVlbjogJyMzMURFOTEnLFxuICAgICAgY29udGVudFZpb2xldDogJyM4QjVCRjEnLFxuICAgICAgY29udGVudFllbGxvdzogJyNGMUJGMEInLFxuICAgICAgY29udGVudFdhcm1HcmVlbjogJyNCQkRFMzEnLFxuICAgICAgY29udGVudExpZ2h0Qmx1ZTogJyM3NDkwRkYnLFxuICAgIH0sXG4gICAgYm94U2hhZG93OiB7XG4gICAgICB1bnNldDogJ3Vuc2V0JyxcbiAgICAgIGJsb2NrOiAnMHB4IDJweCA0cHggcmdiYSgxNDMsIDE0NCwgMTUyLCAwLjE1KScsXG4gICAgICBkcm9wZG93bjogJ2Ryb3Atc2hhZG93KDBweCA0cHggOHB4IHJnYmEoMjYsIDI1LCAyNSwgMC4xNikpJyxcbiAgICAgIHRvb2x0aXA6ICcwcHggNHB4IDhweCByZ2JhKDE0MywgMTQ0LCAxNTIsIDAuMiknLFxuICAgIH0sXG4gICAgYm9yZGVyOiB7XG4gICAgICBiYXNlOiAnMXB4IHNvbGlkICNEMkQ0RDknLFxuICAgICAgc2VwYXJhdG9yOiAnMXB4IHNvbGlkICNGMkYzRjUnLCAvLyBib3JkZXJQcmltYXJ5XG4gICAgICB0YWJsZVJvd1NlcGFyYXRvcjogJzFweCBzb2xpZCAjRjJGM0Y1JywgLy8gYm9yZGVyUHJpbWFyeVxuICAgIH0sXG4gIH0sXG59O1xuXG50eXBlIFRoZW1lQ29uZmlnID0gdHlwZW9mIHRoZW1lQ29uZmlnLmxpZ2h0O1xuXG5kZWNsYXJlIG1vZHVsZSAnc3R5bGVkLWNvbXBvbmVudHMnIHtcbiAgZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VGhlbWUgZXh0ZW5kcyBUaGVtZUNvbmZpZyB7fVxufVxuIl19
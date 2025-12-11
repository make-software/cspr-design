export const deriveFtTokenMarketDataService = (contractPackageInfo) => {
    if (!contractPackageInfo) {
        return {
            price: null,
            volume_24h: null,
            iconPath: null,
            website: null,
        };
    }
    const coinGeckoData = contractPackageInfo?.coingecko_data;
    const friendlyMarketData = contractPackageInfo?.friendlymarket_data;
    if (coinGeckoData) {
        return {
            ...coinGeckoData,
            iconPath: 'assets/icons/logos/coingecko_logo.png',
            website: contractPackageInfo?.coingecko_id
                ? `https://www.coingecko.com/en/coins/${contractPackageInfo.coingecko_id}`
                : null,
        };
    }
    if (friendlyMarketData) {
        return {
            ...friendlyMarketData,
            iconPath: 'assets/icons/logos/fm_logo.png',
            website: contractPackageInfo?.latest_version_contract_hash
                ? `https://www.friendly.market/swap/CSPR/${contractPackageInfo.latest_version_contract_hash}`
                : null,
        };
    }
};
export default deriveFtTokenMarketDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVyaXZlLWZ0LXRva2VuLW1hcmtldC1kYXRhLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzL2Rlcml2ZS1mdC10b2tlbi1tYXJrZXQtZGF0YS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHLENBQzVDLG1CQUFtRSxFQUNoRCxFQUFFO0lBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pCLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sYUFBYSxHQUFHLG1CQUFtQixFQUFFLGNBQWMsQ0FBQztJQUMxRCxNQUFNLGtCQUFrQixHQUFHLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDO0lBRXBFLElBQUksYUFBYSxFQUFFLENBQUM7UUFDbEIsT0FBTztZQUNMLEdBQUcsYUFBYTtZQUNoQixRQUFRLEVBQUUsdUNBQXVDO1lBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZO2dCQUN4QyxDQUFDLENBQUMsc0NBQXNDLG1CQUFtQixDQUFDLFlBQVksRUFBRTtnQkFDMUUsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN2QixPQUFPO1lBQ0wsR0FBRyxrQkFBa0I7WUFDckIsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsNEJBQTRCO2dCQUN4RCxDQUFDLENBQUMseUNBQXlDLG1CQUFtQixDQUFDLDRCQUE0QixFQUFFO2dCQUM3RixDQUFDLENBQUMsSUFBSTtTQUNULENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsZUFBZSw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlcGxveUNvbnRyYWN0UGFja2FnZVJlc3VsdCB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IEZ0VG9rZW5NYXJrZXREYXRhIH0gZnJvbSAnLi4vdHlwZXMvRlRUb2tlbic7XG5cbmV4cG9ydCBjb25zdCBkZXJpdmVGdFRva2VuTWFya2V0RGF0YVNlcnZpY2UgPSAoXG4gIGNvbnRyYWN0UGFja2FnZUluZm86IERlcGxveUNvbnRyYWN0UGFja2FnZVJlc3VsdCB8IHVuZGVmaW5lZCB8IG51bGwsXG4pOiBGdFRva2VuTWFya2V0RGF0YSA9PiB7XG4gIGlmICghY29udHJhY3RQYWNrYWdlSW5mbykge1xuICAgIHJldHVybiB7XG4gICAgICBwcmljZTogbnVsbCxcbiAgICAgIHZvbHVtZV8yNGg6IG51bGwsXG4gICAgICBpY29uUGF0aDogbnVsbCxcbiAgICAgIHdlYnNpdGU6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGNvaW5HZWNrb0RhdGEgPSBjb250cmFjdFBhY2thZ2VJbmZvPy5jb2luZ2Vja29fZGF0YTtcbiAgY29uc3QgZnJpZW5kbHlNYXJrZXREYXRhID0gY29udHJhY3RQYWNrYWdlSW5mbz8uZnJpZW5kbHltYXJrZXRfZGF0YTtcblxuICBpZiAoY29pbkdlY2tvRGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jb2luR2Vja29EYXRhLFxuICAgICAgaWNvblBhdGg6ICdhc3NldHMvaWNvbnMvbG9nb3MvY29pbmdlY2tvX2xvZ28ucG5nJyxcbiAgICAgIHdlYnNpdGU6IGNvbnRyYWN0UGFja2FnZUluZm8/LmNvaW5nZWNrb19pZFxuICAgICAgICA/IGBodHRwczovL3d3dy5jb2luZ2Vja28uY29tL2VuL2NvaW5zLyR7Y29udHJhY3RQYWNrYWdlSW5mby5jb2luZ2Vja29faWR9YFxuICAgICAgICA6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChmcmllbmRseU1hcmtldERhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZnJpZW5kbHlNYXJrZXREYXRhLFxuICAgICAgaWNvblBhdGg6ICdhc3NldHMvaWNvbnMvbG9nb3MvZm1fbG9nby5wbmcnLFxuICAgICAgd2Vic2l0ZTogY29udHJhY3RQYWNrYWdlSW5mbz8ubGF0ZXN0X3ZlcnNpb25fY29udHJhY3RfaGFzaFxuICAgICAgICA/IGBodHRwczovL3d3dy5mcmllbmRseS5tYXJrZXQvc3dhcC9DU1BSLyR7Y29udHJhY3RQYWNrYWdlSW5mby5sYXRlc3RfdmVyc2lvbl9jb250cmFjdF9oYXNofWBcbiAgICAgICAgOiBudWxsLFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlcml2ZUZ0VG9rZW5NYXJrZXREYXRhU2VydmljZTtcbiJdfQ==
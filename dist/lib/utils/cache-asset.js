export var getImageProxyUrl = function (url, _a) {
    var ttl = _a.ttl, width = _a.width;
    if (!url) {
        return undefined;
    }
    return url;
    // return config.image_proxy_url
    //   ? `${config.image_proxy_url}/${width},fit,ttl${ttl}/${url}`
    //   : url;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtYXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzL2NhY2hlLWFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQzlCLEdBQXVCLEVBQ3ZCLEVBQWtDO1FBQWhDLEdBQUcsU0FBQSxFQUFFLEtBQUssV0FBQTtJQUVaLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELE9BQU8sR0FBRyxDQUFDO0lBRVgsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtJQUNoRSxXQUFXO0FBQ2IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEltYWdlUHJveHlVcmxQcm9wcyB7XG4gIHR0bDogc3RyaW5nO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEltYWdlUHJveHlVcmwgPSAoXG4gIHVybDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICB7IHR0bCwgd2lkdGggfTogSW1hZ2VQcm94eVVybFByb3BzXG4pID0+IHtcbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcblxuICAvLyByZXR1cm4gY29uZmlnLmltYWdlX3Byb3h5X3VybFxuICAvLyAgID8gYCR7Y29uZmlnLmltYWdlX3Byb3h5X3VybH0vJHt3aWR0aH0sZml0LHR0bCR7dHRsfS8ke3VybH1gXG4gIC8vICAgOiB1cmw7XG59O1xuIl19
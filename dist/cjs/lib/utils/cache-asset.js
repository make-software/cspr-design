"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageProxyUrl = void 0;
var getImageProxyUrl = function (url, _a) {
    var ttl = _a.ttl, width = _a.width;
    if (!url) {
        return undefined;
    }
    return url;
    // return config.image_proxy_url
    //   ? `${config.image_proxy_url}/${width},fit,ttl${ttl}/${url}`
    //   : url;
};
exports.getImageProxyUrl = getImageProxyUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtYXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3V0aWxzL2NhY2hlLWFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtPLElBQU0sZ0JBQWdCLEdBQUcsVUFDOUIsR0FBdUIsRUFDdkIsRUFBa0M7UUFBaEMsR0FBRyxTQUFBLEVBQUUsS0FBSyxXQUFBO0lBRVosSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBRUQsT0FBTyxHQUFHLENBQUM7SUFFWCxnQ0FBZ0M7SUFDaEMsZ0VBQWdFO0lBQ2hFLFdBQVc7QUFDYixDQUFDLENBQUM7QUFiVyxRQUFBLGdCQUFnQixvQkFhM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSW1hZ2VQcm94eVVybFByb3BzIHtcclxuICB0dGw6IHN0cmluZztcclxuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEltYWdlUHJveHlVcmwgPSAoXHJcbiAgdXJsOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgeyB0dGwsIHdpZHRoIH06IEltYWdlUHJveHlVcmxQcm9wc1xyXG4pID0+IHtcclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHJldHVybiB1cmw7XHJcblxyXG4gIC8vIHJldHVybiBjb25maWcuaW1hZ2VfcHJveHlfdXJsXHJcbiAgLy8gICA/IGAke2NvbmZpZy5pbWFnZV9wcm94eV91cmx9LyR7d2lkdGh9LGZpdCx0dGwke3R0bH0vJHt1cmx9YFxyXG4gIC8vICAgOiB1cmw7XHJcbn07XHJcbiJdfQ==
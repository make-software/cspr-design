"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNamedKeyPrefix = exports.hasNamedKeyPrefix = exports.hashPrefixRegEx = exports.NamedKeyPrefix = void 0;
var NamedKeyPrefix;
(function (NamedKeyPrefix) {
    NamedKeyPrefix["HASH"] = "hash-";
    NamedKeyPrefix["CONTRACT"] = "contract-";
    NamedKeyPrefix["UREF"] = "uref-";
    NamedKeyPrefix["DEPLOY"] = "deploy-";
    NamedKeyPrefix["ERA_INFO_PREFIX"] = "era-";
    NamedKeyPrefix["BALANCE_PREFIX"] = "balance-";
    NamedKeyPrefix["BID_PREFIX"] = "bid-";
    NamedKeyPrefix["WITHDRAW_PREFIX"] = "withdraw-";
    NamedKeyPrefix["DICTIONARY_PREFIX"] = "dictionary-";
    NamedKeyPrefix["ACCOUNT_HASH"] = "account-hash-";
    NamedKeyPrefix["CONTRACT_PACKAGE"] = "contract-package-";
})(NamedKeyPrefix = exports.NamedKeyPrefix || (exports.NamedKeyPrefix = {}));
exports.hashPrefixRegEx = new RegExp("(".concat(Object.values(NamedKeyPrefix).join('|'), ")(?=[0-9a-fA-F])"), 'i');
var hasNamedKeyPrefix = function (value) {
    return typeof value === 'string' &&
        Object.values(NamedKeyPrefix).some(function (prefix) {
            return (value || '').includes(prefix);
        });
};
exports.hasNamedKeyPrefix = hasNamedKeyPrefix;
var getNamedKeyPrefix = function (value) {
    var hasPrefix = (0, exports.hasNamedKeyPrefix)(value);
    return hasPrefix && value.match(exports.hashPrefixRegEx)
        ? value.match(exports.hashPrefixRegEx)[0]
        : '';
};
exports.getNamedKeyPrefix = getNamedKeyPrefix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZWQta2V5LXByZWZpeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvbmFtZWQta2V5LXByZWZpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLGNBWVg7QUFaRCxXQUFZLGNBQWM7SUFDeEIsZ0NBQWMsQ0FBQTtJQUNkLHdDQUFzQixDQUFBO0lBQ3RCLGdDQUFjLENBQUE7SUFDZCxvQ0FBa0IsQ0FBQTtJQUNsQiwwQ0FBd0IsQ0FBQTtJQUN4Qiw2Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBbUIsQ0FBQTtJQUNuQiwrQ0FBNkIsQ0FBQTtJQUM3QixtREFBaUMsQ0FBQTtJQUNqQyxnREFBOEIsQ0FBQTtJQUM5Qix3REFBc0MsQ0FBQTtBQUN4QyxDQUFDLEVBWlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFZekI7QUFFWSxRQUFBLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FDdkMsV0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQWtCLEVBQzdELEdBQUcsQ0FDSixDQUFDO0FBRUssSUFBTSxpQkFBaUIsR0FBRyxVQUFDLEtBQVU7SUFDMUMsT0FBQSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUN4QyxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFBOUIsQ0FBOEIsQ0FDL0I7QUFIRCxDQUdDLENBQUM7QUFKUyxRQUFBLGlCQUFpQixxQkFJMUI7QUFFRyxJQUFNLGlCQUFpQixHQUFHLFVBQUMsS0FBYTtJQUM3QyxJQUFNLFNBQVMsR0FBRyxJQUFBLHlCQUFpQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNDLE9BQU8sU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsdUJBQWUsQ0FBQztRQUM5QyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1QkFBZSxDQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDLENBQUM7QUFOVyxRQUFBLGlCQUFpQixxQkFNNUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBOYW1lZEtleVByZWZpeCB7XHJcbiAgSEFTSCA9ICdoYXNoLScsXHJcbiAgQ09OVFJBQ1QgPSAnY29udHJhY3QtJyxcclxuICBVUkVGID0gJ3VyZWYtJyxcclxuICBERVBMT1kgPSAnZGVwbG95LScsXHJcbiAgRVJBX0lORk9fUFJFRklYID0gJ2VyYS0nLFxyXG4gIEJBTEFOQ0VfUFJFRklYID0gJ2JhbGFuY2UtJyxcclxuICBCSURfUFJFRklYID0gJ2JpZC0nLFxyXG4gIFdJVEhEUkFXX1BSRUZJWCA9ICd3aXRoZHJhdy0nLFxyXG4gIERJQ1RJT05BUllfUFJFRklYID0gJ2RpY3Rpb25hcnktJyxcclxuICBBQ0NPVU5UX0hBU0ggPSAnYWNjb3VudC1oYXNoLScsXHJcbiAgQ09OVFJBQ1RfUEFDS0FHRSA9ICdjb250cmFjdC1wYWNrYWdlLScsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNoUHJlZml4UmVnRXggPSBuZXcgUmVnRXhwKFxyXG4gIGAoJHtPYmplY3QudmFsdWVzKE5hbWVkS2V5UHJlZml4KS5qb2luKCd8Jyl9KSg/PVswLTlhLWZBLUZdKWAsXHJcbiAgJ2knXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgaGFzTmFtZWRLZXlQcmVmaXggPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT5cclxuICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXHJcbiAgT2JqZWN0LnZhbHVlcyhOYW1lZEtleVByZWZpeCkuc29tZSgocHJlZml4KSA9PlxyXG4gICAgKHZhbHVlIHx8ICcnKS5pbmNsdWRlcyhwcmVmaXgpXHJcbiAgKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROYW1lZEtleVByZWZpeCA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBoYXNQcmVmaXggPSBoYXNOYW1lZEtleVByZWZpeCh2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBoYXNQcmVmaXggJiYgdmFsdWUubWF0Y2goaGFzaFByZWZpeFJlZ0V4KVxyXG4gICAgPyB2YWx1ZS5tYXRjaChoYXNoUHJlZml4UmVnRXgpIVswXVxyXG4gICAgOiAnJztcclxufTtcclxuIl19
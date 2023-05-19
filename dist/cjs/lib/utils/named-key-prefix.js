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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZWQta2V5LXByZWZpeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvbmFtZWQta2V5LXByZWZpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLGNBWVg7QUFaRCxXQUFZLGNBQWM7SUFDeEIsZ0NBQWMsQ0FBQTtJQUNkLHdDQUFzQixDQUFBO0lBQ3RCLGdDQUFjLENBQUE7SUFDZCxvQ0FBa0IsQ0FBQTtJQUNsQiwwQ0FBd0IsQ0FBQTtJQUN4Qiw2Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBbUIsQ0FBQTtJQUNuQiwrQ0FBNkIsQ0FBQTtJQUM3QixtREFBaUMsQ0FBQTtJQUNqQyxnREFBOEIsQ0FBQTtJQUM5Qix3REFBc0MsQ0FBQTtBQUN4QyxDQUFDLEVBWlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFZekI7QUFFWSxRQUFBLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FDdkMsV0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQWtCLEVBQzdELEdBQUcsQ0FDSixDQUFDO0FBRUssSUFBTSxpQkFBaUIsR0FBRyxVQUFDLEtBQVU7SUFDMUMsT0FBQSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUN4QyxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFBOUIsQ0FBOEIsQ0FDL0I7QUFIRCxDQUdDLENBQUM7QUFKUyxRQUFBLGlCQUFpQixxQkFJMUI7QUFFRyxJQUFNLGlCQUFpQixHQUFHLFVBQUMsS0FBYTtJQUM3QyxJQUFNLFNBQVMsR0FBRyxJQUFBLHlCQUFpQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNDLE9BQU8sU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsdUJBQWUsQ0FBQztRQUM5QyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1QkFBZSxDQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDLENBQUM7QUFOVyxRQUFBLGlCQUFpQixxQkFNNUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBOYW1lZEtleVByZWZpeCB7XG4gIEhBU0ggPSAnaGFzaC0nLFxuICBDT05UUkFDVCA9ICdjb250cmFjdC0nLFxuICBVUkVGID0gJ3VyZWYtJyxcbiAgREVQTE9ZID0gJ2RlcGxveS0nLFxuICBFUkFfSU5GT19QUkVGSVggPSAnZXJhLScsXG4gIEJBTEFOQ0VfUFJFRklYID0gJ2JhbGFuY2UtJyxcbiAgQklEX1BSRUZJWCA9ICdiaWQtJyxcbiAgV0lUSERSQVdfUFJFRklYID0gJ3dpdGhkcmF3LScsXG4gIERJQ1RJT05BUllfUFJFRklYID0gJ2RpY3Rpb25hcnktJyxcbiAgQUNDT1VOVF9IQVNIID0gJ2FjY291bnQtaGFzaC0nLFxuICBDT05UUkFDVF9QQUNLQUdFID0gJ2NvbnRyYWN0LXBhY2thZ2UtJyxcbn1cblxuZXhwb3J0IGNvbnN0IGhhc2hQcmVmaXhSZWdFeCA9IG5ldyBSZWdFeHAoXG4gIGAoJHtPYmplY3QudmFsdWVzKE5hbWVkS2V5UHJlZml4KS5qb2luKCd8Jyl9KSg/PVswLTlhLWZBLUZdKWAsXG4gICdpJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGhhc05hbWVkS2V5UHJlZml4ID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgT2JqZWN0LnZhbHVlcyhOYW1lZEtleVByZWZpeCkuc29tZSgocHJlZml4KSA9PlxuICAgICh2YWx1ZSB8fCAnJykuaW5jbHVkZXMocHJlZml4KVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0TmFtZWRLZXlQcmVmaXggPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGhhc1ByZWZpeCA9IGhhc05hbWVkS2V5UHJlZml4KHZhbHVlKTtcblxuICByZXR1cm4gaGFzUHJlZml4ICYmIHZhbHVlLm1hdGNoKGhhc2hQcmVmaXhSZWdFeClcbiAgICA/IHZhbHVlLm1hdGNoKGhhc2hQcmVmaXhSZWdFeCkhWzBdXG4gICAgOiAnJztcbn07XG4iXX0=
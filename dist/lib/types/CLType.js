export var CLType;
(function (CLType) {
    /** A boolean value */
    CLType["Bool"] = "Bool";
    /** A 32-bit signed integer */
    CLType["I32"] = "I32";
    /** A 64-bit signed integer */
    CLType["I64"] = "I64";
    /** An 8-bit unsigned integer (a byte) */
    CLType["U8"] = "U8";
    /** A 32-bit unsigned integer */
    CLType["U32"] = "U32";
    /** A 64-bit unsigned integer */
    CLType["U64"] = "U64";
    /** A 128-bit unsigned integer */
    CLType["U128"] = "U128";
    /** A 256-bit unsigned integer */
    CLType["U256"] = "U256";
    /** A 512-bit unsigned integer */
    CLType["U512"] = "U512";
    /** A unit type, i.e. type with no values (analogous to `void` in C and `()` in Rust) */
    CLType["Unit"] = "Unit";
    /** A string of characters */
    CLType["String"] = "String";
    /** A key in the global state - URef/hash/etc. */
    CLType["Key"] = "Key";
    /** An Unforgeable Reference (URef) */
    CLType["URef"] = "URef";
    /** An [[Option]], i.e. a type that can contain a value or nothing at all */
    CLType["Option"] = "Option";
    /** A list of values */
    CLType["List"] = "List";
    /** A fixed-length array of bytes */
    CLType["ByteArray"] = "ByteArray";
    /**
     * A [[Result]], i.e. a type that can contain either a value representing success or one representing failure.
     */
    CLType["Result"] = "Result";
    /** A key-value map. */
    CLType["Map"] = "Map";
    /** A 1-value tuple. */
    CLType["Tuple1"] = "Tuple1";
    /** A 2-value tuple, i.e. a pair of values. */
    CLType["Tuple2"] = "Tuple2";
    /** A 3-value tuple. */
    CLType["Tuple3"] = "Tuple3";
    /** A value of any type. */
    CLType["Any"] = "Any";
    /** A value of public key type. */
    CLType["PublicKey"] = "PublicKey";
})(CLType || (CLType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0xUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90eXBlcy9DTFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksTUFpRFg7QUFqREQsV0FBWSxNQUFNO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBYSxDQUFBO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFXLENBQUE7SUFDWCw4QkFBOEI7SUFDOUIscUJBQVcsQ0FBQTtJQUNYLHlDQUF5QztJQUN6QyxtQkFBUyxDQUFBO0lBQ1QsZ0NBQWdDO0lBQ2hDLHFCQUFXLENBQUE7SUFDWCxnQ0FBZ0M7SUFDaEMscUJBQVcsQ0FBQTtJQUNYLGlDQUFpQztJQUNqQyx1QkFBYSxDQUFBO0lBQ2IsaUNBQWlDO0lBQ2pDLHVCQUFhLENBQUE7SUFDYixpQ0FBaUM7SUFDakMsdUJBQWEsQ0FBQTtJQUNiLHdGQUF3RjtJQUN4Rix1QkFBYSxDQUFBO0lBQ2IsNkJBQTZCO0lBQzdCLDJCQUFpQixDQUFBO0lBQ2pCLGlEQUFpRDtJQUNqRCxxQkFBVyxDQUFBO0lBQ1gsc0NBQXNDO0lBQ3RDLHVCQUFhLENBQUE7SUFDYiw0RUFBNEU7SUFDNUUsMkJBQWlCLENBQUE7SUFDakIsdUJBQXVCO0lBQ3ZCLHVCQUFhLENBQUE7SUFDYixvQ0FBb0M7SUFDcEMsaUNBQXVCLENBQUE7SUFDdkI7O09BRUc7SUFDSCwyQkFBaUIsQ0FBQTtJQUNqQix1QkFBdUI7SUFDdkIscUJBQVcsQ0FBQTtJQUNYLHVCQUF1QjtJQUN2QiwyQkFBaUIsQ0FBQTtJQUNqQiw4Q0FBOEM7SUFDOUMsMkJBQWlCLENBQUE7SUFDakIsdUJBQXVCO0lBQ3ZCLDJCQUFpQixDQUFBO0lBQ2pCLDJCQUEyQjtJQUMzQixxQkFBVyxDQUFBO0lBQ1gsa0NBQWtDO0lBQ2xDLGlDQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFqRFcsTUFBTSxLQUFOLE1BQU0sUUFpRGpCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ0xUeXBlIHtcbiAgLyoqIEEgYm9vbGVhbiB2YWx1ZSAqL1xuICBCb29sID0gJ0Jvb2wnLFxuICAvKiogQSAzMi1iaXQgc2lnbmVkIGludGVnZXIgKi9cbiAgSTMyID0gJ0kzMicsXG4gIC8qKiBBIDY0LWJpdCBzaWduZWQgaW50ZWdlciAqL1xuICBJNjQgPSAnSTY0JyxcbiAgLyoqIEFuIDgtYml0IHVuc2lnbmVkIGludGVnZXIgKGEgYnl0ZSkgKi9cbiAgVTggPSAnVTgnLFxuICAvKiogQSAzMi1iaXQgdW5zaWduZWQgaW50ZWdlciAqL1xuICBVMzIgPSAnVTMyJyxcbiAgLyoqIEEgNjQtYml0IHVuc2lnbmVkIGludGVnZXIgKi9cbiAgVTY0ID0gJ1U2NCcsXG4gIC8qKiBBIDEyOC1iaXQgdW5zaWduZWQgaW50ZWdlciAqL1xuICBVMTI4ID0gJ1UxMjgnLFxuICAvKiogQSAyNTYtYml0IHVuc2lnbmVkIGludGVnZXIgKi9cbiAgVTI1NiA9ICdVMjU2JyxcbiAgLyoqIEEgNTEyLWJpdCB1bnNpZ25lZCBpbnRlZ2VyICovXG4gIFU1MTIgPSAnVTUxMicsXG4gIC8qKiBBIHVuaXQgdHlwZSwgaS5lLiB0eXBlIHdpdGggbm8gdmFsdWVzIChhbmFsb2dvdXMgdG8gYHZvaWRgIGluIEMgYW5kIGAoKWAgaW4gUnVzdCkgKi9cbiAgVW5pdCA9ICdVbml0JyxcbiAgLyoqIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgKi9cbiAgU3RyaW5nID0gJ1N0cmluZycsXG4gIC8qKiBBIGtleSBpbiB0aGUgZ2xvYmFsIHN0YXRlIC0gVVJlZi9oYXNoL2V0Yy4gKi9cbiAgS2V5ID0gJ0tleScsXG4gIC8qKiBBbiBVbmZvcmdlYWJsZSBSZWZlcmVuY2UgKFVSZWYpICovXG4gIFVSZWYgPSAnVVJlZicsXG4gIC8qKiBBbiBbW09wdGlvbl1dLCBpLmUuIGEgdHlwZSB0aGF0IGNhbiBjb250YWluIGEgdmFsdWUgb3Igbm90aGluZyBhdCBhbGwgKi9cbiAgT3B0aW9uID0gJ09wdGlvbicsXG4gIC8qKiBBIGxpc3Qgb2YgdmFsdWVzICovXG4gIExpc3QgPSAnTGlzdCcsXG4gIC8qKiBBIGZpeGVkLWxlbmd0aCBhcnJheSBvZiBieXRlcyAqL1xuICBCeXRlQXJyYXkgPSAnQnl0ZUFycmF5JyxcbiAgLyoqXG4gICAqIEEgW1tSZXN1bHRdXSwgaS5lLiBhIHR5cGUgdGhhdCBjYW4gY29udGFpbiBlaXRoZXIgYSB2YWx1ZSByZXByZXNlbnRpbmcgc3VjY2VzcyBvciBvbmUgcmVwcmVzZW50aW5nIGZhaWx1cmUuXG4gICAqL1xuICBSZXN1bHQgPSAnUmVzdWx0JyxcbiAgLyoqIEEga2V5LXZhbHVlIG1hcC4gKi9cbiAgTWFwID0gJ01hcCcsXG4gIC8qKiBBIDEtdmFsdWUgdHVwbGUuICovXG4gIFR1cGxlMSA9ICdUdXBsZTEnLFxuICAvKiogQSAyLXZhbHVlIHR1cGxlLCBpLmUuIGEgcGFpciBvZiB2YWx1ZXMuICovXG4gIFR1cGxlMiA9ICdUdXBsZTInLFxuICAvKiogQSAzLXZhbHVlIHR1cGxlLiAqL1xuICBUdXBsZTMgPSAnVHVwbGUzJyxcbiAgLyoqIEEgdmFsdWUgb2YgYW55IHR5cGUuICovXG4gIEFueSA9ICdBbnknLFxuICAvKiogQSB2YWx1ZSBvZiBwdWJsaWMga2V5IHR5cGUuICovXG4gIFB1YmxpY0tleSA9ICdQdWJsaWNLZXknLFxufVxuXG50eXBlIENMVHlwZU1hcFJlc3VsdCA9IHtcbiAgTWFwOiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgQ0xUeXBlTWFwUGFyc2VkUmVzdWx0ID0ge1xuICBrZXk6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbnR5cGUgQ0xUeXBlT3B0aW9uUmVzdWx0ID0ge1xuICBPcHRpb246IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENMVHlwZVBhcnNlZEFjY291bnRSZXN1bHQgPSB7XG4gIEFjY291bnQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENMVHlwZVBhcnNlZExpc3RSZXN1bHQgPSAoQ0xUeXBlTWFwUGFyc2VkUmVzdWx0IHwgc3RyaW5nKVtdO1xuXG5leHBvcnQgdHlwZSBDTFR5cGVUeXBlUmVzdWx0ID0gQ0xUeXBlTWFwUmVzdWx0IHwgQ0xUeXBlT3B0aW9uUmVzdWx0IHwgc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBDTFR5cGVQYXJzZWRSZXN1bHQgPVxuICB8IENMVHlwZVBhcnNlZExpc3RSZXN1bHRcbiAgfCBDTFR5cGVQYXJzZWRBY2NvdW50UmVzdWx0XG4gIHwgQ0xUeXBlTWFwUGFyc2VkUmVzdWx0XG4gIHwgc3RyaW5nXG4gIHwgbnVtYmVyO1xuIl19
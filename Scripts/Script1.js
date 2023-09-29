
function concatenateString(text, maxLength) {
    if (text.length > maxLength) {
        result = text.slice(0, maxLength);
        result = result.toUpperCase();
        result += "...";
        return result;
    }
    else return text;
}

console.log(concatenateString("some cool text", 5));
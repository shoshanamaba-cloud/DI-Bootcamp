function areAnagrams (str1, str2){
     if (typeof str1 !=="string" || typeof str2 !== "string"){
     return "Both elements must be strings";
    }
    const str1Lowercase = str1.toLowerCase().trim();
    const str2Lowercase = str2.toLowerCase().trim();

    if (str1Lowercase.length !== str2Lowercase.length){
        return false;
    }
    
    const sorted1 = str1Lowercase.split("").sort().join("");
    const sorted2 = str2Lowercase.split("").sort().join("");

    return sorted1 === sorted2   
}

console.log(areAnagrams(123, "  glean"));
console.log(areAnagrams("chicken", "pizza"));



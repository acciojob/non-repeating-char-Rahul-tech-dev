function firstNonRepeatedChar(str) {
    // Write your code here
    let freq = {};
	
    for (let ch of str) {
        if (freq[ch]) {
            freq[ch]++;
            
        } else {
            freq[ch] = 1;
        }
       
    }
    for(let ch of str){
        if(freq[ch]==1){
            return ch;
        }
    }

    return "null";
    
}
const input = prompt("Enter a string");

console.log(alert(firstNonRepeatedChar(input)));


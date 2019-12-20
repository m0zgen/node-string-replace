// https://regex101.com/
// https://www.regextester.com/

let text = "*Lorem ipsum dollar*\n" +
    "\n" +
    "![image](upload://6b4Y0QF7WyeR0axK4hfE5kZhLkd.jpeg)\n" +
    "\n" +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"+
    "\n" +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

// Copy [image] tag
let imageTag = text.match(/.*.*g\)/);

// Delete image tag
var deleteImageTag = text.replace(/!\s*\[im[^>]*\](.*?)\s*g\)/g, "");

// Replase empty strings with tag
deleteImageTag = deleteImageTag.replace(/\r?\n\n\n|\r/m, imageTag);

// Example - delete all before *.jpeg)
let test1 = text.substring(text.indexOf('g)\n')+3).replace(/^\s+|\s+$/g, '');

console.log(deleteImageTag);
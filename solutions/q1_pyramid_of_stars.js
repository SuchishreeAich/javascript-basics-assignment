/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (num) => {
    // Write your code here
    text = "";
    if(typeof num === 'number' ) 
    {
        for(var i=0;i<num;i++) {
        var line = "";
        for(var j=0;j<num-1-i;j++) {
            line+=" ";
        }
        for(var j=0;j<i+1;j++) {
            line+="* ";
        }
        text+=" "+line+" \n";
        }
    }
    return text;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (num) => {
    let text = '';

    if(typeof num === 'number')
    {
      for(let i = 0; i < num; i = i + 1)
      {
        let line = '';

        for(let j = 0; j < num - 1 - i; j = j + 1)
        {
          line = line + ' ';
        }
        for(let k = 0; k < i + 1; k = k + 1)
        {
          line = line + '* ';
        }

        text = text + ' ' + line + ' \n';
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

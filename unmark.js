(function (window) {

    'use strict';
    
    var unmark = function unmark(markdown) {
        markdown = markdown.replace(/^\#{1,6}\s*([^\#]*)\s*(\#{1,6})?$/gm, '$1')//heading # and # #
        .replace(/^(([0-9a-zA-Z]\s*)+)$\n[\=|\-]+/gm, '$1') //heading = and -
        .replace(/([\*|\_|~]{1,2})([^\*|\_|~]+)([\*|\_|~]{1,2})/g, '$2') //emphasis * _ ~
        .replace(/(\d\.|\t\d\.?|\t\*?|\*|\-|\+)\s?(.*)/gm, '$2') // list numbered and tab
        .replace(/\[([^\]]+)\](\([^\)]+\)|\[[^\]]+\])/gm, '$1') //hyperlink inline
        .replace(/\[([^\]]+)\]:\s?(.*)/gm, '$1') //hyperlink footnote
        .replace(/[\[|\<]([^\]]+)[\>|\]]/gm, '$1') //hyperlink reference
        .replace(/!\s?(.*)/gm, '$1') //image removal residue
        .replace(/\`{3}(\w+)?.*([^\`]+)\`{3}/g, '$2') //code blocks
        .replace(/\`{1}([^\`]+)\`{1}/g, '$1') //inline code blocks
        .replace(/[\>]\s+/g, '') //blockquotes
        .replace(/\-+|\*+|\_+.*/gm, ''); //horizontal rule
        return markdown;
    }
    
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = unmark;
  else
    window.unmark = unmark;

})(this);
const getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

const getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
};

const slugify = function(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') 		// Replace spaces with -
      .replace(/[^\w-]+/g, '') 	// Remove all non-word chars
      .replace(/--+/g, '-') 		// Replace multiple - with single -
      .replace(/^-+/, '') 		// Trim - from start of text
      .replace(/-+$/, '') 		// Trim - from end of text
}

const createList = ({list, separator = ","}) =>{
    if(!list) return;
    return list.map((text, index) => {
        let sep;
        if(list.length !== index + 1){
            sep = separator;
        }
        return {text, sep}
    })
} 

const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
}

module.exports = { slugify, getSiblings, getClosest, createList, truncateString }
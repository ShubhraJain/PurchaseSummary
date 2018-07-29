function findAncestor (el, selector) {
    if ((el.matches || el.matchesSelector).call(el,selector)) {
        return el;
    }
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,selector)));
    return el;
}

export default findAncestor;
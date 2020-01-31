module.exports = {
    command: function (type, selector) {
        return this.execute(function (thisType, thisSelector) {
            let element;
            if (thisType === 'css') {
                element = document.querySelector(thisSelector)
            } else {
                element = document.evaluate(thisSelector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            }
            return element.click();
        }, [type, selector])
    }
}
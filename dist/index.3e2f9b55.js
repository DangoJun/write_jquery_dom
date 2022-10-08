window.$ = window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
     //提供了一个全局函数
    return {
        each (fn) {
            for(let i = 0; i < elements.length; i++)fn.call(null, elements[i], i);
            return this;
        },
        parent () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.parentNode) === -1) array.push(node.parentNode);
            });
            return jQuery(array);
        },
        children () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.childrenNode) === -1) array.push(...node.children);
            });
            return jQuery(array);
        },
        print () {
            console.log(elements);
        },
        addClass (className) {
            for(let i = 0; i < elements.length; i++)elements[i].classList.add(className);
            return this //return api   //就是返回他自己  这是链式编程
            ;
        },
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                array = array.concat(elements2);
            }
            array.oldApi = this //this 就是 api
            ;
            return jQuery(array);
        },
        oldApi: selectorOrArray.oldApi,
        end () {
            return this.oldApi //this 就是 api
            ;
        }
    };
};

//# sourceMappingURL=index.3e2f9b55.js.map

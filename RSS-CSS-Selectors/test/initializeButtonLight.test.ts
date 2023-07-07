import {initializeButtonLight} from "../src/modules/button-light"

const rightResults = [
    {id: 0, input: "one"},
    {id: 1, input: "two"},
    {id: 2, input: "three"},
    {id: 3, input: "four"},
    {id: 4, input: "five"},
    {id: 5, input: "six"},
    {id: 6, input: "seven"},
    {id: 7, input: "eight"},
    {id: 8, input: "nine"},
    {id: 9, input: "ten"},
]

describe('Should ', () => {
    
    const elements = rightResults.map(({input}) => {
        const element = document.createElement('div');
        element.id = input;
        document.body.append(element);
        return element;
        
    })
    initializeButtonLight()
    it.each(elements)('success case $id', (elem) => {
        elem.click()
        expect(elem.className).toBe("selected");
    });
});

  

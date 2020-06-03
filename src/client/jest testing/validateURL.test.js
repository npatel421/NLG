import { validateURL } from '../js/validateURL';

test("This is valid URL", () => {
    const input = "https://www.nationalgeographic.com/news/2015/07/150720-dogs-animals-science-pets-evolution-intelligence/";
    const output = true;
    expect(validateURL(input)).toEqual(output);
});

test("This is not valid URL", () => {
    const input = "nationalgeographic.com/news/2015/07/150720-dogs-animals-science-pets-evolution-intelligence/";
    const output = false;
    expect(validateURL(input)).toEqual(output);
})

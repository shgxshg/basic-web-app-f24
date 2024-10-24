import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ataib"
          ));
    });

    test ('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("ataib-313");
    });

    test ('should return 94', () => {
        const query = "Which of the following numbers is the largest: 55, 94, 67?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("94");
    });

    test ('should return 29', () => {
        const query = "What is 17 plus 12?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("29");
    });

    test ('should return 58', () => {
        const query = "Which of the following numbers is the largest: 31, 58, 48?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("58");
    });

    test ('should return 89', () => {
        const query = "Which of the following numbers is the largest: 23, 89, 52?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("89");
    });

    test ('should return 55', () => {
        const query = "Which of the following numbers is the largest: 76, 87, 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("87");
    });

});

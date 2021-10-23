import { chunked } from "../arrayUtils";

describe("arrayUtils", function () {
    describe("chunked", function () {
        it("should return chunks of the requested size", function () {
            const input = [1, 2, 3, 4, 5, 6, 7, 8];
            const result = chunked(input, 3);
            expect(result).toEqual([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8]
            ]);
        });

        it("should not return empty chunks", function () {
            expect(chunked([], 123)).toEqual([]);
        });
    });
});

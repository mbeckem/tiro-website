export function assertDefined<T>(value: T, name = "value"): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw new Error(`Expected ${name} to be defined.`);
    }
}

export function defined<T>(value: T, name = "value"): NonNullable<T> {
    assertDefined(value, name);
    return value;
}

export function isClient(): boolean {
    return typeof window !== "undefined";
}

export function isServer(): boolean {
    return !isClient();
}

export function ensureServer(): void {
    if (!isServer()) {
        throw new Error("should not be called client side");
    }
}

export function ensureClient(): void {
    if (!isServer()) {
        throw new Error("should not be called server side");
    }
}

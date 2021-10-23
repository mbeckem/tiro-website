export function chunked<T>(items: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];

    let current: T[] = [];
    for (const item of items) {
        if (current.length === chunkSize) {
            chunks.push(current);
            current = [];
        }
        current.push(item);
    }
    if (current.length) {
        chunks.push(current);
    }
    return chunks;
}

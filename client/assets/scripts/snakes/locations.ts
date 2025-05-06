export default class Locations {
    private data: Map<string, any> = new Map();

    set(x: number, y: number, value: any): void {
        this.data.set(`${x}:${y}`, value);
    }

    remove(x: number, y: number): void {
        this.data.delete(`${x}:${y}`);
    }

    has(x: number, y: number): boolean {
        return this.data.has(`${x}:${y}`);
    }

    get(x: number, y: number) {
        return this.data.get(`${x}:${y}`)
    }

    getAll() {
        return this.data;
    }
}

import { math } from "./HelperFunction.js";

export class SpatialHashGrid {
    #position;
    #size;
    #cellSize;
    #dimensions;
    #grid;
    #queryId;

    constructor(boundary, cellSize) {
        this.#position = {x: boundary.x, y: boundary.y};
        this.#size = {x: boundary.width, y: boundary.height};
        this.#cellSize = cellSize;
        this.#dimensions = {
            x: Math.ceil(this.#size.x / this.#cellSize),
            y: Math.ceil(this.#size.y / this.#cellSize),
        };
        this.#grid = [ ...Array(this.#dimensions.x) ].map(() => [ ...Array(this.#dimensions.y) ].map(() => []));
        this.#queryId = 0;
        this.length = 0;
    }

    newClient(position, size, data) {
        const client = {
            position: position,
            size: size,
            indexes: {},
            queryId: -1,
            data: data,
        };

        this.#insertClient(client);
        this.length++;
        return client;
    }

    updateClient(client) {
        const indexes = this.#getCellIndex(client.position, client.size);

        if (client.indexes.xMin === indexes.xMin &&
            client.indexes.yMin === indexes.yMin &&
            client.indexes.xMax === indexes.xMax &&
            client.indexes.yMax === indexes.yMax) {
            return;
        }

        this.removeClient(client);
        this.#insertClient(client);
    }

    find(area) {
        const position = {x: area.x, y: area.y};
        const size = {x: area.width, y: area.height};
        const indexes = this.#getCellIndex(position, size);
        const result = [];

        const queryId = this.#queryId++;

        for (let xIndex = indexes.xMin; xIndex <= indexes.xMax; xIndex++) {
            for (let yIndex = indexes.yMin; yIndex <= indexes.yMax; yIndex++) {
                const clients = this.#grid[xIndex][yIndex];
                for (const client of clients) {
                    if (client.queryId !== queryId) {
                        client.queryId = queryId;
                        result.push(client);
                    }
                }
            }
        }

        return result;
    }

    removeClient(client) {
        const indexes = client.indexes;
        
        for (let xIndex = indexes.xMin; xIndex <= indexes.xMax; xIndex++) {
            for (let yIndex = indexes.yMin; yIndex <= indexes.yMax; yIndex++) {
                const removeIndex = this.#grid[xIndex][yIndex].indexOf(client);
                this.#grid[xIndex][yIndex].splice(removeIndex, 1);
            }
        }

        this.length--;
    }

    #insertClient(client) {
        const indexes = this.#getCellIndex(client.position, client.size);

        for (let xIndex = indexes.xMin; xIndex <= indexes.xMax; xIndex++) {
            for (let yIndex = indexes.yMin; yIndex <= indexes.yMax; yIndex++) {
                this.#grid[xIndex][yIndex].push(client);
            }
        }

        client.indexes = indexes;
    }

    #getCellIndex(position, size) {
        const indexes = {
            xMin: math.clampFloor((position.x - this.#position.x) / this.#cellSize, 0, this.#dimensions.x - 1),
            yMin: math.clampFloor((position.y - this.#position.y) / this.#cellSize, 0, this.#dimensions.y - 1),
            xMax: math.clampFloor((position.x + size.x - this.#position.x) / this.#cellSize, 0, this.#dimensions.x - 1),
            yMax: math.clampFloor((position.y + size.y - this.#position.y) / this.#cellSize, 0, this.#dimensions.y - 1),
        };

        return indexes;        
    }
}
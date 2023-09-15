/* eslint-disable comma-spacing */
export class TileMap {
    constructor(mapData, registry) {
        for (let col = 0; col < mapData.length; col++) {
            for (let row = 0; row < mapData[col].length; row++) {
                if (mapData[col][row] !== "") {
                    registry.createEntity(mapData[col][row], row, col);
                }
            }
        }
    }
}

const TESTMAPDATA = [
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","G","G","G","G","G","G","G","G"," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","G","G","G"," "," "," "," "," "," "," "," "," "," "," " ],
    [ "G","G","G","G","G","G","G","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S"," "," "," "," " ],
    [ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," " ],
];

const buildMap = (mapData) => {
    for (let col = 0; col < mapData.length; col++) {
        for (let row = 0; row < mapData[col].length; row++) {
            switch (mapData[col][row]) {
            case "S": mapData[col][row] = "Stone"; break;
            case "G": mapData[col][row] = "Grass"; break;
            
            default: mapData[col][row] = ""; break;
            }
        }
    }
    return mapData;
};

export const TESTMAP = buildMap(TESTMAPDATA);
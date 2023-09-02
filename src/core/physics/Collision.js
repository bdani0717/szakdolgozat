import { Vector } from "../utils/Vector.js";

export function sweptAABB(a, av, b, bv) {
    let dxEntry, dyEntry; 
    let dxExit, dyExit;
    let normalx, normaly;
    const rv = {
        x: av.x - bv.x,
        y: av.y - bv.y,
    };

    // find the distance between the objects on the near and far sides for both x and y 
    if (rv.x > 0) { 
        dxEntry = b.x - (a.x + a.width);  
        dxExit = (b.x + b.width) - a.x;
    } else { 
        dxEntry = (b.x + b.width) - a.x;  
        dxExit = b.x - (a.x + a.width);  
    } 
    
    if (rv.y > 0) { 
        dyEntry = b.y - (a.y + a.height);  
        dyExit = (b.y + b.height) - a.y;  
    } else { 
        dyEntry = (b.y + b.height) - a.y;  
        dyExit = b.y - (a.y + a.height);  
    }

    // find time of collision and time of leaving for each axis (if statement is to prevent divide by zero) 
    let txEntry, tyEntry; 
    let txExit, tyExit; 

    if (rv.x === 0) { 
        txEntry = -Infinity; 
        txExit = Infinity; 
    } else { 
        txEntry = dxEntry / rv.x; 
        txExit = dxExit / rv.x; 
    } 

    if (rv.y === 0) { 
        tyEntry = -Infinity; 
        tyExit = Infinity; 
    } else { 
        tyEntry = dyEntry / rv.y; 
        tyExit = dyExit / rv.y; 
    }

    // find the earliest/latest times of collisionfloat 
    const entryTime = Math.max(txEntry, tyEntry); 
    const exitTime = Math.min(txExit, tyExit);

    // if there was no collision
    if (entryTime > exitTime || (txEntry < 0 && tyEntry < 0) || txEntry > 1 || tyEntry > 1) { 
        normalx = 0; 
        normaly = 0; 
        return {
            time: 1,
            normal: {x: normalx, y: normaly},
        }; 
    } else {
        // if there was a collision 
        // calculate normal of collided surface
        if (txEntry > tyEntry) { 
            if (dxEntry < 0) { 
                normalx = 1; 
                normaly = 0; 
            } else { 
                normalx = -1; 
                normaly = 0;
            } 
        } else { 
            if (dyEntry < 0) { 
                normalx = 0; 
                normaly = 1; 
            } else { 
                normalx = 0; 
                normaly = -1; 
            } 
        } // return the time of collision
        return {
            time: entryTime,
            normal: {x: normalx, y: normaly},
        }; 
    }
}

export function getBroadPhaseArea(a, av) {
    return {
        x: av.x > 0 ? a.x : a.x + av.x,
        y: av.y > 0 ? a.y : a.y + av.y,
        width: av.x > 0 ? a.width + av.x : a.width - av.x,
        height: av.y > 0 ? a.height + av.y : a.height - av.y,
    };
}

export function checkAABB(a, b) {
    return !(a.x + a.width < b.x || a.x > b.x + b.width || a.y + a.height < b.y || a.y > b.y + b.height); 
}

export function getCollisionForce(a, b, normal) {
    const relativeVelocity = Vector.subtract(a.velocity, b.velocity);
    const velocityAlongNormal = relativeVelocity.x * normal.x + relativeVelocity.y * normal.y;

    if (velocityAlongNormal > 0) {
        // They are moving apart
        return;
    }

    let impulse = -(Math.max(1 - Math.min(a.restitution, b.restitution), 0)) * velocityAlongNormal;
    impulse *= a.mass + b.mass;

    return {
        x: impulse * normal.x,
        y: impulse * normal.y,
    };
}
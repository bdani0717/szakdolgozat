/**
 * Checks if childeInstance is derived from parentClass
 * if not throws error
 */
export function checkInstance(childInstance, parentClass) {
    if (!(childInstance instanceof parentClass) || !childInstance || !parentClass) {
        throw new Error(`${childInstance.constructor.name} is not derived from ${parentClass.name}`);
    }
}

/**
 * Checks if childClass is derived from parentClass
 * if not throws error
 */
export function checkClass(childClass, parentClass) {
    const instance = Object.create(childClass.prototype);
    checkInstance(instance, parentClass);
}

export const math = (function() {
    return {
        clampFloor: function(x, min, max) { 
            return Math.min(Math.max(Math.floor(x), min), max); 
        },
        clamp: function(x, min, max) {
            return Math.min(Math.max(x, min), max);
        },
    }
})();
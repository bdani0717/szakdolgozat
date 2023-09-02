export const Vector = (function() {
    return {
        subtract: function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y,
            };
        },
        magnitude: function(vector) {
            return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        },
        scale: function(vector, value) {
            return {
                x: vector.x * value,
                y: vector.y * value,
            };
        }
    };
})();
export const Vector = (function() {
    return {
        subtract: function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y,
            };
        },
        add: function(a, b) {
            return {
                x: a.x + b.x,
                y: a.y + b.y,
            };
        },
        addValue: function(a, value) {
            return {
                x: a.x + value,
                y: a.y + value,
            };
        },
        multiply: function(a, b) {
            return {
                x: a.x * b.x,
                y: a.y * b.y,
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
        },
        divide: function(a, value) {
            return {
                x: a.x / value,
                y: a.y / value,
            };
        },
        dot: function(a, b) {
            return a.x * b.x + a.y * b.y;
        },
        negate: function(a) {
            return {
                x: -a.x,
                y: -a.y,
            };
        },
    };
})();
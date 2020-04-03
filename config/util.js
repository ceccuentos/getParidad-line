Number.prototype.betweenNum = function(a, b, inclusive = true) { // No utilizar función flecha!
    let min = Math.min(a, b),
        max = Math.max(a, b);

    return inclusive ? this >= min && this <= max : this > min && this < max;
};
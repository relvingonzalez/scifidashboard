export function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}

export function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
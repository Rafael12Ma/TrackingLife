export function CalculateColor(completion) {
    const low = 30;
    const mid = 50;
    const good = 75;
    const great = 80;
    const best = 85;
    let color;
    if (completion <= low) {
        color = "text-red-600";
    } else if (completion < mid) {
        color = "text-orange-600";
    } else if (completion < good) {
        color = "text-blue-500";
    } else if (completion < great) {
        color = "text-yellow-500";
    } else if (completion < best) {
        color = "text-green-600";
    } else {
        color = "text-green-800 animate-bounce";
    }
    return color
}

export function CalculateColorCss(completion) {
    const low = 30;
    const mid = 50;
    const good = 75;
    const great = 80;
    const best = 85;
    let color;
    if (completion <= low) {
        color = "red";
    } else if (completion < mid) {
        color = "orange";
    } else if (completion < good) {
        color = "blue";
    } else if (completion < great) {
        color = "yellow";
    } else if (completion < best) {
        color = "green";
    }
    return color
}
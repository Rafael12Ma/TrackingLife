export function MeanCompletion(complList) {
    const c = complList.length
    let sum = 0

    for (let i = 0; i < c; i++) {
        sum += complList[i]
    }
    let mean = sum / c
    mean = mean.toFixed(2)
    return mean
}
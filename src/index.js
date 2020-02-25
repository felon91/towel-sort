module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length <= 0) return [];
    let strResult = '';
    matrix.forEach((item, index) => {
        index++;
        (index % 2 === 0)
            ? strResult += item.reverse().join(',') + ','
            : strResult += item.join(',') + ',';
    });
    return strResult.slice(0, -1).split(',').map(item => +item);
}

var threeSum = function (matrix) {
    const n = matrix.length;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            [matrix[i][j],matrix[j][i]] = []
        }
    }

    for(let i = 0; i < n; i++){
        matrix[i].reverse()
    }

}
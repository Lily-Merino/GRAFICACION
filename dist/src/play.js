class Game {
    juegoDeLaVida(m) {
        let r;
        r = new Array(m.length);
        for (let i = 0; i < r.length; i++) {
            r[i] = new Array(r.length);
        }
        for (let i = 1; i < m.length - 1; i++) {
            for (let j = 1; j < m[0].length - 1; j++) {
                r[i][j] = this.islife(m[i][j], this.vecinos(m, i, j));
            }
        }
        return r;
    }
    vecinos(m, i, j) {
        let cont = 0;
        if (m[i - 1][j - 1] === 1)
            cont++;
        if (m[i][j - 1] === 1)
            cont++;
        if (m[i + 1][j - 1] === 1)
            cont++;
        if (m[i - 1][j] === 1)
            cont++;
        if (m[i + 1][j] === 1)
            cont++;
        if (m[i - 1][j + 1] === 1)
            cont++;
        if (m[i][j + 1] === 1)
            cont++;
        if (m[i + 1][j + 1] === 1)
            cont++;
        return cont;
    }
    islife(cel, vec) {
        let l = 0;
        if (cel === 0) {
            if (vec === 3)
                l = 1;
        }
        else {
            if (vec === 3 || vec === 2)
                l = 1;
        }
        return l;
    }
}
export class Play extends Game {
    constructor(t) {
        super();
        this.tam = t;
        this.mat = new Array(t);
        for (let i = 0; i < t; i++) {
            this.mat[i] = new Array(t);
        }
    }
    getMat() {
        return this.mat;
    }
    setMat(m) {
        this.mat = m;
    }
    generaMatriz() {
        for (let i = 0; i < this.mat.length; i++) {
            this.mat[i][0] = 0;
            this.mat[0][i] = 0;
            this.mat[i][this.mat.length - 1] = 0;
            this.mat[this.mat.length - 1][i] = 0;
        }
        for (let i = 1; i < this.mat.length - 1; i++) {
            for (let j = 1; j < this.mat[0].length - 1; j++) {
                if (Math.random() > 0.5)
                    this.mat[i][j] = 0;
                else
                    this.mat[i][j] = 1;
            }
        }
    }
    generaMatriz2() {
        for (let i = 0; i < this.mat.length; i++) {
            for (let j = 0; j < this.mat[0].length; j++) {
                this.mat[i][j] = 0;
            }
        }
        let d = 15;
        this.mat[1 + d][25] = 1;
        this.mat[2 + d][25] = 1;
        this.mat[2 + d][23] = 1;
        this.mat[3 + d][13] = 1;
        this.mat[3 + d][14] = 1;
        this.mat[3 + d][22] = 1;
        this.mat[3 + d][21] = 1;
        this.mat[3 + d][36] = 1;
        this.mat[3 + d][35] = 1;
        this.mat[4 + d][12] = 1;
        this.mat[4 + d][16] = 1;
        this.mat[4 + d][22] = 1;
        this.mat[4 + d][21] = 1;
        this.mat[4 + d][36] = 1;
        this.mat[4 + d][35] = 1;
        this.mat[5 + d][1] = 1;
        this.mat[5 + d][2] = 1;
        this.mat[5 + d][11] = 1;
        this.mat[5 + d][17] = 1;
        this.mat[5 + d][21] = 1;
        this.mat[5 + d][22] = 1;
        this.mat[6 + d][1] = 1;
        this.mat[6 + d][2] = 1;
        this.mat[6 + d][11] = 1;
        this.mat[6 + d][15] = 1;
        this.mat[6 + d][17] = 1;
        this.mat[6 + d][18] = 1;
        this.mat[6 + d][23] = 1;
        this.mat[6 + d][25] = 1;
        this.mat[7 + d][11] = 1;
        this.mat[7 + d][17] = 1;
        this.mat[7 + d][25] = 1;
        this.mat[8 + d][12] = 1;
        this.mat[8 + d][16] = 1;
        this.mat[9 + d][13] = 1;
        this.mat[9 + d][14] = 1;
    }
}

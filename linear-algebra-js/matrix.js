class Matrix {
    constructor(a) {
        var row_dim = a[0].length;
        for (row of a) {
            if (row.length != row_dim) throw 'Row dimension error!';
        }
        this._a = a;
    }

    get dimension() {
        return [this._a.length, this._a[0].length];
    }

    copy() {
        return JSON.parse(JSON.stringify(this._a));
    }

    __det__() {
        throw 'Not implemented!';
    }

    __mul__(x) {
        var col_dim = this.dimension[0], row_dim = this.dimension[1];

        if (typeof x === 'number') {
            return this.__scalar_mul__(x);
        } else if (Array.isArray(x) && !Array.isArray(x[0])) {
            return this.__vector_mul__(x);
        } else if (Array.isArray(x) && Array.isArray(x[0]) && !Array.isArray(x[0][0])) {
            return this.__matrix_mul__(x);
        }
    }

    __scalar_mul__(x) {
        var rv = this.copy();
        for (var i = 0; i < col_dim; i++) {
            for (var j = 0; j < row_dim; j++) {
                rv[i][j] *= x;
            }
        }
        return rv;
    }

    __vector_mul__(x) {
        var row_dim = this.dimension[1];
        if (row_dim != x.length) throw "Can't multiply this matrix and this vector! Dimensions don't match!";

        var rv = new Array(row_dim);

        for (var i = 0; i < col_dim; i++) {
            for (var j = 0; j < row_dim; j++) {
                rv[j] = this._a[i][j] * x[j];
            }
        }
        return rv;
    }

    __matrix_mul__(x) {
        var col_dim_own = this.dimension[0], row_dim_own = this.dimension[1];
        var col_dim_other = x.length, row_dim_other = x[0].length;

        if (row_dim_own != col_dim_other) throw "Can't multiply these matrices! Dimensions don't match!"

        var rv = new Array(col_dim_own);
        
        
        return rv;
    }
}
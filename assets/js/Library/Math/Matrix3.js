/** Class representing a 2×2 matrix. */
export default class Matrix3 {
    /**
     * Create a 2×2 matrix.
     * @param {Array} elements - The matrix elements.
     */
    constructor(elements) {
        this.elements = elements || [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ]
    }

    /**
     * Addition of a matrix to the current matrix.
     * @param {Array} b - The second matrix.
     */
    add(b) {
        const a = this.elements
        this.elements = [
            (a[0] + b[0]), (a[1] + b[1]), (a[2] + b[2]),
            (a[3] + b[3]), (a[4] + b[4]), (a[5] + b[5]),
            (a[6] + b[6]), (a[7] + b[7]), (a[8] + b[8]),
        ]
    }

    /**
     * Subtraction of a matrix from the current matrix.
     * @param {Array} b - The second matrix.
     */
    sub(b) {
        const a = this.elements
        this.elements = [
            (a[0] - b[0]), (a[1] - b[1]), (a[2] - b[2]),
            (a[3] - b[3]), (a[4] - b[4]), (a[5] - b[5]),
            (a[6] - b[6]), (a[7] - b[7]), (a[8] - b[8]),
        ]
    }

    /**
     * Multiplication of the current matrix by another matrix.
     * @param {Array} b - The second matrix.
     */
    mul3(b)
    {
        const a = this.items
        const c = []

        this.items = [
            c[0] = (a[0] * b[0]) + (a[1] * b[3]) + (a[2] * b[6]),
            c[1] = (a[0] * b[1]) + (a[1] * b[4]) + (a[2] * b[7]),
            c[2] = (a[0] * b[2]) + (a[1] * b[5]) + (a[2] * b[8]),

            c[3] = (a[3] * b[0]) + (a[4] * b[3]) + (a[5] * b[6]),
            c[4] = (a[3] * b[1]) + (a[4] * b[4]) + (a[5] * b[7]),
            c[5] = (a[3] * b[2]) + (a[4] * b[5]) + (a[5] * b[8]), 

            c[6] = (a[6] * b[0]) + (a[7] * b[3]) + (a[8] * b[6]),
            c[7] = (a[6] * b[1]) + (a[7] * b[4]) + (a[8] * b[7]),
            c[8] = (a[6] * b[2]) + (a[7] * b[5]) + (a[8] * b[8]),
            this.items = c,
        ]
    }

    rot3(d){
        d *= Math.PI / 180;
        const cos = Math.cos(d);
        const sin = Math.sin(d);

        const result = [
            cos, -sin, 0,
            sin, cos, 0,
            0, 0, 1
        ]
        this.mul3(result);
    }
}
import Matrix2 from '../../../Library/Math/Matrix2.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix2 class. */
export default class TestMatrix2 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix2')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        this.testRot()
    }

    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Matrix2.add()')
        const a = [
            1, 2,
            3, 4,
        ]
        const b = [
            7, 8,
            9, 6,
        ]
        const expected = [
            8, 10,
            12, 10,
        ]
        const m = new Matrix2(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix2.sub()')
        const a = [
            5, 6,
            7, 8,
        ]
        const b = [
            9, 6,
            3, 2,
        ]
        const expected = [
            -4, 0,
            4, 6,
        ]
        const m = new Matrix2(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix2.mul()')
        const a = [
            1, 2,
            3, 4,
        ]
        const b = [
            2, 4,
            6, 8,
        ]
        const expected = [
            14, 20,
            30, 44,
        ]
        const m = new Matrix2(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix2.mul() by identity matrix')
        const a = [
            1, 3,
            5, 7,
        ]
        const i = [
            1, 0,
            0, 1,
        ]
        const expected = [
            1, 3,
            5, 7,
        ]
        const m = new Matrix2(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the rotation method.
     */
    testRot() {
        console.info("Test: Matrix2.rot()")
        const α = 90
        const a = [
          2, 4,
          6, 8,
        ]
    
        const expected = [
          4, -2,
          8, -6,
        ]
    
        const m = new Matrix2(a)
        m.rot(α)
        const actual = m.items
        this.assertIdenticalRounded(actual, expected)
      }
}
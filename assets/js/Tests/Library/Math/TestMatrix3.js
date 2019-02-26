import Matrix3 from '../../../Library/Math/Matrix3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix3 class. */
export default class TestMatrix3 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix3')
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
        console.info("Test: Matrix3.add()")
        const a = [
          1, 2, 3,
          4, 5, 6,
          7, 8, 9,
        ]
    
        const b = [
          1, 3, 5,
          7, 9, 8,
          6, 4, 2,
        ]
    
        const expected = [
          2, 5, 8,
          11, 14, 14,
          13, 12, 11,
        ]
    
        const m = new Matrix3(a)
        m.add(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
      }
    
       /**
     * Test the subtraction method.
     */
      testSub() {
        console.info("Test: Matrix3.sub()")
        const a = [
          9, 8, 7,
          10, 11, 12,
          2, 4, 6,
        ]
    
        const b = [
          1, 2, 3,
          7, 8, 9,
          6, 4, 7,
        ]
    
        const expected = [
          8, 6, 4,
          3, 3, 3,
          -4, 0, -1,
        ]
    
        const m = new Matrix3(a)
        m.sub(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
      }
    
      /**
     * Test the multiplication method.
     */
      testMul() {
        console.info("Test: Matrix3.mul()")
        const a = [
          1, 3, 5,
          7, 9, 2,
          4, 6, 8,
        ]
    
        const b = [
          4, 8, 6,
          2, 1, 7,
          9, 10, 11,
        ]
    
        const expected = [
          55, 61, 82,
          64, 85, 127,
          100, 118, 154,
        ]
    
        const m = new Matrix3(a)
        m.mul(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
      }
    
      /**
     * Test the multiplication method with an identity matrix.
     */
      testMulIdentity() {
        console.info("Test: Matrix3.mul() -- Identity matrix")
        const a = [
          1, 4, 8,
          6, 4, 2,
          7, 8, 0,
        ]
    
        const b = [
          1, 0, 0,
          0, 1, 0,
          0, 0, 1,
        ]
    
        const expected = [
          1, 4, 8,
          6, 4, 2,
          7, 8, 0,
        ]
    
        const m = new Matrix3(a)
        m.mul(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
      }
    
     /**
     * Test the rotation method.
     */
      testRot() {
        console.info("Test: Matrix.rot()")
        const a = [
          2, 6, 8,
          7, 2, 1,
          6, 9, 4,
        ]
    
        const α = 90
    
        const expected = [
          6, -2, 0,
          2, -7, 0,
          9, -6, 0
        ]
    
        const m = new Matrix3(a)
        m.rot(α)
        const actual = m.items
        this.assertIdenticalRounded(actual, expected)
    
      }
    }
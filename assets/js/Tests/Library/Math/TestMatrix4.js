import Matrix4 from '../../../Library/Math/Matrix4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix3 class. */
export default class TestMatrix4 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix4')
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
        console.info("Test: Matrix4.add()")
        const a = [
          10, 12, 14, 16,
          1, 3, 5, 7,
          2, 4, 6, 8,
          0, 8, 4, 6,
        ]
    
        const b = [
          1, 2, 3, 4,
          5, 6, 7, 8,
          9, 10, 11, 12,
          2, 4, 6, 8,
        ]
    
        const expected = [
          11, 14, 17, 20,
          6, 9, 12, 15,
          11, 14, 17, 20,
          2, 12, 10, 14,
        ]
    
        const m = new Matrix4(a)
        m.add(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
      }
    
       /**
     * Test the subtraction method.
     */
      testSub() {
        console.info("Test: Matrix4.sub()")
        const a = [
          2, 4, 6, 8,
          10, 12, 14, 16,
          18, 20, 30, 40,
          50, 60, 70, 80,
        ]
    
        const b = [
          8, 4, 2, 6,
          20, 22, 40, 56,
          8, 70, 60, 40,
          80, 20, 10, 60,
        ]
    
        const expected = [
          -6, 0, 4, 2,
          -10, -10, -26, -40,
          10, -50, -30, 0,
          -30, 40, 60, 20,
        ]
    
        const m = new Matrix4(a)
        m.sub(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
      }
    
      /**
     * Test the multiplication method.
     */
      testMul() {
        console.info("Test: Matrix4.mul()")
        const a = [
          2, 4, 6, 8,
          8, 4, 6, 2,
          1, 3, 5, 7,
          9, 7, 2, 1,
        ]
    
        const b = [
          1, 4, 9, 8,
          0, 1, 3, 4,
          3, 4, 2, 1,
          1, 2, 7, 5,
        ]
    
        const expected = [
          28, 52, 98, 78,
          28, 64, 110, 96,
          23, 41, 77, 60,
          16, 53, 113, 107,
        ]
    
        const m = new Matrix4(a)
        m.mul(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
      }
    
      /**
     * Test the multiplication method with an identity matrix.
     */
      testMulIdentity() {
        console.info("Test: Matrix4.mul() -- Identity matrix")
        const a = [
          2, 4, 6, 8,
          8, 4, 6, 2,
          1, 3, 5, 7,
          9, 7, 2, 1,
        ]
    
        const b = [
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1,
        ]
    
        const expected = [
          2, 4, 6, 8,
          8, 4, 6, 2,
          1, 3, 5, 7,
          9, 7, 2, 1,
        ]
    
        const m = new Matrix4(a)
        m.mul(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
    
      }
    
     /**
     * Test the rotation method.
     */
      testRot() {
        console.info("Test: Matrix4.rot()")
        const a = [
          2, 8, 60, 14,
          72, 14, 2, 0,
          9, 24, 15, 45,
          0, 3, 54, 45,
        ]
    
        const α = 270
    
        const expected = [
          -8, 2, 0, 0,
          -14, 72, 0, 0,
          -24, 9, 0, 0,
          -3, 0, 0, 0,
        ]
    
        const m = new Matrix4(a)
        m.rot(α)
        const actual = m.items
        this.assertIdenticalRounded(actual, expected)
      }
    }
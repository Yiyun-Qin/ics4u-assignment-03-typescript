/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-11-07
 */

class Triangle {
  private readonly side1: number
  private readonly side2: number
  private readonly side3: number

  // constructor
  public constructor (side1: number, side2: number, side3: number) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
  }

  /**
   * The getSide1() getter, return side1
   *
   * @returns {number} side1 One side of the triangle
   */
  public getSide1 (): number {
    return this.side1
  }

  // getSide2() getter
  public getSide2 (): number {
    return this.side2
  }

  // getSide3() getter
  public getSide3 (): number {
    return this.side3
  }

  /**
   * The perimeter() method, calculates the perimeter of the triangle
   *
   * @returns {number} numPerimeter The triangle's perimeter
   */
  private perimeter (): number {
    const numPerimeter: number = this.side1 + this.side2 + this.side3
    return numPerimeter
  }

  // The semiPerimeter() method
  public semiPerimeter (): number {
    const numSemiperimeter: number = this.perimeter() / 2
    if (this.isValid()) {
      return numSemiperimeter
    } else {
      return -1
    }
  }

  /**
   * Many functions, the isValid() method tells if the triangle is valid
   *
   * @returns {boolean} Valid triangle or not
   */
  public isValid (): boolean {
    const sum1: number = this.side1 + this.side2
    const sum2: number = this.side2 + this.side3
    const sum3: number = this.side1 + this.side3
    if (sum1 <= this.side3 || sum2 <= this.side1 || sum3 <= this.side2) {
      return false
    } else {
      return true
    }
  }

  // area() method, calculate area
  public area (): number {
    if (this.isValid()) {
      const numArea: number = Math.sqrt(
        this.semiPerimeter() *
          (this.semiPerimeter() - this.side1) *
          (this.semiPerimeter() - this.side2) *
          (this.semiPerimeter() - this.side3)
      )
      return numArea
    } else {
      return -1
    }
  }

  // angle() method, calculate angle
  public angle (angleNumber: number): number {
    let numRadian: number = -1
    if (this.isValid()) {
      const side1Angle: number = Math.acos(
        (Math.pow(this.side2, 2) +
          Math.pow(this.side3, 2) -
          Math.pow(this.side1, 2)) /
          (2 * this.side2 * this.side3)
      )
      const side2Angle: number = Math.acos(
        (Math.pow(this.side1, 2) +
          Math.pow(this.side3, 2) -
          Math.pow(this.side2, 2)) /
          (2 * this.side1 * this.side3)
      )
      const side3Angle: number = Math.acos(
        (Math.pow(this.side1, 2) +
          Math.pow(this.side2, 2) -
          Math.pow(this.side3, 2)) /
          (2 * this.side1 * this.side2)
      )
      const radian = [side1Angle, side2Angle, side3Angle, -1]
      if (angleNumber === 1) {
        numRadian = radian[0]
      } else if (angleNumber === 2) {
        numRadian = radian[1]
      } else if (angleNumber === 3) {
        numRadian = radian[2]
      } else {
        numRadian = radian[3]
      }
      return numRadian
    } else {
      return -1
    }
  }

  // getType() method, identity which type the triangle is
  public getType (): string {
    let type: string = ''
    const right1 = Math.sqrt(Math.pow(this.side2, 2) + Math.pow(this.side3, 2))
    const right2 = Math.sqrt(Math.pow(this.side1, 2) + Math.pow(this.side3, 2))
    const right3 = Math.sqrt(Math.pow(this.side1, 2) + Math.pow(this.side2, 2))
    if (this.isValid()) {
      if (this.side1 === this.side2 && this.side2 === this.side3) {
        type = 'equilateral triangle'
      } else if (
        this.side1 === this.side2 ||
        this.side2 === this.side3 ||
        this.side1 === this.side3
      ) {
        type = 'isosceles triangle'
      } else if (
        right1 === this.side1 ||
        right2 === this.side2 ||
        right3 === this.side3
      ) {
        type = 'right angle triangle'
      } else {
        type = 'scalene triangle'
      }
      return type
    } else {
      return '-1'
    }
  }

  // height() method, calculates height
  public height (heightNumber: number): number {
    let numHeight: number = -1
    if (this.isValid()) {
      const height1: number = this.area() * 2 / this.side1
      const height2: number = this.area() * 2 / this.side2
      const height3: number = this.area() * 2 / this.side3
      const listHeight = [height1, height2, height3, -1]
      if (heightNumber === 1) {
        numHeight = listHeight[0]
      } else if (heightNumber === 2) {
        numHeight = listHeight[1]
      } else if (heightNumber === 3) {
        numHeight = listHeight[2]
      } else {
        numHeight = listHeight[3]
      }
      return numHeight
    } else {
      return -1
    }
  }

  // innerCircleRadius() method
  public innerCircleRadius (): number {
    if (this.isValid()) {
      const numInnerCircleRadius: number = this.area() / this.semiPerimeter()
      return numInnerCircleRadius
    } else {
      return -1
    }
  }

  // circumsicleRadius() method
  public circumsicleRadius (): number {
    if (this.isValid()) {
      const numCircumsicleRadius: number = this.side1 / (2 * Math.sin(this.angle(1)))
      return numCircumsicleRadius
    } else {
      return -1
    }
  }
}
export = Triangle

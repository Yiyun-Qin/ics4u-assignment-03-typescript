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
  private numPerimeter: number = -1
  public numSemiperimeter: number = -1
  public numArea: number = -1
  private side1Angle: number = -1
  private side2Angle: number = -1
  private side3Angle: number = -1
  private radian: number[] = []
  public numRadian: number = -1
  public type: string = ''
  private height1: number = -1
  private height2: number = -1
  private height3: number = -1
  private listHeight: number[] = []
  public numHeight: number = -1
  public numInnerCircleRadius: number = -1
  public numCircumsicleRadius: number = -1

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
   */
  private perimeter (): void {
    this.numPerimeter = this.side1 + this.side2 + this.side3
  }

  // The semiPerimeter() method
  public semiPerimeter (): number {
    this.perimeter()
    this.numSemiperimeter = this.numPerimeter / 2
    if (this.isValid()) {
      return this.numSemiperimeter
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
      this.numArea = Math.sqrt(
        this.numSemiperimeter *
          (this.numSemiperimeter - this.side1) *
          (this.numSemiperimeter - this.side2) *
          (this.numSemiperimeter - this.side3)
      )
      return this.numArea
    } else {
      return -1
    }
  }

  // angle() method, calculate angle
  public angle (angleNumber: number): number {
    if (this.isValid()) {
      this.side1Angle = Math.acos(
        (Math.pow(this.side2, 2) +
          Math.pow(this.side3, 2) -
          Math.pow(this.side1, 2)) /
          (2 * this.side2 * this.side3)
      )
      this.side2Angle = Math.acos(
        (Math.pow(this.side1, 2) +
          Math.pow(this.side3, 2) -
          Math.pow(this.side2, 2)) /
          (2 * this.side1 * this.side3)
      )
      this.side3Angle = Math.acos(
        (Math.pow(this.side1, 2) +
          Math.pow(this.side2, 2) -
          Math.pow(this.side3, 2)) /
          (2 * this.side1 * this.side2)
      )
      this.radian = [this.side1Angle, this.side2Angle, this.side3Angle, -1]
      if (angleNumber === 1) {
        this.numRadian = this.radian[0]
      } else if (angleNumber === 2) {
        this.numRadian = this.radian[1]
      } else if (angleNumber === 3) {
        this.numRadian = this.radian[2]
      } else {
        this.numRadian = this.radian[3]
      }
      return this.numRadian
    } else {
      return -1
    }
  }

  // getType() method, identity which type the triangle is
  public getType (): string {
    const right1 = Math.sqrt(Math.pow(this.side2, 2) + Math.pow(this.side3, 2))
    const right2 = Math.sqrt(Math.pow(this.side1, 2) + Math.pow(this.side3, 2))
    const right3 = Math.sqrt(Math.pow(this.side1, 2) + Math.pow(this.side2, 2))
    if (this.isValid()) {
      if (this.side1 === this.side2 && this.side2 === this.side3) {
        this.type = 'equilateral triangle'
      } else if (
        this.side1 === this.side2 ||
        this.side2 === this.side3 ||
        this.side1 === this.side3
      ) {
        this.type = 'isosceles triangle'
      } else if (
        right1 === this.side1 ||
        right2 === this.side2 ||
        right3 === this.side3
      ) {
        this.type = 'right angle triangle'
      } else {
        this.type = 'scalene triangle'
      }
      return this.type
    } else {
      return '-1'
    }
  }

  // height() method, calculates height
  public height (heightNumber: number): number {
    if (this.isValid()) {
      this.height1 = this.numArea * 2 / this.side1
      this.height2 = this.numArea * 2 / this.side2
      this.height3 = this.numArea * 2 / this.side3
      this.listHeight = [this.height1, this.height2, this.height3, -1]
      if (heightNumber === 1) {
        this.numHeight = this.listHeight[0]
      } else if (heightNumber === 2) {
        this.numHeight = this.listHeight[1]
      } else if (heightNumber === 3) {
        this.numHeight = this.listHeight[2]
      } else {
        this.numHeight = this.listHeight[3]
      }
      return this.numHeight
    } else {
      return -1
    }
  }

  // innerCircleRadius() method
  public innerCircleRadius (): number {
    if (this.isValid()) {
      this.numInnerCircleRadius = this.numArea / this.numSemiperimeter
      return this.numInnerCircleRadius
    } else {
      return -1
    }
  }

  // circumsicleRadius() method
  public circumsicleRadius (): number {
    if (this.isValid()) {
      this.numCircumsicleRadius = this.side1 / (2 * Math.sin(this.side1Angle))
      return this.numCircumsicleRadius
    } else {
      return -1
    }
  }
}
export = Triangle

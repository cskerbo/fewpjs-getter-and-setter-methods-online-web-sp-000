class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter(diameter) {
    this.radius = diameter / 2
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  set circumference(circumference) {
    this.radius = circumference / (Math.PI / 2)
  }

  get area() {
    return this._area = Math.PI * (this.radius ** 2)
  }
}

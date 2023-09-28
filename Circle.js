class circ 
{
    constructor (radius, color)
    {
        this.radius= radius;
        this.color= color;
    }

    getRadius()
    {
        return this.radius;
    }
    setRadius(radius)
    {
        this.radius= radius;
    }
    getColor()
    {
        return this.color;
    }
    setColor(color)
    {
        this.color = color;
    }
    getString()
    {
        return `Circle [Radius = ${this.radius}, Color = ${this.color}]`
    }
    getArea(r)
    {
        return Math.PI*r*r;
    }
    getCircumference(r)
    {
        return 2*Math.PI*r;
    }

}
var ci = new circ(1.0, "red");
ci.setRadius(2);
console.log(ci.getRadius());
console.log(ci.getColor());
ci.setColor("White");
console.log(ci.getString());
console.log(ci.getArea(3));
console.log(ci.getCircumference(4));

/* Output:
2
red
Circle [Radius = 2, Color = White]
28.274333882308138
25.132741228718345
*/

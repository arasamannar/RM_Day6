class Trip
{
    constructor (time,distance)
    {
        this.time = time;
        this.distance = distance;
    }
    getRate()
    {
        let value = parseInt(this.distance*10)+parseInt(this.time*20);
        return `The Fare for the current trip is, ${value}. Where distance covered is ${this.distance} and time travelled is ${this.time}`;
    }
}
var Uber = new Trip(1,20);
console.log(Uber.getRate());

/* Output:
The Fare for the current trip is, 220. Where distance covered is 20 and time travelled is 1 */
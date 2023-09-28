class Person 
{
    constructor (name, age, sex, country, language)
    {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.country = country;
        this.language = language;
    }
    getLang()
    {
        if(this.sex == "Male")
        {
        return "He Speaks " +this.language;
        }
        else
        {
            return "She Speaks " +this.language;
        }
    }
}
const Man = new Person("Arasamannar", 27, "Male", "India", "Tamil");
console.log(Man.name);
console.log(Man.age);
console.log(Man.sex);
console.log(Man.country);
console.log(Man.getLang());

/*Output:
*Arasamannar
*27
*Male
*India
*He Speaks Tamil*/
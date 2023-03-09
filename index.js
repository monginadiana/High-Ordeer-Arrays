const companies=[
    {name: 'moringa', category: 'school', start:2014, end:2019},
    {name: 'UEFA', category: 'Sports', start:2011, end:2020},
    {name: 'Delamera', category: 'Yoghurt', start:1994, end:2010},
    {name: 'kemsa', category: 'drugs', start:1998, end:2030},
    {name: 'jittu', category: 'school', start:1998, end:2030},
    {name: 'zinduka', category: 'school', start:1998, end:2030},
    {name: 'lux', category: 'school', start:1998, end:2030}
]

const ages =[ 33, 44, 55, 20, 24, 80, 60, 40]

// filter, map, sort, forEach

for(let i=0; i < companies.length; i++){
    console.log(companies[i])
}

// forEach

const length = companies.forEach( function (company){
    console.log(company.name)
})

// filter

// using loops

let cantSleepOut = []

for (let i=0; i < ages.length; i++){
    if(ages[i]>=21){
        cantSleepOut.push(ages[i])
    }

}

console.log(cantSleepOut)

// filter

const cantDrink = ages.filter(function(age){
    if(age>=21){
        return true
    }

})
console.log(cantDrink)

// use Arrow functions

const cantEat= ages.filter(age=>age>=21)
console.log(cantEat)

// filter school company

const schools = companies.filter(company => company.category === 'school');
console.log(schools)

const twentiesCompany = companies.filter(company => (company.start >= 2000 && company.start > 1999))

console.log(twentiesCompany)

// companies that lasted 5years

const fiveYears = companies.filter(company =>((company.end - company.start) === 5))
console.log(fiveYears)


// map 

const companiesNames =  companies.map(company =>(company.name))
    console.log(companiesNames)


    // to get company names with their start and end dates using iterpolation

const companyAnniverse = companies.map(company => `${company.name} [${company.start}- ${company.end}]`)

console.log(companyAnniverse)

// squareroot

const ageBrackets = ages.map(age => (Math.sqrt(age)))

// /multipplication

const ageTwice = ages.map(age => age*2)
 console.log(ageTwice)

console.log(ageBrackets)

// sort company by start year

const sortedCompany = companies.sort((a,b) => (a.start >b.start ? 1 : -1))

console.log(sortedCompany)

// sort ages 

const sortedAges =  ages.sort((a,b) => (a > b ? 1 : -1))

console.log(sortedAges)

// reduce

const ageSum =  ages.reduce((total, age) => (total + age),0)

console.log(ageSum)

// get total years for all companies

const companiesTotalYears =  companies.reduce((total, company) =>(total + (company.end-company.start)),0)

console.log(companiesTotalYears)

// combined methods

const combinedMethods = ages.map(
    age => (age*2))
    .filter(age => age>20)
    .sort((a,b) => a+b)
    .reduce((a,b) => a+b);
    

    console.log(combinedMethods);

    




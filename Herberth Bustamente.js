let heroes = [ 
    { hero_name: "Abe Sapien", gender: "Male", alignment: "good"}, 
    { hero_name: "Abin Sur", gender: "Male", alignment: "good"}, 
    { hero_name: "Abomination", gender: "Male", alignment: "bad" }, 
    { hero_name: "Abraxas", gender: "Male", alignment: "bad" },
    { hero_name: "Absorbing Man", gender: "Male", alignment: "bad"}
]

const getGoodHeroes = (heroes_array) => {
    let ans = []
    heroes_array.forEach(heroe => {
        if (heroe.alignment === "good") {
            ans.push(heroe)
        }
    });
    return ans
}

const getHeoreNames = (heroes_array) => {
    let ans = []
    heroes_array.forEach(heroe => {
        ans.push(heroe.hero_name)
    });
    return ans
}

console.log(getGoodHeroes(heroes))

console.log(getHeoreNames(heroes))

console.log( getHeoreNames( getGoodHeroes(heroes) ) )


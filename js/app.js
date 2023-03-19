let tweets = [
    {
        tweet: `i ate cheese`,
        username: `Jim`,
        created_at: `5-20-2022`,
        age: 25
    },
    {
        tweet: `I eat sweatpants`,
        username: `Tony`,
        created_at: `3-04-2022`,
        age: 18
    },
    {
        tweet: `look at this pizza`,
        username: `Hammfist`,
        created_at: `10-07-2019`,
        age: 22
    },
    {
        tweet: `I'll be back -Captain picard`,
        username: `jane`,
        created_at: `7-12-2023`,
        age: 3
    },
    {
        tweet: `swing of the mop, janitor's tax`,
        username: `janitorguy300`,
        created_at: `5-9-2011`,
        age: 7
    },
    {
        tweet: `did somebody say:?`,
        username: `stillplayingwow`,
        created_at: `10-10-2090`,
        age: 4
    },
    {
        tweet: `chimps are alot deadlier than monkeys`,
        username: `rogan`,
        created_at: `9-8-2023`,
        age: 35
    },
    {
        tweet: `die humans`,
        username: `A.S.I.M.O.V-I.S-D.U.M.B`,
        created_at: `8-10-2100`,
        age: 5
    },
    {
        tweet: `ive got a jar of dirt`,
        username: `hippieguy`,
        created_at: `6-20-2011`,
        age: 8
    },
    {
        tweet: `look at this clown`,
        username: `admiral`,
        created_at: `15-20-2019`,
        age: 19
    }
]

let counter = 0;


while (counter < tweets.length) {
    if (tweets[counter][`age`] >= 18) {
        console.log(tweets[counter]);
    }
    counter = counter + 1;
}
console.log(`text break`)
for (let counter = 0; counter < tweets.length; counter = counter + 1) {
    if (tweets[counter][`age`] < 18) {
        console.log(tweets[counter]);
    }

}
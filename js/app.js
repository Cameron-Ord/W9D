let tweets = [
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 25
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 18
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 22
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 3
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 7
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 4
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 35
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 5
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 8
},
{
tweet: `tweet`,
username: `author`,
created_at: `date`,
age: 19
},
]

let counter = 0;


while(counter < tweets.length){

if(tweets[counter][`age`] >= 18 ){

console.log(tweets[counter]);
}
counter = counter +1;
}

console.log(`text break`)


for(let counter = 0; counter < tweets.length; counter = counter +1){

    if(tweets[counter][`age`] < 18 ){
        console.log(tweets[counter]);

    }

}
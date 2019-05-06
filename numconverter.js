

function romannumconverter(num)
{

let resultreturn = 0;

    for(i=0; i < num.length; i++)
    {

        const twoletters = dict[ num[i] num[i+1] ]

        if(num.length > i+1 && twoletters)
        {
            resutreturn+=twoletters;
            i++;         
        }

        return resultreturn+= dict[num[i]];

    }




const dict = 
    {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    };

return resultreturn
}
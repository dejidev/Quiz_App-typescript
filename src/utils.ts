
export const shuffledArray  = (array: string[])=> {

    return array.slice().sort(() => Math.random() - 0.5);

}




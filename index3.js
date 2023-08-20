function creatCounter(){
    let count = 0

    function somar(){
        count++
        console.log(count)
    }

    return {
        increment: somar
    }
}

const counter = creatCounter()

counter.increment();
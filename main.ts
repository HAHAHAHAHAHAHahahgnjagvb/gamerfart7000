enum Atay{
    iscool = 7000
}
namespace gamerFart7000{
    /**
     * Skibidi
     */
    //% blockId="gamerFart7000skibiditoilet"
    //% block="Skibidi toilet $text"
    //% num.min=1 num.max=70
    export function Skibidi(text:string){
        basic.showString("skibidi")
    }
    /**
     * Sigma function.
     */
    //% blockId="gamerFart7000sigmafunction"
    //% block="sigma min $min max $max"
    export function sigma(min:number,max:number) {
        let currentnum = min
        let answer = min
        if (min <= 0||max <= 0) {
            return 0;
        }
        while (currentnum <= max - 1) {
            currentnum += 1
            answer = answer + currentnum
        }
        return answer;
    }
}

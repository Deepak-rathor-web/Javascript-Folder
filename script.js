function volume(length, width, height) {
    return length * width * height;
}

function Cvolume(length) {
    return function (width) {
        return function (height) {
            return length * width * height;
        };
    };
}

let vl = Cvolume(5);
let vlw = vl(4);
console.log(vlw(3));
// strictNullCheck
// let title : string = "Yuvraj"
// title = undefined

let subtitle: string | undefined = 'Yuvraj';

// void: function doesn't return a useful value
function log(msg: string): void {
    console.log(msg)
}

// Never returns
function fail(msg: string): never {
    throw new Error(msg);
}

// Do not use "any" => try to ignore as much as possible

const valueAny : any = JSON.parse('{"x" : 1}')

valueAny.notThere.toFixed(2) // this compiles but can break/explode at runtime
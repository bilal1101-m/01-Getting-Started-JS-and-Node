function make_car(manufacturer,model,color,engine_cc,type){
    const car = {};
    car['manufacturer'] = manufacturer;
    car['model'] = model;
    if(color) {
        car['color'] = color;
    }
    if(engine_cc) {
        car['engine_cc'] = engine_cc;
    }
    if(type) {
        car['type'] = type;
    }
    return car;
}

console.log(make_car("Suzuki","Alto"));
console.log(make_car("Suzuki","Bolan","White"));
console.log(make_car("Honda","Civic","Black","1300 CC"));
console.log(make_car("Toyota","Grande","Red","1800","Auto"));
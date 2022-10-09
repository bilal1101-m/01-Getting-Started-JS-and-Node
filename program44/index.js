function make_sandwich(items) {
    let ingredients = items.join(', ');
    console.log(`You order sandwich with following fillings ${ingredients}`);
}


make_sandwich(["chicken","pickle","cucumber"]);
make_sandwich(["beef","onion","olives","salad"]);
make_sandwich(["chicken","mayo"]);
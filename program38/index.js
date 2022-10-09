function describe_city(cityName,countryName = "Pakistan") {
    console.log(`${cityName} is in ${countryName}`);
}

describe_city('Karachi');
describe_city('NewYork','US'); // or describe_city('NewYork');
describe_city('Lahore');
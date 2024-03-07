//Array

let suvDetails = {
    make: "Ford",
    model: "Explorer",
    year: 2022,
    color: "Black",
    mileage: 12000,
    isAutomatic: true,
    features: ["Leather Seats", "Sunroof", "Navigation System"],
  };
  
  let compactCarDetails = {
    make: "Honda",
    model: "Civic",
    year: 2021,
    color: "Red",
    mileage: 18000,
    isAutomatic: true,
    features: ["Apple CarPlay", "Lane Departure Warning", "Fuel Efficiency"],
  };
  

  let carDetails = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    mileage: 15000,
    isAutomatic: true,
    features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
  };

  let selectedCar = [carDetails,compactCarDetails,suvDetails];

  console.log(selectedCar);

  //To check the (length property of this array :)

  console.log(selectedCar.length);
  
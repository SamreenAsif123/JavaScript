//Object: In  JavaScrirpt object is defined as "collection of values".

let carDetails = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    mileage: 15000,
    isAutomatic: true,
    features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
  };

  console.log (carDetails);

  //Change the property:
  //dot notation

  carDetails.year="2024";
  console.log(carDetails.year);

  //Bracket Notation

  carDetails ['color']='Black';
  console.log(carDetails.color);
  
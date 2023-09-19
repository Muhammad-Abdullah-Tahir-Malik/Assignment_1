
function createCar(manufacturer: string, modelName: string, ...options: Record<string, any>[]): Record<string, any> {
    const carInfo: Record<string, any> = {
      manufacturer: manufacturer,
      modelName: modelName,
    };
  
    for (const option of options) {
      for (const key in option) {
        if (option.hasOwnProperty(key)) {
          carInfo[key] = option[key];
        }
      }
    }
  
    return carInfo;
  }
  
  
  const carInfo = createCar("Toyota", "Camry", { color: "Blue", feature: "Sunroof" });
  
  
  console.log(carInfo);
  
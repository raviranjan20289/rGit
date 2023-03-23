function makeDinner() {
    console.log("Making dinner...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Dinner is ready!");
        resolve("spaghetti");
      }, 2000);
    });
  }
  
  function washDishes() {
    console.log("Washing dishes...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Dishes are washed!");
        resolve();
      }, 1000);
    });
  }
  
  function getColdDrinks() {
    console.log("Getting cold drinks...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Cold drinks are ready!");
        resolve("soda");
      }, 2000);
    });
  }
  
  // using promises
  makeDinner()
    .then((dinner) => {
      console.log(`Dinner is ${dinner}`);
      return washDishes();
    })
    .then(() => {
      return getColdDrinks();
    })
    .then((drink) => {
      console.log(`Drink is ${drink}`);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // using async/await
  async function dinnerTime() {
    try {
      const dinner = await makeDinner();
      console.log(`Dinner is ${dinner}`);
      await washDishes();
      const drink = await getColdDrinks();
      console.log(`Drink is ${drink}`);
    } catch (error) {
      console.error(error);
    }
  }
  
  dinnerTime();
  
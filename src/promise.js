export const checkIsUser = (isUser) => {
  return new Promise((resolve, reject) => {
    if (isUser) resolve("User is logged in :D");
    else reject("There is no user !");
  });
};

const goForMilk = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("buyed milk");
  }, 1000);
});

const helpFather = new Promise((resolve, reject) => {
  resolve("helped father");
});

export const getAllPromies = Promise.all([goForMilk, helpFather]);
export const racePrmoises = Promise.race([goForMilk, helpFather]);

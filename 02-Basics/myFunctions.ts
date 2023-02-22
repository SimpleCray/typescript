function addTwo(num: number): number {
  return num + 2;
  // return "hello" // should return error
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false): boolean => {
  return true;
};

function handleError (errorMsg: string): never {
  throw new Error(errorMsg)
}

addTwo(5);
getUpper('hai duong');

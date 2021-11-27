// new operator is used to create new instance objects.
// Do you know exactly what new does?
// You are asked to implement myNew(), which should return an object 
// just as what new does but without using new.
// Pay attention to the return type of constructor.


const myNew = (constructor, ...args) => {
    // your code here
    const obj = {};
    obj.__proto__ = constructor.prototype;
    return constructor.apply(obj, args) || obj;
  }

  //About new()
  //It create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
  

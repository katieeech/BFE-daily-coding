function createCounter() {
    let counter = 0;
    return {
      get count() {
        return counter++;
      }
    }
  }


  //second approach
  function createCounter() {
    let counter = -1;
  
    return {
      get count() {
        counter += 1;
        return counter;
      }
    }
  }
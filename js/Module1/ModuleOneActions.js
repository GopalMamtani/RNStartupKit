export function ageIncrement() {
    return {
      type: 'AGE_UP',
      payload: 2
    }
  }

  export function ageDecrement() {
    return {
      type: 'AGE_DOWN',
      payload: 2
    }
  }
let dog = require('./testmeJest'),fawkes,jax

beforeEach(
  () => {
    fawkes = new dog('Fawkes', 'Brown', '?????????????????', 10)
    jax = new dog('Jax', "Black", "Giant Schnauzer", 100)
  }
)

describe('Doggo class', () => {

  const newErrorInstance = (bool) => {
    bool ? new dog() : new dog('string',{object:"AHHHHH"},'string','string')
  }

  it('throws error if missing parameter', () => {
    try {
      newErrorInstance(true)
      expect(true).toBe(false)
    } catch(err) {
      expect(err.message).toBe('missing values')
    }
  })

  it('throws error if parameter is incorrect type', () => {
    try {
      newErrorInstance(false)
      expect(true).toBe(false)
    } catch(err) {
      expect(err.message).toBe('incorrect input type')
    }
  })

  describe('getName', () => {
    it('gets dog name', () => {
      expect(fawkes.getName()).toBe('Fawkes')
      expect(jax.getName()).toBe('Jax')
    })
  })

  describe('getBreed', () => {
    it('gets dog breed', () => {
      expect(fawkes.getBreed()).toBe('?????????????????')
      expect(jax.getBreed()).toBe('Giant Schnauzer')
    })
  })

  describe('getColor', () => {
    it('gets dog name', () => {
      expect(fawkes.getColor()).toBe('Brown')
      expect(jax.getColor()).toBe('Black')
    })
  })

  describe('getWeight', () => {
    it('gets dog name', () => {
      expect(fawkes.getWeight()).toBe(10)
      expect(jax.getWeight()).toBe(100)
    })
  })

  describe('setWeight', () => {
    it('sets dog weight', () => {
      fawkes.setWeight(11)
      jax.setWeight(99)
      expect(fawkes.getWeight()).toBe(11)
      expect(jax.getWeight()).toBe(99)
    })
  })

  describe('setColor', () => {
    it('sets dog color', () => {
      fawkes.setColor('bleached')
      jax.setColor('bleached')
      expect(fawkes.getColor()).toBe('bleached')
      expect(jax.getColor()).toBe('bleached')
    })
  })

  describe('setBreed', () => {
    it('sets dog breed', () => {
      fawkes.setBreed('?')
      jax.setBreed('miniature schnauzer')
      expect(fawkes.getBreed()).toBe('?')
      expect(jax.getBreed()).toBe('miniature schnauzer')
    })
  })

  describe('setName', () => {
    it('sets dog name', () => {
      fawkes.setName('Fawkess')
      jax.setName('Jaxie')
      expect(fawkes.getName()).toBe('Fawkess')
      expect(jax.getName()).toBe("Jaxie")
    })
  })

  describe('describe', () => {
    it('describes the dog', () => {
      expect(fawkes.describe()).toBe('Fawkes is a Brown ????????????????? who weighs 10 lbs')
      expect(jax.describe()).toBe('Jax is a Black Giant Schnauzer who weighs 100 lbs')
    })
  })
})

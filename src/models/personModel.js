import { ref } from 'vue'

const person = ref({
  name: "",
  age: "",
  childs: [],
});

class Child {
  constructor(name = "", age = "") {
    this.name = name;
    this.age = age;
  }
}

export { person, Child };
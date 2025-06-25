const app = Vue.createApp({
  data() {
    return {
      questions: [
        {
          id: 1,
          question: "What is the difference between a list and a tuple in Python?",
          answer: "Lists are mutable (can be changed after creation) and use square brackets []. Tuples are immutable (cannot be changed after creation) and use parentheses (). Lists have methods like append(), remove(), etc., while tuples have fewer methods.",
          difficulty: "easy",
          category: "basics",
        },
        {
          id: 2,
          question: "Explain the difference between '==' and 'is' operators in Python.",
          answer: "'==' checks for value equality (whether two objects have the same value), while 'is' checks for identity (whether two variables refer to the same object in memory). For example: [1,2] == [1,2] is True, but [1,2] is [1,2] is False.",
          difficulty: "medium",
          category: "basics",
        },
      ],
    };
  },
});

app.mount("#app");
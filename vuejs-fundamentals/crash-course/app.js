const app = Vue.createApp({
    template: `
        <div>
            <h1>Random Python Question</h1>
            <h2>Click the button to generate a random question.</h2>
            <br />
            <h3>{{ question }}</h3>
            <p>{{ answer }}</p>
            <br />
            <button>New Question</button>
        </div>
        `,
        data() {
            return {
                question: 'What is the primary difference between a Python list and a Python tuple?',
                answer: 'Lists can store heterogeneous data, while tuples can only store homogeneous data.'
            }}
})

app.mount('#app')
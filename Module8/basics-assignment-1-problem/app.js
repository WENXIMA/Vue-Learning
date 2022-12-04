 const app = Vue.createApp({
    data() {
        return {
            name: "Wenxi Ma",
            age: 22,
            imgsrc:'img.png'

        }
    },
    methods: {
        info() {
            age = this.age+5;
            return age;
        },
        randoms() {
            const num = Math.random();
                return num;
        }

    },
 });

 app.mount("#assignment")
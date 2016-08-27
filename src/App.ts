class App {
    public hello() {
        const body = document.querySelector("body");
        const div = document.createElement("div");
        div.innerText = "Hello, world!";
        body.appendChild(div);
    }
}

const app = new App();
app.hello();
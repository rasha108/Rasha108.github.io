const TYPING_SPEED = 75

function randomInRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

function renderTypeWriterText(text, selector, speed, resolve, index = 0) {
    if (index != text.length) {
        document.querySelector(selector).innerHTML += text.charAt(index);
        setTimeout(
            renderTypeWriterText,
            speed += randomInRange(-5, 3),
            text,
            selector,
            speed,
            resolve,
            ++index,
        );
    } else {
        resolve();
    }
}

const hello = document.createElement("div");
hello.className = "hello";
document.body.appendChild(hello);

let helloRender = new Promise((resolve, _) => {
    renderTypeWriterText(
        text = "i am rashid!",
        selector = ".hello",
        speed = TYPING_SPEED,
        resolve,
    );
});


helloRender.then(() => {
    const developer = document.createElement("div");
    developer.className = "developer";
    document.body.appendChild(developer)

    let developerRender = new Promise((resolve, _) => {
        setTimeout(
            renderTypeWriterText,
            speed = 500,
            text = "the developer",
            selector = ".developer",
            speed = TYPING_SPEED,
            resolve,
        );
    });

    developerRender.then(() => {
        const aboutMe = document.createElement("div");
        aboutMe.className = "about-me";
        document.body.appendChild(aboutMe);


        let aboutRender = new Promise((resolve, _) => {
            setTimeout(
                renderTypeWriterText,
                speed = 500,
                text = "find me here",
                selector = ".about-me",
                speed = TYPING_SPEED,
                resolve,
            );
        });

        aboutRender.then(() => {

            const linksMapping = [
                ["static/tg.png", "tg://resolve?domain=gabolaev"],
                ["static/ln.png", "https://www.linkedin.com/in/gabolaev"],
                ["static/cv.png", "https://visualcv.com/gabolaev"],
                ["static/gh.png", "https://github.com/rasha108"],
                ["static/ig.png", "https://www.instagram.com/gabolaev"],
                ["static/tw.png", "https://twitter.com/georgegabolaev"],
                ["static/vk.png", "https://vk.com/id252820782"],
            ];

            const links = document.createElement("div");
            links.className = "links";
            document.body.appendChild(links);

            let linksRender = new Promise((resolve, _) => {
                function recursive(index = 0) {
                    if (index != linksMapping.length) {
                        links.innerHTML +=
                            `<a href="${linksMapping[index][1]}"><img src="${linksMapping[index][0]}"></a>`;
                        setTimeout(recursive, 120, ++index);
                    } else {
                        resolve();
                    }
                };
                recursive();
            });

            linksRender.then(() => {
                const writeMe = document.createElement("a");
                writeMe.className = "write-me";
                writeMe.href = "mailto:gabolaev98@gmail.com";
                document.body.appendChild(writeMe);

                setTimeout(
                    renderTypeWriterText,
                    speed = 300,
                    text = "have some thoughts?",
                    selector = ".write-me",
                    speed = TYPING_SPEED,
                    () => { },
                );
            });
        });
    });
});
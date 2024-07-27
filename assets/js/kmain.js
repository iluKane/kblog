document.addEventListener("DOMContentLoaded", function () {
    fetch('/notes/filters.json')
        .then(response => response.json())
        .then(jsonData => {
            var container = document.getElementById("kmain");
            jsonData.forEach(function (item) {
                createElements(item, container);
            });
        });

    function createElements(data, parent) {
        var element = document.createElement(data.tag);

        if (data.title) {
            element.innerText = data.title;
        }
        if (data.text) {
            element.innerText = data.text;
        }
        if (data.content) {
            element.className = "notice";
            data.content.forEach(item => {
                const a = document.createElement("div");
                a.innerText = item.text;
                element.appendChild(a);
            });
        }

        if (data.code) {
            var openBtns = document.createElement("div");
            openBtns.className = "openBtns";
            openBtns.innerHTML = `
                <div>HTML</div>
                <div>CSS</div>
                <div>JS</div>
            `;

            var codeBoxs = document.createElement("div");
            codeBoxs.className = "codeBoxs";

            var htmlBox = document.createElement("div");
            var cssBox = document.createElement("div");
            var jsBox = document.createElement("div");
            htmlBox.className = "htmlBox";
            cssBox.className = "cssBox";
            jsBox.className = "jsBox";

            openBtns.children[0].addEventListener("click", function () {
                htmlBox.style.display = htmlBox.style.display === "none" ? "block" : "none";
            });
            openBtns.children[1].addEventListener("click", function () {
                cssBox.style.display = cssBox.style.display === "none" ? "block" : "none";
            });
            openBtns.children[2].addEventListener("click", function () {
                jsBox.style.display = jsBox.style.display === "none" ? "block" : "none";
            });

            var iframeBox = document.createElement("iframe");
            iframeBox.className = "iframeBox";

            codeBoxs.append(htmlBox, cssBox, jsBox, iframeBox);
            element.appendChild(openBtns);
            element.appendChild(codeBoxs);
            element.className = "kcode";

            parent.appendChild(element);

            htmlBox.innerText = data.code.html
                .map(line => " ".repeat(Number(line.indent)) + line.value)
                .join("\n");
            cssBox.innerText = data.code.css
                .map(line => " ".repeat(Number(line.indent)) + line.value)
                .join("\n");
            jsBox.innerText = data.code.js
                .map(line => " ".repeat(Number(line.indent)) + line.value)
                .join("\n");

            htmlBox.style.display = data.showHTML ? "block" : "none";
            cssBox.style.display = data.showCSS ? "block" : "none";
            jsBox.style.display = data.showJS ? "block" : "none";

            updateIframe(htmlBox.innerText, cssBox.innerText, jsBox.innerText, iframeBox);
        } else {
            parent.appendChild(element);
        }
    }

    function updateIframe(htmlContent, cssContent, jsContent, iframeBox) {
        var iframeContent =
            `<!DOCTYPE html>
            <html lang="zh">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>${cssContent}</style>
                </head>
                <body>
                    ${htmlContent}
                    <script>
                        function sendHeightToParent() {
                        const height = document.documentElement.scrollHeight;
                        window.parent.postMessage(height, '*');
                        }
                        window.onload = sendHeightToParent;
                        window.onresize = sendHeightToParent;
                        ${jsContent}
                    <\/script>
                </body>
            </html>`;
        iframeBox.srcdoc = iframeContent;
    }

    window.addEventListener('message', function (event) {
        if (event.origin !== window.location.origin) {
            return;
        }
        const iframes = document.querySelectorAll('iframe.iframeBox');
        iframes.forEach(iframe => {
            iframe.style.height = event.data + 'px';
        });
    }, false);
});

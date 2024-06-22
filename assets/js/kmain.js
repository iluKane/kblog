var jsonData = [
    { tag: "h1", title: "CSS Shadow Box" },
    {
        tag: "p",
        text: "下面是一个简单示例",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            html: [{ indent: "0", value: '<div class="box"></div>' }],
            css: [
                { indent: "0", value: ".box {" },
                { indent: "1", value: "width: 100px;" },
                { indent: "1", value: "height: 100px;" },
                { indent: "1", value: "border: 1px solid #000;" },
                { indent: "1", value: "box-shadow: 0px 0px 10px;" },
                { indent: "0", value: "}" },
            ],
            js: [{ indent: "0", value: "console.log('JS代码运行中');" }],
        },
    },
    { tag: "p", text: "测试1" },
    { tag: "p", text: "测试2" },
];


var container = document.getElementById("kmain");

jsonData.forEach(function (item) {
    createElements(item, container);
});

function createElements(data, parent) {
    var element = document.createElement(data.tag);

    if (data.title) {
        element.innerText = data.title;
    }
    if (data.text) {
        element.innerText = data.text;
    }

    if (data.code) {
        var openBtns = document.createElement("div");
        openBtns.className = "openBtns";
        var codeBoxs = document.createElement("div");
        codeBoxs.className = "codeBoxs";

        var openHTML = document.createElement("div");
        openHTML.innerText = "HTML";
        var openCSS = document.createElement("div");
        openCSS.innerText = "CSS";
        var openJS = document.createElement("div");
        openJS.innerText = "JS";
        var openIframe = document.createElement("div");
        openIframe.innerText = "预览";
        openIframe.className = "openIframe";

        var htmlBox = document.createElement("div");
        var cssBox = document.createElement("div");
        var jsBox = document.createElement("div");
        htmlBox.className = "htmlBox";
        cssBox.className = "cssBox";
        jsBox.className = "jsBox";

        openHTML.addEventListener("click", function () {
            if (htmlBox.style.display == "none") {
                htmlBox.style.display = "block";
            } else {
                htmlBox.style.display = "none";
            }
        });
        openCSS.addEventListener("click", function () {
            if (cssBox.style.display == "none") {
                cssBox.style.display = "block";
            } else {
                cssBox.style.display = "none";
            }
        });
        openJS.addEventListener("click", function () {
            if (jsBox.style.display == "none") {
                jsBox.style.display = "block";
            } else {
                jsBox.style.display = "none";
            }
        });

        var iframeBox = document.createElement("iframe");
        iframeBox.className = "iframeBox";

        openBtns.append(openHTML, openCSS, openJS, openIframe);
        codeBoxs.append(htmlBox, cssBox, jsBox, iframeBox);

        element.appendChild(openBtns);
        element.appendChild(codeBoxs);
        element.className = "kcode";

        parent.appendChild(element);
        var htmlEditor = CodeMirror(htmlBox, {
            value: data.code.html
                .map((line) => " ".repeat(line.indent) + line.value)
                .join("\n"),
            mode: "htmlmixed",
        });
        var cssEditor = CodeMirror(cssBox, {
            value: data.code.css
                .map((line) => " ".repeat(line.indent) + line.value)
                .join("\n"),
            mode: "css",
        });
        var jsEditor = CodeMirror(jsBox, {
            value: data.code.js
                .map((line) => " ".repeat(line.indent) + line.value)
                .join("\n"),
            mode: "javascript",
        });

        if (data.showHTML) {
            htmlBox.style.display = "block";
        } else {
            htmlBox.style.display = "none";
        }
        if (data.showCSS) {
            cssBox.style.display = "block";
        } else {
            cssBox.style.display = "none";
        }
        if (data.showJS) {
            jsBox.style.display = "block";
        } else {
            jsBox.style.display = "none";
        }

        // 初始加载时更新 iframe
        updateIframe(
            htmlEditor.getValue(),
            cssEditor.getValue(),
            jsEditor.getValue(),
            iframeBox
        );

        openIframe.addEventListener("click", function () {
            updateIframe(
                htmlEditor.getValue(),
                cssEditor.getValue(),
                jsEditor.getValue(),
                iframeBox
            );
        });
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

// Add this listener in the parent page to adjust iframe height
window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin) {
        return;
    }
    const iframes = document.querySelectorAll('iframe.iframeBox');
    iframes.forEach(iframe => {
        iframe.style.height = event.data + 'px';
    });
}, false);

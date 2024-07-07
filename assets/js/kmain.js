var jsonData = [
    { tag: "h1", title: "CSS Filters 为你的网页添加酷炫效果" },
    {
        tag: "div",
        content: [
            {
                tag: "p",
                text: "1. 点击 HTML CSS JS 按钮可查看相关代码",
            },
            {
                tag: "p",
                text: "2. 点击 Preview 按钮可查看效果",
            },
            {
                tag: "p",
                text: "3. 如果对照的图片不一样，或者效果不明显，请点击 Preview 按钮刷新",
            },
            {
                tag: "p",
                text: "4. 本页面用图由 https://picsum.photos 免费图床提供，加载速度慢，请稍等",
            },
        ]
    },
    {
        tag: "p",
        text: "在网页设计中，为图像和元素添加视觉效果是常见且重要的一环。CSS Filters 提供了一种简便且强大的方式来实现这些效果。今天，我们将详细介绍各种 CSS Filters 及其应用方法，让你的网页更加生动和引人注目。",
    },
    {
        tag: "p",
        text: "CSS Filters 是一组用于处理图像和元素的图形效果，可以通过 filter 属性轻松添加。它们可以应用于图像、背景和边框等元素。常见的 CSS Filters 包括模糊、亮度、对比度、灰度等。",
    },
    {
        tag: "h3",
        text: "1. blur()",
    },
    {
        tag: "p",
        text: "用来设置图像的模糊效果。参数为模糊半径（像素）",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="blur" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.blur {' },
                { "indent": "2", "value": 'filter: blur(5px); /* 5像素的模糊 */' },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "2. brightness()",
    },
    {
        tag: "p",
        text: "调整元素的亮度。值大于 1 增加亮度，小于 1 降低亮度",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="brightness" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.brightness {' },
                {
                    "indent": "2", "value": 'filter: brightness(1.5); /* 增加 50% 的亮度 */'
                },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "3. contrast()",
    },
    {
        tag: "p",
        text: "调整元素的对比度。值大于 1 增加对比度，小于 1 降低对比度",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="contrast" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.contrast {' },
                {
                    "indent": "2", "value": 'filter: contrast(0.5); /* 减少 50% 的对比度 */'
                },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "4. grayscale()",
    },
    {
        tag: "p",
        text: "将元素转换为灰度图像。值在 0 到 1 之间，1 表示完全灰度",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="grayscale" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.grayscale {' },
                {
                    "indent": "2", "value": 'filter: grayscale(1); /* 完全灰度 */'
                },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "5. hue-rotate()",
    },
    {
        tag: "p",
        text: "调整元素的色相。值以角度为单位（deg）",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="hue-rotate" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.hue-rotate {' },
                {
                    "indent": "2", "value": 'filter: hue-rotate(90deg); /* 色相旋转 90 度 */'
                },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "6. invert()",
    },
    {
        tag: "p",
        text: "反转元素的颜色。值在 0 到 1 之间，1 表示完全反转",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="invert" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.invert {' },
                {
                    "indent": "2", "value": 'filter: invert(1); /* 完全反转颜色 */'
                },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "7. opacity()",
    },
    {
        tag: "p",
        text: "调整元素的不透明度。值在 0 到 1 之间，1 表示完全不透明",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="opacity" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.opacity {' },
                {
                    "indent": "2", "value": 'filter: opacity(0.5); /* 50% 的不透明度 */'
                },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "8. saturate()",
    },
    {
        tag: "p",
        text: "调整元素的饱和度。值大于 1 增加饱和度，小于 1 降低饱和度",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="saturate" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.saturate {' },
                {
                    "indent": "2", "value": 'filter: saturate(2); /* 增加 100% 的饱和度 */'
                },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "9. sepia()",
    },
    {
        tag: "p",
        text: "将元素转换为棕褐色。值在 0 到 1 之间，1 表示完全棕褐色",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="https://picsum.photos/100" alt="" />' },
                { "indent": "0", "value": '<img class="sepia" src="https://picsum.photos/100" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": '.sepia {' },
                {
                    "indent": "2", "value": 'filter: sepia(1); /* 完全棕褐色 */'
                },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
    {
        tag: "h3",
        text: "10. drop-shadow()",
    },
    {
        tag: "p",
        text: "为元素添加阴影效果。不同于 box-shadow，drop-shadow() 应用于图像本身的形状",
    },
    {
        tag: "div",
        showHTML: false,
        showCSS: true,
        showJS: false,
        code: {
            "html": [
                { "indent": "0", "value": '<img src="/assets/img/tx.png" alt="" />' },
                { "indent": "0", "value": '<img class="drop-shadow" src="/assets/img/tx.png" alt="" />' }
            ],
            "css": [
                { "indent": "0", "value": 'img {' },
                { "indent": "2", "value": 'width: 100px;' },
                { "indent": "2", "value": 'height: 100px;' },
                { "indent": "0", "value": '}' },
                { "indent": "0", "value": '.drop-shadow {' },
                { "indent": "2", "value": 'filter: drop-shadow(2px 2px 2px #00f);' },
                { "indent": "0", "value": '}' }
            ],
            js: [{}],
        },
    },
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
        var codeBoxs = document.createElement("div");
        codeBoxs.className = "codeBoxs";

        var openHTML = document.createElement("div");
        openHTML.innerText = "HTML";
        var openCSS = document.createElement("div");
        openCSS.innerText = "CSS";
        var openJS = document.createElement("div");
        openJS.innerText = "JS";
        var openIframe = document.createElement("div");
        openIframe.innerText = "Preview";
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

        // 使用空格实现缩进
        htmlBox.innerText = data.code.html
            .map(line => " ".repeat(Number(line.indent)) + line.value)
            .join("\n");
        cssBox.innerText = data.code.css
            .map(line => " ".repeat(Number(line.indent)) + line.value)
            .join("\n");
        jsBox.innerText = data.code.js
            .map(line => " ".repeat(Number(line.indent)) + line.value)
            .join("\n");

        console.log(cssBox.innerText);

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
        updateIframe(htmlBox.innerText, cssBox.innerText, jsBox.innerText, iframeBox);
        openIframe.addEventListener("click", function () {
            updateIframe(htmlBox.innerText, cssBox.innerText, jsBox.innerText, iframeBox);
        });
    }

    parent.appendChild(element);
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

// 包含要添加到DOM中的各种元素的JSON数据
var jsonData = [
    { "tag": "h1", "text": "Lorem" },
    { "tag": "p", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et" },
    {
        "tag": "code",
        "class": "language-css",
        "code": [
            { "indent": "0", "value": "* {" },
            { "indent": "1", "value": "margin: 0;" },
            { "indent": "1", "value": "padding: 0;" },
            { "indent": "1", "value": "box-sizing: border-box;" },
            { "indent": "1", "value": "-webkit-user-select: none;" },
            { "indent": "1", "value": "user-select: none;" },
            { "indent": "0", "value": "}" }
        ]
    }
];

// 获取要将内容追加到的容器元素
var container = document.getElementById("kmain");

// 遍历jsonData中的每个项目
jsonData.forEach(function (item) {
    createElements(item, container);
});

function createElements(data, parent) {
    // 根据数据中指定的标签创建主元素
    var element = document.createElement(data.tag);

    // 如果提供了文本内容，则设置文本内容
    if (data.text) {
        element.innerText = data.text;
    }

    // 如果存在代码块，则进行处理
    if (data.code) {
        var preElement = document.createElement("pre");

        var codeElement = document.createElement("code");
        codeElement.className = data.class;

        // 使用适当的缩进创建代码内容
        codeElement.innerHTML = data.code.map(function (line) {
            return " ".repeat(line.indent * 2) + line.value;
        }).join("\n");

        preElement.appendChild(codeElement);
        element.appendChild(preElement);
    }

    // 将创建的元素追加到父元素中
    parent.appendChild(element);
}

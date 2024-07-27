const blogPosts = [
    {
        link: "/notes/filters.html",
        title: "CSS Filters 详解：为你的网页添加酷炫效果",
        content:
            "在网页设计中，为图像和元素添加视觉效果是常见且重要的一环。CSS Filters 提供了一种简便且强大的方式来实现这些效果。今天，我们将详细介绍各种 CSS Filters 及其应用方法，让你的网页更加生动和引人注目。",
    },
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

function highlightKeyword(text, keyword) {
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 转义特殊字符
    const regex = new RegExp(`(${escapedKeyword})`, "gi");
    return text.replace(regex, '<div class="highlight">$1</div>');
}

function toggleResultsDisplay(show) {
    resultsList.style.display = show ? "grid" : "none";
}

function search() {
    const query = searchInput.value.trim();
    if (!query) {
        toggleResultsDisplay(false); // 如果搜索内容为空，则隐藏搜索结果
        return;
    }
    toggleResultsDisplay(true); // 如果搜索内容不为空，则显示搜索结果

    resultsList.innerHTML = "";
    const filteredPosts = blogPosts.filter((post) => {
        return (
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.content.toLowerCase().includes(query.toLowerCase())
        );
    });
    if (filteredPosts.length === 0) {
        const listItem = document.createElement("li");
        listItem.classList.add("kcard");
        const nullResult = document.createElement("div");
        nullResult.textContent = "没有找到内容!";
        listItem.appendChild(nullResult);
        resultsList.appendChild(listItem);
    } else {
        filteredPosts.forEach((post) => {
            const listItem = document.createElement("li");
            listItem.classList.add("card");
            const link = document.createElement("a");
            link.href = post.link;
            const title = document.createElement("div");
            title.innerHTML = post.title;
            const content = document.createElement("div");
            content.innerHTML = highlightKeyword(post.content, query);
            content.classList.add("text");
            link.appendChild(title);
            link.appendChild(content);
            listItem.appendChild(link);
            resultsList.appendChild(listItem);
        });
    }
}

searchInput.addEventListener("input", search);
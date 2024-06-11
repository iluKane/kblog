const blogPosts = [
    {
        link: "https://www.google.com",
        title: "博客真的需要图片点击放大功能吗？",
        content:
            "总结一下可以看到分为两大阵营：非平台类：不支持；平台类：全局支持。从这点可以看出，平台类是服务于博主的，而博主的需求各异，因此平台直接全局支持该功能比较省心。而非平台类，据我所知的几家都不支持，因为他们自己就是博主，直接服务于读者。看到这里你可能会产生疑惑，博主的服务对象也是读者，那为什么经过博主这一层就需要支持了？",
    },
    {
        link: "https://www.google.com",
        title: "博客真的需要图片点击放大功能吗？",
        content:
            "总结一下可以看到分为两大阵营：非平台类：不支持；平台类：全局支持。从这点可以看出，平台类是服务于博主的，而博主的需求各异，因此平台直接全局支持该功能比较省心。而非平台类，据我所知的几家都不支持，因为他们自己就是博主，直接服务于读者。看到这里你可能会产生疑惑，博主的服务对象也是读者，那为什么经过博主这一层就需要支持了？",
    },
    {
        link: "https://www.google.com",
        title: "博客真的需要图片点击放大功能吗？",
        content:
            "总结一下可以看到分为两大阵营：非平台类：不支持；平台类：全局支持。从这点可以看出，平台类是服务于博主的，而博主的需求各异，因此平台直接全局支持该功能比较省心。而非平台类，据我所知的几家都不支持，因为他们自己就是博主，直接服务于读者。看到这里你可能会产生疑惑，博主的服务对象也是读者，那为什么经过博主这一层就需要支持了？",
    },
    {
        link: "https://www.google.com",
        title: "博客真的需要图片点击放大功能吗？",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia numquam dolore quisquam, voluptates, soluta porro nostrum voluptatem omnis quasi non fuga magnam velit ut facere quis et? Mollitia maiores et voluptatum fugiat dolores officia, necessitatibus ex distinctio sunt quibusdam!",
    },
    // Add more blog posts here
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

function highlightKeyword(text, keyword) {
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 转义特殊字符
    const regex = new RegExp(`(${escapedKeyword})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
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

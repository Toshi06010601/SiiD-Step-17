document.querySelector("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.querySelector("#searchWord").value.toLowerCase();
    document.querySelectorAll(".each-post").forEach(post =>{
        const $targetBody = post.querySelectorAll(".post-body")[0];
        post.style.display = $targetBody.textContent.toLowerCase().includes(query) ? "" : "none";
    })
});
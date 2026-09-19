function countText() {
    const text = document.getElementById("text-input").value;

    const characters = text.length;

    const trimmedText = text.trim();

    let words = 0;

    if (trimmedText !== "") {
        words = trimmedText.split(/\s+/).length;
    }

    document.getElementById("word-count").textContent =
        "Words: " + words;

    document.getElementById("character-count").textContent =
        "Characters: " + characters;
}
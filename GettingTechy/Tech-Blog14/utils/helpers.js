export function getEmoji() {
    const randomNum = Math.random();
    let book = "📗";
  
    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }
  
    const emojiSpan = document.createElement("span");
    emojiSpan.setAttribute("for", "img");
    emojiSpan.setAttribute("aria-label", "book");
    emojiSpan.textContent = book;
  
    return emojiSpan;
  }
  
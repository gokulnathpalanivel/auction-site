document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const detailsSection = document.getElementById("auction-details");
    const detailsLink = detailsSection.querySelector("a");

    const itemLinks = {
        1: "https://www.ebay.com/itm/Vintage-Rolex-Watch",
        2: "https://www.ebay.com/itm/Antique-Vase",
        3: "https://www.ebay.com/itm/Painting-by-Van-Gogh",
        4: "https://www.ebay.com/itm/Classic-Car"
    };

    items.forEach(item => {
        const bidButton = item.querySelector(".place-bid");
        bidButton.addEventListener("click", () => {
            const bidInput = item.querySelector(".bid-input");
            const currentBidSpan = item.querySelector(".current-bid span");
            const newBid = parseFloat(bidInput.value);
            const currentBid = parseFloat(currentBidSpan.textContent);

            if (newBid > currentBid) {
                currentBidSpan.textContent = newBid.toFixed(2);
                alert("Bid placed successfully!");
                bidInput.value = '';
            } else {
                alert("Bid must be higher than the current bid.");
            }
        });

        item.addEventListener("click", () => {
            const itemId = item.getAttribute("data-item-id");
            detailsLink.href = itemLinks[itemId];
        });
    });
});
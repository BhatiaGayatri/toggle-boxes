document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("click", function() {
            boxes.forEach(otherBox => {
                if (otherBox !== box) {
                    const content = otherBox.querySelector(".box-content");
                    if (content) {
                        content.hidden = true;
                    }
                    otherBox.classList.remove("active");
                }
            });

            const content = box.querySelector(".box-content");
            if (content) {
                content.hidden = !content.hidden;
            }
            box.classList.toggle("active");
        });

        const content = box.querySelector(".box-content");
        if (content) {
            content.addEventListener("click", function(event) {
                event.stopPropagation();
            });
        }
    });
});

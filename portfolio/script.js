document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector('.typing-text');

    // Check if the typingText element exists
    if (typingText) {
        const textArray = ["A Problem Solver", "A Creative Coder", "A Tech Innovator", "A Fast Learner"];
        let textIndex = 0;
        let charIndex = 0;
        let currentText = "";
        let isDeleting = false;
        const typingSpeed = 150;
        const deletingSpeed = 100;
        const delayBetweenWords = 1000;

        function type() {
            if (isDeleting) {
                // Remove characters
                currentText = textArray[textIndex].substring(0, charIndex--);
            } else {
                // Add characters
                currentText = textArray[textIndex].substring(0, charIndex++);
            }

            // Update the displayed text
            typingText.textContent = currentText;

            // If text is fully typed out
            if (!isDeleting && charIndex === textArray[textIndex].length) {
                setTimeout(() => (isDeleting = true), delayBetweenWords);
            }
            // If text is fully deleted
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length; // Move to the next text
            }

            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(type, speed);
        }

        // Start the typing effect
        type();
    }
});

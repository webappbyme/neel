// Calorie Burn Calculator
document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const intensity = document.getElementById('intensity').value.toLowerCase();
    const duration = parseFloat(document.getElementById('duration').value);
    let calorieBurn;

    if (intensity === "low") {
        calorieBurn = duration * 4; // Example rate for low intensity
    } else if (intensity === "moderate") {
        calorieBurn = duration * 6; // Example rate for moderate intensity
    } else if (intensity === "high") {
        calorieBurn = duration * 8; // Example rate for high intensity
    } else {
        calorieBurn = 0;
    }

    document.getElementById('result').innerText = calorieBurn > 0 
        ? `Calories Burned: ${calorieBurn} kcal`
        : "Invalid intensity. Use Low, Moderate, or High.";
});

// Scroll Animation on Page Load
const animatedSections = document.querySelectorAll('.animated-section');
window.addEventListener('scroll', () => {
    animatedSections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
        }
    });
});

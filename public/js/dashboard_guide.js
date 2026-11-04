const guideSteps = [
    {
        c: "summary_section",
        title: "Summary cards",
        text: "These cards show your total hours, the number of people you supported and your submitted entries."
    },
    {
        c: "service_entry_section",
        title: "Add service entry",
        text: "Click this button when you want to record a new service activity. You can also open this page from the naviagtion bar on the left"
    },
    {
        c: "entries_section",
        title: "My service entries",
        text: "This section shows the service entries you have already submitted."
    }
];

let guideNumber = 0;

const guideOpenButton = document.getElementById("dashboard_guide_button");
const guideCard = document.getElementById("guide_card");
const guideClose = document.getElementById("guide_close");
const guideNext = document.getElementById("guide_next");
const guideStep = document.getElementById("guide_step");
const guideTitle = document.getElementById("guide_title");
const guideText = document.getElementById("guide_text");

function clearHighlight() {
    document.querySelectorAll(".guide_highlight").forEach(function (element) {
        element.classList.remove("guide_highlight");
    });
}

function showGuideStep() {
    clearHighlight();

    const step = guideSteps[guideNumber];
    const c = document.getElementById(step.c);

    guideStep.textContent = "Step " + (guideNumber + 1) + " of " + guideSteps.length;
    guideTitle.textContent = step.title;
    guideText.textContent = step.text;

    if (guideNumber === guideSteps.length - 1) {
        guideNext.textContent = "Finish";
    } else {
        guideNext.textContent = "Next";
    }

    if (c) {
        c.scrollIntoView({behavior: "smooth",block: "center"});
        c.classList.add("guide_highlight");

        setTimeout(function () {
            const cPosition = c.getBoundingClientRect();
            guideCard.style.top = window.scrollY + cPosition.bottom + 12 + "px";
            guideCard.style.left = window.scrollX + cPosition.left + "px";
        }, 400);
    }
}

guideOpenButton.addEventListener("click", function () {
    guideNumber = 0;
    guideCard.hidden = false;
    showGuideStep();
});

guideNext.addEventListener("click", function () {
    guideNumber = guideNumber + 1;

    if (guideNumber >= guideSteps.length) {
        guideCard.hidden = true;
        clearHighlight();
        return;
    }
    showGuideStep();
});

guideClose.addEventListener("click", function () {
    guideCard.hidden = true;
    clearHighlight();
});
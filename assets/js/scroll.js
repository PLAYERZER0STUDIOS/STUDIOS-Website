newFunction();

function newFunction() {
    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function () {

        $("html, body").animate({ scrollTop: 0 }, "fast");

    });
}
$(document).ready(function () {
  const adviceContainer = $("#adviceContainer");
  const adviceTitle = $("#adviceTitle");
  const adviceContent = $("#advice");
  const submitBtn = $("#submitBtn");

  randomAdvice();

  submitBtn.on("click", function () {
    randomAdvice();
  });

  function randomAdvice() {
    $.getJSON("https://api.adviceslip.com/advice", function (data) {
      const advice = data.slip.advice;
      const adviceNumber = data.slip.id;
      adviceTitle.text(`ADVICE #${adviceNumber}`);
      adviceContent.text(`"${advice}"`);
    }).fail(function (error) {
      console.log("Error:", error);
    });
  }
});

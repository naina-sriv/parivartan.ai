let currentSlide = 1;
const totalSlides = 5;

function autoPlay() {
    setInterval(() => {
        currentSlide = (currentSlide % totalSlides) + 1; 
        document.getElementById(`slide${currentSlide}`).checked = true;
    }, 3000); 
}

window.onload = autoPlay;
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'hi,en,bn,te,mr,ta,gu,ur,kn,ml,pa', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
 }, 'google_translate_element');
 }
// const synth = window.speechSynthesis;
//         function readContent() {
//             const content = document.body.innerText;  
//             const language = document.getElementById('languageSelect').value;

//             if (!content) {
//                 alert("There's no text content to read.");
//                 return;
//             }
//             const utterance = new SpeechSynthesisUtterance(content);
//             utterance.lang = language;
//             synth.speak(utterance);
//         }
//         function stopSpeech() {
//             if (synth.speaking) {
//                 synth.cancel();
//             }
//         }
//         if (!('speechSynthesis' in window)) {
//             alert("Sorry, your browser does not support the Text-to-Speech feature.");
//         }
//  document.getElementById('read-button').addEventListener('click', function() {
//     const bodyText = document.body.innerText; 
//  const utterance = new SpeechSynthesisUtterance(bodyText);
//     const words = bodyText.split(' ');

//     let currentIndex = 0;

//     utterance.onboundary = function(event) {
//         if (event.charIndex >= 0) {
        
//             if (currentIndex > 0) {
//                 const previousWord = words[currentIndex - 1];
//                 document.body.innerHTML = document.body.innerHTML.replace(`<span class="highlight">${previousWord}</span>`, previousWord);
//             }
//             const currentWord = words[currentIndex];
//             document.body.innerHTML = document.body.innerHTML.replace(currentWord, `<span class="highlight">${currentWord}</span>`);
//             currentIndex++;
//         }
//     };

//     utterance.onend = function() {
    
//         document.body.innerHTML = bodyText;  = 0;
//     };

//     speechSynthesis.speak(utterance);
// };

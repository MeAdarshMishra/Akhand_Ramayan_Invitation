document.addEventListener('DOMContentLoaded', function () {
    const text = [
        "परमपिता परमेश्वर की असीम कृपा से हमारे यहाँ",
        "अखण्ड रामायण हैं।",
        "इस शुभ अवसर पर आप सादर आमंत्रित हैं।",
        "कृपया सपरिवार पधारकर हमें अनुग्रहित करें।",
        "दिनांक 16 अक्टूबर 2024 से शुरू होकर",
        " 17 अक्टूबर 2024 को संपन्न होगा",
        "रामायण समापन के बाद शाम को भोजन का आयोजन है",
        "जिसमें आपकी उपस्थिति अनिवार्य है",
        "स्थान: Online",
        "संपर्क: 1234567890",
        " - Shree Ram"
    ];
    let i = 0, j = 0;
    let speed = 100; 
    const target = document.querySelector('.typing-text');
    let interval;

    function typeWriter() {
        if (j < text[i].length) {
            target.innerHTML += text[i].charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        } else {
            j = 0;
            i++;
            target.innerHTML += '<br>';
            if (i < text.length) {
                setTimeout(typeWriter, speed);
            } else {
                setTimeout(() => {
                    target.innerHTML = ''; 
                    i = 0;
                    typeWriter();
                }, 4000);
            }
        }
    }

    typeWriter(); 
});

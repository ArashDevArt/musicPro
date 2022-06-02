$("#searchToggleshow").hide()
$("#searchToggleshow1").hide()
$("#text").hide();

AOS.init({

    duration: 1000,

});

$("#overlayshow").click(function () {
    $("#overlayshow").hide()
    $("#overlayhide").show()
    $("#overlayMenu").css({ "display": "flex", "width": "65%", "transition": "1500ms" });

    $("#navbar").css({ "right": "0" })
})

$("#overlayhide").click(function () {
    $("#overlayshow").show()
    $("#overlayhide").hide()
    $("#overlayMenu").css({ "display": "flex", "width": "0%", "transition": "1500ms" });
    $("#navbar").css({ "right": "-60px" })
    $("#serchinput").css({ "display": "flex", "width": "0px", "transition": "2s", "border": "none" })
    $("#searchToggleshow").hide()

})



$("#searchTogglehide").click(function () {
    $("#serchinput").css({ "display": "flex", "width": "200px", "transition": "2s", "border": "1px solid #2B61D1", })
    $("#searchTogglehide").hide()
    $("#searchToggleshow").show(500)

})

$("#searchToggleshow").click(function () {
    $("#serchinput").css({ "display": "flex", "width": "0px", "transition": "2s", "border": "none" })
    $("#searchToggleshow").hide()
    $("#searchTogglehide").show()
})

$("#searchTogglehide1").click(function () {
    $("#serchinput1").css({ "display": "flex", "width": "200px", "transition": "2s", "border": "1px solid #2B61D1", })
    $("#searchTogglehide1").hide()
    $("#searchToggleshow1").show(500)

})

$("#searchToggleshow1").click(function () {
    $("#serchinput1").css({ "display": "flex", "width": "0px", "transition": "2s", "border": "none" })
    $("#searchToggleshow1").hide()
    $("#searchTogglehide1").show()
})

$("#textToggle").click(function () {
    $("#text").slideToggle(700);
});


 // On page load or when changing themes, best to add inline in `head` to avoid FOUC
 if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}


let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
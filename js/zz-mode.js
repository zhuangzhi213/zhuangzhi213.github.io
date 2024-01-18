function switchNightMode() {
    document.querySelector("body").insertAdjacentHTML("beforeend", '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><div id="sun"></div><div id="moon"></div></div></div>'),
    setTimeout((function() {
        document.querySelector("body").classList.contains("DarkMode") ? (document.querySelector("body").classList.remove("DarkMode"),
        localStorage.setItem("isDark", "0"),
        document.getElementById("modeicon").setAttribute("xlink:href", "#icon-moon")) : (document.querySelector("body").classList.add("DarkMode"),
        localStorage.setItem("isDark", "1"),
        document.getElementById("modeicon").setAttribute("xlink:href", "#icon-sun")),
        setTimeout((function() {
            document.getElementsByClassName("Cuteen_DarkSky")[0].style.transition = "opacity 3s",
            document.getElementsByClassName("Cuteen_DarkSky")[0].style.opacity = "0",
            setTimeout((function() {
                document.getElementsByClassName("Cuteen_DarkSky")[0].remove()
            }
            ), 1e3)
        }
        ), 2e3)
    }
    ));
    "light" === ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (document.getElementById("sun").style.opacity = "1",
    document.getElementById("moon").style.opacity = "0",
    setTimeout((function() {
        document.getElementById("sun").style.opacity = "0",
        document.getElementById("moon").style.opacity = "1"
    }
    ), 1e3),
    activateDarkMode(),
    saveToLocal.set("theme", "dark", 2),
    document.getElementById("modeicon").setAttribute("xlink:href", "#icon-sun"),
    setTimeout((()=>{
        new Vue({
            data: function() {
                this.$notify({
                    title: "关灯啦🌙",
                    message: "当前已成功切换至夜间模式！",
                    position: "top-left",
                    offset: 50,
                    showClose: !0,
                    type: "success",
                    duration: 5e3
                })
            }
        })
    }
    ), 2e3)) : (document.getElementById("sun").style.opacity = "0",
    document.getElementById("moon").style.opacity = "1",
    setTimeout((function() {
        document.getElementById("sun").style.opacity = "1",
        document.getElementById("moon").style.opacity = "0"
    }
    ), 1e3),
    activateLightMode(),
    saveToLocal.set("theme", "light", 2),
    document.querySelector("body").classList.add("DarkMode"),
    document.getElementById("modeicon").setAttribute("xlink:href", "#icon-moon"),
    setTimeout((()=>{
        new Vue({
            data: function() {
                this.$notify({
                    title: "开灯啦🌞",
                    message: "当前已成功切换至白天模式！",
                    position: "top-left",
                    offset: 50,
                    showClose: !0,
                    type: "success",
                    duration: 5e3
                })
            }
        })
    }
    ), 2e3)),
    "function" == typeof utterancesTheme && utterancesTheme(),
    "object" == typeof FB && window.loadFBComment(),
    window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout((()=>window.disqusReset()), 200)
}

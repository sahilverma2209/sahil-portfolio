export const changeTheme = (theme) => {
    localStorage.setItem('theme', theme)
        switch(theme){
            case 'og':
                document.documentElement.style.setProperty("--main-background", "#0a192f");
                document.documentElement.style.setProperty("--main-background-fade", "#172a45");
                document.documentElement.style.setProperty("--main-background-dark", "#020c1b");
                document.documentElement.style.setProperty("--main-highlight", "#64ffda");
                document.documentElement.style.setProperty("--main-fade-text", "#606a86");
                document.documentElement.style.setProperty("--main-super-fade-text", "#8892b0");
                document.documentElement.style.setProperty("--main-super-fade", "#e6f1ff");
                document.documentElement.style.setProperty("--main-fade-line", "#2d3952");
                document.documentElement.style.setProperty("--main-img-fade", "#0ba8834d");
                break;
            case 'purple':
                document.documentElement.style.setProperty("--main-background","#180f42");
                document.documentElement.style.setProperty("--main-background-fade","#291f58");
                document.documentElement.style.setProperty("--main-background-dark","#020c1b");
                document.documentElement.style.setProperty("--main-highlight","#acf5ff");
                document.documentElement.style.setProperty("--main-fade-text","#deedee");
                document.documentElement.style.setProperty("--main-super-fade-text","#d5e3e7");
                document.documentElement.style.setProperty("--main-super-fade","#23c3f3");
                document.documentElement.style.setProperty("--main-fade-line","#336b7c");
                document.documentElement.style.setProperty("--main-img-fade","#1d92a75b");
                break;
            case 'white':
                document.documentElement.style.setProperty("--main-background", "#eeeeee");
                document.documentElement.style.setProperty("--main-background-fade", "#f5f5f5");
                document.documentElement.style.setProperty("--main-background-dark", "#d8d8d8");
                document.documentElement.style.setProperty("--main-highlight", "#10608f");
                document.documentElement.style.setProperty("--main-fade-text", "#5a606b");
                document.documentElement.style.setProperty("--main-super-fade-text", "#24323d");
                document.documentElement.style.setProperty("--main-super-fade", "#285174");
                document.documentElement.style.setProperty("--main-fade-line", "#909cb3");
                document.documentElement.style.setProperty("--main-img-fade", "#88aac28f");
                break;
            case 'red':
                document.documentElement.style.setProperty("--main-background", "#000000");
                document.documentElement.style.setProperty("--main-background-fade", "#a33434");
                document.documentElement.style.setProperty("--main-background-dark", "#240404");
                document.documentElement.style.setProperty("--main-highlight", "#c74242");
                document.documentElement.style.setProperty("--main-fade-text", "#b36666");
                document.documentElement.style.setProperty("--main-super-fade-text", "#ffffff");
                document.documentElement.style.setProperty("--main-super-fade", "#ac5151");
                document.documentElement.style.setProperty("--main-fade-line", "#522d2d");
                document.documentElement.style.setProperty("--main-img-fade", "#9e3b3b2c");
                break;
            

        }
} 
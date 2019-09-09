export const BIG_SCREEN = "(min-width: 769px)"
export const changeTheme = (theme) => {
    localStorage.setItem('theme', theme)
        switch(theme){
            case 'og':
                document.documentElement.classList.add('og')
                document.documentElement.classList.remove('purple')
                document.documentElement.classList.remove('white')
                document.documentElement.classList.remove('red')
                break;
            case 'purple':
                document.documentElement.classList.add('purple')
                document.documentElement.classList.remove('og')
                document.documentElement.classList.remove('white')
                document.documentElement.classList.remove('red')
                break;
            case 'white':
                document.documentElement.classList.add('white')
                document.documentElement.classList.remove('og')
                document.documentElement.classList.remove('purple')
                document.documentElement.classList.remove('red')
                break;
            case 'red':
                document.documentElement.classList.add('red')
                document.documentElement.classList.remove('og')
                document.documentElement.classList.remove('white')
                document.documentElement.classList.remove('purple')
                break;
            default:
                document.documentElement.classList.add('og')
                document.documentElement.classList.remove('purple')
                document.documentElement.classList.remove('white')
                document.documentElement.classList.remove('red')
                break;
            
        }
} 
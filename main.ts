import { App as AppType, createApp } from "vue";
import App from './App.vue'

import style from "@/assets/public/color.module.scss"

const primaryColor = style.themeColor
const cloneColor = style.cloneThemeColor
document.documentElement.style.setProperty('--theme-color', primaryColor);
if(true){
    document.documentElement.style.setProperty('--theme-color', cloneColor);
}

class Main {
    public async bootstrap() {
        const app = this.app()
        app.mount('#app')
    }

    protected app(): AppType {
        const app = createApp(App)
        return app
    }
}

new Main()

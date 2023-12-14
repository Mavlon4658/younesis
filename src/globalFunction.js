export default function (app) {
    app.config.globalProperties.$getUrl = (url) => {
        return url.replace(':443', '')
    };

    app.config.globalProperties.$makeRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
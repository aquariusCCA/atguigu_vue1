//创建vm
// 在腳手架裡面引入組件的時候，.vue 的副檔名可以省略。
import App from './App.vue';

//如果文件
new Vue({
    el: '#root',
    template: `<App></App>`,
    components: {
        App
    }
});
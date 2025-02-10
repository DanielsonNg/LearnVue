import { createApp } from "vue";
import Counter from "./components/Counter.vue";
import MultiCounter from "./components/MultiCounter.vue";

// createApp(Counter).mount('#app')
createApp(MultiCounter).mount("#app")
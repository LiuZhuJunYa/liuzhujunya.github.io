<!-- 新建 components/YunFooter.vue -->
<style>
    .statistics span {
        display: inline-block;
        min-width: 30px; /* 根据需要调整最小宽度 */
        text-align: center;
    }
</style>

<script lang="ts" setup>
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const startTime: Date = new Date('2024-07-28T10:00:00'); // 设置开始时间
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateRunningTime = () => {
  const now: Date = new Date();
  const diff: number = now.getTime() - startTime.getTime();
  
  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff / 1000) % 60);
};
 
let timer: number;

onMounted(() => {
    timer = setInterval(updateRunningTime, 1000) as unknown as number;
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <YunFooter>
    <div class="statistics">
        本站已运行<span>{{ days }}</span>天数<span>{{ hours }}</span>小时<span>{{ minutes }}</span>分钟<span>{{ seconds }}</span>秒钟
       </div>
  </YunFooter>
</template>
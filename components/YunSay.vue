<template>
    <div class="say">
      <span v-if="sayContent" class="say-content animate-fade-in animate-iteration-1">{{ sayContent }}</span>
      <span v-if="sayAuthor" class="say-author">{{ sayAuthor }}</span>
      <span v-if="sayFrom" class="say-from">{{ sayFrom }}</span>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  
  // 本地语录数据
  const localSayings = [
    { content: "路旁青衣树上斜，明眸杉影叹妃曦。落尽红樱君不见，轻绘梨花泪沾衣。待到海棠花如雪，来世仍为君倾心。", author: "上杉·绘梨衣", from: "《龙族3・黑月之潮》" },
    { content: "“04.24，和Sakura去东京天空树，世界上最暖和的地方在天空树的顶上。” “04.25，和Sakura去明治神宫，有人在那里举办婚礼。” “04.26，和Sakura去迪士尼，鬼屋很可怕，但是有Sakura在，所以不可怕。” “Sakura最好了。”", author: "上杉·绘梨衣", from: "《龙族3・黑月之潮》" },
    { content: "我们都是小怪兽，终有一天会被正义的奥特曼杀死。", author: "上杉·绘梨衣", from: "《龙族3・黑月之潮》" },
    // 更多语录可以在这里添加
  ];
  
  const sayContent = ref('');
  const sayAuthor = ref('');
  const sayFrom = ref('');
  
  // 随机选择一条语录并显示
  function displayLocalSaying() {
    const randomIndex = Math.floor(Math.random() * localSayings.length);
    const saying = localSayings[randomIndex];
    sayContent.value = saying.content;
    sayAuthor.value = saying.author;
    sayFrom.value = saying.from;
  }
  
  onMounted(() => {
    displayLocalSaying(); // 组件挂载后执行
  })
  </script>
  
  <style lang="scss">
  .say {
    color: var(--va-c-text);
    display: block;
    text-align: center;
    font-family: var(--va-font-serif);
    font-weight: bold;
    padding: 0.5rem;
    border-top: var(--va-border-width) solid var(--va-c-text-light);
    border-bottom: var(--va-border-width) solid var(--va-c-text-light);
  
    .say-content {
      display: block;
    }
  
    .say-author, .say-from {
      display: block;
      margin-top: 0.5rem;
    }
  }
  </style>
  
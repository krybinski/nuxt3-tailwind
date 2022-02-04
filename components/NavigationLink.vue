<template>
  <NuxtLink
    :to="item.href"
    :class="[
      item.href === $route.matched[0].path
        ? 'bg-main-dark text-white'
        : 'text-gray-300 hover:bg-main-darken hover:text-white',
      `${blockClass} px-3 py-2 rounded-md text-sm font-medium`,
    ]"
    :aria-current="item.href === $route.matched[0].path ? 'page' : undefined"
  >
    {{ item.name }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    isBlock: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const blockClass = props.isBlock ? 'block' : '';

    return {
      blockClass,
    };
  },
};
</script>

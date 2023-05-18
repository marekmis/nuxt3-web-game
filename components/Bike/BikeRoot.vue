<template>
  <div
    class="absolute z-0 left-1/2 -ml-[69px] transition-all flex justify-between w-[138px] h-[140px] items-end dark:brightness-90"
    :class="{
      'bottom-[120px] z-0': laneComp === 1,
      'bottom-[80px] z-20': laneComp === 2,
      'bottom-[40px] z-40': laneComp === 3,
    }"
  >
    <BikeFrame
      :class="{
        'rotate-12': crashed,
      }"
    />
    <BikeRiderRoot :speed="speed" :crashed="crashed" />
    <BikeRiderLegBehind :speed="speed" :crashed="crashed" />

    <BikeFrontGear :speed="speed" />

    <BikeWheel class="left-1 bottom-1" :show-gear="true" :speed="speed" />
    <BikeWheel class="right-1 bottom-1" :show-gear="false" :speed="speed" />
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
  lane: {
    type: Number,
    default: 2,
  },
  crashed: {
    type: Boolean,
    default: false,
  },
});

const laneComp = computed(() => props.lane);
</script>

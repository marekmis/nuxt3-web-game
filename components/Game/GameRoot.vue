<template>
  <div class="w-full mx-auto max-w-[800px] h-[300px] relative">
    <!-- Modals -->
    <Transition name="swap-top">
      <GameDashboard
        v-if="state.gameLooping"
        :score="score"
        :hiscore="hiscore"
        :level="state.gameLevel"
      />
    </Transition>

    <Transition name="swap-top">
      <GameModalIntro v-if="state.showHow" @click="startGame()" />
      <GameModalCrash
        v-else-if="state.ended"
        :score="score"
        :hiscore="hiscore"
        @click="restartGame()"
      />
    </Transition>

    <!-- Scene -->
    <div
      class="scene absolute z-0 w-[800px] h-[300px] left-1/2 -ml-[400px] overflow-hidden transition-transform duration-500"
      :class="{ '-translate-x-28 md:translate-x-0': state.gameLooping }"
    >
      <BikeRoot
        :speed="state.speed"
        :lane="state.lane"
        :crashed="state.crashed"
        :class="{
          'scale-[80%] origin-bottom-right md:scale-100': !deactivated,
        }"
      />
      <Transition name="swap-top">
        <div
          v-if="state.allowShowHow"
          class="absolute z-50 left-0 right-0 mx-auto text-center w-full h-full flex items-end justify-center"
        >
          <ButtonButton
            btn-text="Let's ride!"
            aria-label="Start the game"
            @click="startIntro()"
          />
        </div>
      </Transition>

      <div v-if="state.showObstacles" class="animate-fade">
        <GameObstacles
          v-for="lane in state.lanes"
          :key="lane.id"
          :lane-data="lane"
        />
      </div>
    </div>

    <!-- Controls  -->
    <Teleport to="body">
      <Transition name="swap-top">
        <div
          v-if="state.gameLooping && $device.isMobile"
          class="flex justify-between fixed bottom-0 w-full p-3"
        >
          <ButtonController :btn-text="'▲'" @click="changeLane('up')" />
          <ButtonController :btn-text="'▼'" @click="changeLane('down')" />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from "vue";
import { useStorage } from "@vueuse/core";
const gtag = useGtag();
const config = useRuntimeConfig();

const props = defineProps({
  deactivated: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  speed: 0,
  distance: 0,
  btnText: "Go",
  showHow: false,
  allowShowHow: true,
  lane: 2,
  lanes: [
    {
      class: "bottom-[120px] z-10",
      obstacles: [],
      id: 1,
    },
    {
      class: "bottom-[80px] z-30",
      obstacles: [],
      id: 2,
    },
    {
      class: "bottom-[40px] z-50",
      obstacles: [],
      id: 3,
    },
  ],
  gameInterval: null,
  gameSpeed: 2,
  gameLevel: 1,
  gameLooping: false,
  frequencyBase: 8000,
  levelUpDistanceInterval: 200,
  showObstacles: false,
  lastTime: 0,
  lastAddedLane: 0,
  obstacleTypes: ["cactus", "poop", "rock", "bin", "barrier"],
  animationFrame: null,
  ended: false,
  crashed: false,
});

// Score calculation
const score = computed(() => {
  return Math.floor(state.distance / 10);
});
const hiscore = useStorage("hiscore", 0);

// Intro screen
function startIntro() {
  if (props.deactivated) return;
  if (state.allowShowHow) {
    state.showHow = true;
    state.allowShowHow = false;
  }
}

// Start the game
function startGame() {
  state.speed++;
  state.showHow = false;
  state.showObstacles = true;
  state.gameLooping = true;
  state.animationFrame = window.requestAnimationFrame(gameLoop);
  useViewport({ scalable: false });
}

// Restart the game
function restartGame() {
  state.ended = false;
  state.crashed = false;
  state.distance = 0;
  state.lane = 2;
  state.frequencyBase = 8000;
  state.gameLevel = 1;
  state.gameSpeed = 2;
  state.speed = 0;
  state.lanes.forEach((lane) => {
    lane.obstacles = [];
  });
  startGame();
}

function stopGame() {
  state.speed = 0;
  state.crashed = true;
  state.gameLooping = false;
  cancelAnimationFrame(state.animationFrame);
  hiscore.value = score.value > hiscore.value ? score.value : hiscore.value;
  setTimeout(() => {
    state.ended = true;
    state.speed = 0;
  }, 1000);
  useViewport({ scalable: true });
  gtag("event", "score", {
    value: score.value,
    level: state.gameLevel,
    send_to: config.public?.gtag?.id,
  });
}

// Handle keyboard input
function keyDown(e) {
  // Arrow keys
  if (["ArrowUp", "ArrowDown"].includes(e.code)) {
    e.preventDefault();
    if (state.ended || state.crashed) return;
    if (e.code === "ArrowDown") {
      changeLane("down");
    } else if (e.code === "ArrowUp") {
      changeLane("up");
    }
  }
  // Space and Enter
  if (["Space", "Enter"].includes(e.code)) {
    e.preventDefault();
    if (state.gameLooping) return;
    restartGame();
  }
}

// Change lane
function changeLane(direction) {
  if (!state.gameLooping) return;
  if (direction === "down") {
    state.lane++;
    if (state.lane > 3) {
      state.lane = 3;
    }
  } else if (direction === "up") {
    state.lane--;
    if (state.lane < 1) {
      state.lane = 1;
    }
  }
}

// Obstacle generation interval
function gameLoop(timestamp) {
  if (!state.gameLooping) return;

  const timeElapsed = timestamp - state.lastTime;
  state.distance += 1;

  // Move all obstacles and perform detections
  state.lanes.forEach((lane) => {
    lane.obstacles.forEach((obstacle) => {
      obstacle.distance += state.gameSpeed;

      // detect collision with bike
      if (
        obstacle.distance > 300 &&
        obstacle.distance < 400 &&
        state.lane === obstacle.lane
      ) {
        stopGame();
      }
    });
  });

  state.lanes.forEach((lane) => {
    lane.obstacles.forEach((obstacle) => {
      // if obstacle distance is off the screen, remove it
      if (obstacle.distance > 860) {
        lane.obstacles = lane.obstacles.filter((o) => o.id !== obstacle.id);
      }
    });
  });

  // Add new obstacles
  if (timeElapsed >= (state.frequencyBase / state.gameSpeed).toFixed(0)) {
    state.lastTime = timestamp;
    addObstacle();
    // add another obstacle sometimes
    if (Math.random() > 0.7) {
      addObstacle();
    }
  }

  // Every given distance points, level up
  if (state.distance % state.levelUpDistanceInterval === 0) {
    levelUp();
  }

  window.requestAnimationFrame(gameLoop);
}

// Add a new obstacle
function addObstacle() {
  let randomLane = Math.floor(Math.random() * 3) + 1;
  if (randomLane === state.lastAddedLane) {
    randomLane = randomLane === 3 ? 2 : 3;
  }

  state.lanes[randomLane - 1].obstacles.push({
    id: Math.random(),
    distance: -100,
    type: state.obstacleTypes[
      Math.floor(Math.random() * state.obstacleTypes.length)
    ],
    lane: randomLane,
  });

  state.lastAddedLane = randomLane;
}

// Level, speed and freqency updates
function levelUp() {
  state.gameLevel++;
  if (state.gameLevel < 12) {
    state.gameSpeed += 0.5;
  } else if (state.gameLevel > 30) {
    state.gameSpeed += 0.25;
  }

  if (state.gameLevel === 6) {
    state.speed = 2;
  } else if (state.gameLevel === 12) {
    state.speed = 3;
  }

  if (state.frequencyBase > 2000 && state.gameLevel > 12) {
    state.frequencyBase -= 300;
  }
}

// Mounting
onMounted(() => {
  window.addEventListener("keydown", keyDown, false);
  if (!props.deactivated) {
    startIntro();
  }
});

// Unmounting
onUnmounted(() => {
  window.removeEventListener("keydown", keyDown, false);
  cancelAnimationFrame(state.animationFrame);
});
</script>

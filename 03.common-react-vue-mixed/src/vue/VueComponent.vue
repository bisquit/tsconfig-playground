<script setup lang="ts">
import { commonMsg } from '../common/common';
import { foo } from './utils'

defineProps<{ msg: string }>();
</script>

<template>
  <p>{{ commonMsg }}: {{ foo }}: {{ msg }}</p>
</template>

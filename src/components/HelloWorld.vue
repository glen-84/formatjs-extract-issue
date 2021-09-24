<template>
  {{ $formatMessage({defaultMessage: "Works."}) }}
</template>

<script lang="ts" setup>
import {useIntl} from "vue-intl";

const intl = useIntl();

console.log(intl.formatMessage({defaultMessage: "Does not work."}));
</script>

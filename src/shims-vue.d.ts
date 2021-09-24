/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  import type {IntlFormatters, IntlShape} from "vue-intl";

  module "@vue/runtime-core" {
      interface ComponentCustomProperties {
          $intl: IntlShape;
          $formatMessage: IntlFormatters["formatMessage"];
          $formatDate: IntlFormatters["formatDate"];
          $formatTime: IntlFormatters["formatTime"];
          $formatDateTimeRange: IntlFormatters["formatDateTimeRange"];
          $formatRelativeTime: IntlFormatters["formatRelativeTime"];
          $formatDisplayName: IntlFormatters["formatDisplayName"];
          $formatNumber: IntlFormatters["formatNumber"];
      }
  }
}

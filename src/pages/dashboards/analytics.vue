<script setup>
import AnalyticsAverageDailySales from '@/components/pages-components/dashboard-analysis/AnalyticsAverageDailySales.vue'
import AnalyticsEarningReportsWeeklyOverview from '@/components/pages-components/dashboard-analysis/AnalyticsEarningReportsWeeklyOverview.vue'
import AnalyticsMonthlyCampaignState from '@/components/pages-components/dashboard-analysis/AnalyticsMonthlyCampaignState.vue'
import AnalyticsProjectTable from '@/components/pages-components/dashboard-analysis/AnalyticsProjectTable.vue'
import AnalyticsSalesByCountries from '@/components/pages-components/dashboard-analysis/AnalyticsSalesByCountries.vue'
import AnalyticsSalesOverview from '@/components/pages-components/dashboard-analysis/AnalyticsSalesOverview.vue'
import AnalyticsSourceVisits from '@/components/pages-components/dashboard-analysis/AnalyticsSourceVisits.vue'
import AnalyticsSupportTracker from '@/components/pages-components/dashboard-analysis/AnalyticsSupportTracker.vue'
import AnalyticsTotalEarning from '@/components/pages-components/dashboard-analysis/AnalyticsTotalEarning.vue'
import AnalyticsWebsiteAnalytics from '@/components/pages-components/dashboard-analysis/AnalyticsWebsiteAnalytics.vue'
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Website analytics -->
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsWebsiteAnalytics />
    </VCol>

    <!-- 👉 Average Daily Sales -->
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <AnalyticsAverageDailySales />
    </VCol>

    <!-- 👉 Sales Overview -->
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <AnalyticsSalesOverview />
    </VCol>

    <!-- 👉 Earning Reports Weekly Overview -->
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsEarningReportsWeeklyOverview />
    </VCol>

    <!-- 👉 Support Tracker -->
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsSupportTracker />
    </VCol>

    <!-- 👉 Sales by Countries -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <AnalyticsSalesByCountries />
    </VCol>

    <!-- 👉 Total Earning -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <AnalyticsTotalEarning />
    </VCol>

    <!-- 👉 Monthly Campaign State -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <AnalyticsMonthlyCampaignState />
    </VCol>

    <!-- 👉 Source Visits -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <AnalyticsSourceVisits />
    </VCol>

    <!-- 👉 Project Table -->
    <VCol
      cols="12"
      lg="8"
    >
      <AnalyticsProjectTable />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>

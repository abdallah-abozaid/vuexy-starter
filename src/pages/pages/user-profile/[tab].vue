<script setup>
import UserProfileHeader from '@/components/pages-components/user-profile/UserProfileHeader.vue'
import UserConnections from '@/components/pages-components/user-profile/connections/index.vue'
import UserProfile from '@/components/pages-components/user-profile/profile/index.vue'
import UserProjects from '@/components/pages-components/user-profile/projects/index.vue'
import UserTeam from '@/components/pages-components/user-profile/team/index.vue'

definePage({
  meta: {
    navActiveLink: 'pages-user-profile-tab',
    key: 'tab',
  },
})

const route = useRoute('pages-user-profile-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  {
    title: 'Profile',
    icon: 'tabler-user-check',
    tab: 'profile',
  },
  {
    title: 'Team',
    icon: 'tabler-users',
    tab: 'teams',
  },
  {
    title: 'Projects',
    icon: 'tabler-layout-grid',
    tab: 'projects',
  },
  {
    title: 'Connections',
    icon: 'tabler-link',
    tab: 'connections',
  },
]
</script>

<template>
  <div>
    <UserProfileHeader />

    <VTabs
      v-model="activeTab"
      class="v-tabs-pill my-2"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'pages-user-profile-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="disable-tab-transition"
      :touch="false"
    >
      <!-- Profile -->
      <VWindowItem value="profile">
        <UserProfile />
      </VWindowItem>

      <!-- Teams -->
      <VWindowItem value="teams">
        <UserTeam />
      </VWindowItem>

      <!-- Projects -->
      <VWindowItem value="projects">
        <UserProjects />
      </VWindowItem>

      <!-- Connections -->
      <VWindowItem value="connections">
        <UserConnections />
      </VWindowItem>
    </VWindow>
  </div>
</template>

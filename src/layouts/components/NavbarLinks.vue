<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Menu items for each dropdown
const menuGroups = {
    // orders
  orders: {
    title: 'Orders and Tickets',
    items: [
      { title: 'Orders Page 1', value: '/orders/1' },
      { title: 'Orders Page 2', value: '/orders/2' },
      { title: 'Orders Page 3', value: '/orders/3' },
    ]
  },

    // operations
  operations: {
    title: 'Operations',
    items: [
      { title: 'Operations Dashboard', value: '/operations/dashboard' },
      { title: 'Processes', value: '/operations/processes' },
      { title: 'Reports', value: '/operations/reports' },
    ]
  },

    //  networks 
  networks: {
    title: 'Networks Management',
    items: [
      { title: 'Network Status', value: '/network/status' },
      { title: 'Configuration', value: '/network/config' },
      { title: 'Monitoring', value: '/network/monitoring' },
    ]
  },
    //  Reports 
  reports: {
    title: 'Reports',
    items: [
      { title: 'reports 1', value: '/reports/status' },
      { title: 'reports 2', value: '/reports/config' },
      { title: 'reports 3', value: '/reports/monitoring' },
    ]
  },
    //  Administrations 
  administrations: {
    title: 'Administrations',
    items: [
      { title: 'Administrations 1', value: '/administrations/status' },
      { title: 'Administrations 2', value: '/administrations/config' },
      { title: 'Administrations 3', value: '/administrations/monitoring' },
    ]
  }
}

// Convert items to include router-link functionality
const toMenuItems = (items) => items.map(item => ({
  ...item,
  props: {
    to: item.value,
    activeClass: 'text-primary',
    exactActiveClass: 'text-primary',
  }
}))

// Check if current route matches any dropdown item
const isActiveDropdown = (items) => {
  return items.some(item => route.path == item.value)
}
</script>

<template>
  <div class="navbar-links">
    <!-- Overview link -->
    <VBtn
      to="/dashboards/analytics"
      variant="plain"
      :color="route.path == '/dashboards/analytics' ? 'primary': 'secondary'"
    >
      <span>Overview</span>
    </VBtn>
    
    <!-- Dynamic dropdown menus -->
    <VMenu 
      v-for="(group, key) in menuGroups" 
      :key="key"
      open-on-hover
      offset-y
    >
      <template #activator="{ props }">
        <VBtn 
          v-bind="props"
          variant="plain"
          :color="isActiveDropdown(group.items) ? 'primary': 'secondary'"
        >
          <span class="flex items-center">
            {{ group.title }}
            <VIcon
                size="14"
                icon="tabler-chevron-compact-down"
              />
          </span>
        </VBtn>
      </template>
    
      <VList class="py-1">
        <VListItem
          v-for="(item, index) in toMenuItems(group.items)"
          :key="`${key}-${index}`"
          v-bind="item.props"
          class="cursor-pointer"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </div>
</template>

<style scoped lang="scss">
.navbar-links{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:1rem;
    @media(max-width: 992px){
        display:none
    }
    & > .v-btn{
        padding:0!important
    }
}
</style>

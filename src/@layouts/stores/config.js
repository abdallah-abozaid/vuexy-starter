import { AppContentLayoutNav, NavbarType } from '@layouts/enums'
import { injectionKeyIsVerticalNavHovered } from '@layouts/symbols'
import { _setDirAttr } from '@layouts/utils'
import { layoutConfig } from '@themeConfig'

export const namespaceConfig = str => `${layoutConfig.app.title}-${str}`

export const cookieRef = (key, defaultValue) => {
  return useCookie(namespaceConfig(key), { default: () => defaultValue })
}

export const useLayoutConfigStore = defineStore('layoutConfig', () => {
  const route = useRoute()

  const navbarType = ref(layoutConfig.navbar.type)
  const isNavbarBlurEnabled = cookieRef('isNavbarBlurEnabled', layoutConfig.navbar.navbarBlur)
  const isVerticalNavCollapsed = cookieRef('isVerticalNavCollapsed', layoutConfig.verticalNav.isVerticalNavCollapsed)
  const appContentWidth = cookieRef('appContentWidth', layoutConfig.app.contentWidth)

  // 🔒 Force vertical layout only
  const appContentLayoutNav = ref(AppContentLayoutNav.Vertical)

  const footerType = ref(layoutConfig.footer.type)

  const breakpointRef = ref(false)

  watchEffect(() => {
    breakpointRef.value = useMediaQuery(`(max-width: ${layoutConfig.app.overlayNavFromBreakpoint}px)`).value
  })

  const isLessThanOverlayNavBreakpoint = computed({
    get: () => breakpointRef.value,
    set: val => { breakpointRef.value = val },
  })

  const _layoutClasses = computed(() => {
    const { y: windowScrollY } = useWindowScroll()

    return [
      `layout-nav-type-${appContentLayoutNav.value}`,
      `layout-navbar-${navbarType.value}`,
      `layout-footer-${footerType.value}`,
      {
        'layout-vertical-nav-collapsed': isVerticalNavCollapsed.value &&
          appContentLayoutNav.value === 'vertical' &&
          !isLessThanOverlayNavBreakpoint.value,
      },
      `layout-content-width-${appContentWidth.value}`,
      { 'layout-overlay-nav': isLessThanOverlayNavBreakpoint.value },
      { 'window-scrolled': unref(windowScrollY) },
      route.meta.layoutWrapperClasses || null,
    ]
  })

  const isAppRTL = ref(false)

  watch(isAppRTL, val => {
    _setDirAttr(val ? 'rtl' : 'ltr')
  })

  const isVerticalNavMini = (isVerticalNavHovered = null) => {
    const isVerticalNavHoveredLocal = isVerticalNavHovered || inject(injectionKeyIsVerticalNavHovered) || ref(false)

    return computed(() =>
      isVerticalNavCollapsed.value &&
      !isVerticalNavHoveredLocal.value &&
      !isLessThanOverlayNavBreakpoint.value,
    )
  }

  return {
    appContentWidth,
    appContentLayoutNav,
    navbarType,
    isNavbarBlurEnabled,
    isVerticalNavCollapsed,
    footerType,
    isLessThanOverlayNavBreakpoint,
    isAppRTL,
    _layoutClasses,
    isVerticalNavMini,
  }
})

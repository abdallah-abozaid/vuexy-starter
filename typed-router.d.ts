/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'apps-calendar': RouteRecordInfo<'apps-calendar', '/apps/calendar', Record<never, never>, Record<never, never>>,
    'apps-user-list': RouteRecordInfo<'apps-user-list', '/apps/user/list', Record<never, never>, Record<never, never>>,
    'apps-user-view-id': RouteRecordInfo<'apps-user-view-id', '/apps/user/view/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'dashboards-analytics': RouteRecordInfo<'dashboards-analytics', '/dashboards/analytics', Record<never, never>, Record<never, never>>,
    'forgot-password': RouteRecordInfo<'forgot-password', '/forgot-password', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'not-authorized': RouteRecordInfo<'not-authorized', '/not-authorized', Record<never, never>, Record<never, never>>,
    'pages-faq': RouteRecordInfo<'pages-faq', '/pages/faq', Record<never, never>, Record<never, never>>,
    'pages-pricing': RouteRecordInfo<'pages-pricing', '/pages/pricing', Record<never, never>, Record<never, never>>,
    'pages-user-profile-tab': RouteRecordInfo<'pages-user-profile-tab', '/pages/user-profile/:tab', { tab: ParamValue<true> }, { tab: ParamValue<false> }>,
    'register': RouteRecordInfo<'register', '/register', Record<never, never>, Record<never, never>>,
    'reset-password': RouteRecordInfo<'reset-password', '/reset-password', Record<never, never>, Record<never, never>>,
    'verify-email': RouteRecordInfo<'verify-email', '/verify-email', Record<never, never>, Record<never, never>>,
  }
}

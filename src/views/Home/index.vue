<template>
  <div class="">
    {{ t('common.home') }}
    {{ $t('common.home') }}
    <a href="javascript:;" @click="toggleLocale('en')">切换语言</a>
  </div>
</template>

<script setup lang="ts" name="">
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useLocale } from '/@/locales/useLocale';
  import { LocaleType } from '../../locales/config';
  const { t } = useI18n();
  const { changeLocale, getLocale } = useLocale();
  const lang = getLocale.value;
  async function toggleLocale(lang: LocaleType | string) {
    await changeLocale(lang as LocaleType);
  }
</script>

<template>
  <div class="">
    {{ t('common.home') }}
    {{ $t('common.home') }}
    <a href="javascript:;" class="w-100px h-40px block" @click="toggleLocale('en')">切换英文</a>
    <a href="javascript:;" class="w-100px h-40px block" @click="toggleLocale('zh_CN')">切换中文</a>
  </div>
</template>

<script setup lang="ts" name="">
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useLocale } from '/@/locales/useLocale';
  import { LocaleType } from '../../locales/config';
  const { t } = useI18n();
  const { changeLocale, getLocale } = useLocale();
  const lang = getLocale.value;
  console.log(t('common.home'));
  async function toggleLocale(lang: LocaleType | string) {
    await changeLocale(lang as LocaleType);
  }
</script>

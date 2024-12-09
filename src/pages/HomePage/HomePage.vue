<template>
  <div class="card flex flex-col justify-center flex-wrap gap-4">
    <Button label="Primary" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warn" severity="warn" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />
    <Button label="Contrast" severity="contrast" />

    <div class="text-red-500 font-bold">Si ves este texto rojo, Tailwind está funcionando.</div>
  </div>

  <div class="card flex flex-wrap justify-center gap-2">
    <InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
    <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
    <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
    <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
  </div>
</template>

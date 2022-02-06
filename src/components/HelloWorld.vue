<template>
    <h2>Hello World</h2>
</template>

<style lang="scss" scoped>
h2 {
    color: $error;

    @include respond-to(xs) {
        color: green;
    }
}
</style>

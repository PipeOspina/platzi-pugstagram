<script lang="typescript">
    import Profile from './Profile.svelte';
    import Stories from './Stories.svelte';
    import Footer from './Footer.svelte';

    export let nickname: string = '';
    export let name: string = '';
</script>

<style>
  .Sidebar {
    position: relative;
    padding: 4.5em 0 0 0;
  }
  .container {
    position: fixed;
  }
</style>

<div class="Sidebar">
    <div class="container">
        <Profile {nickname} {name} />
        <Stories />
        <Footer />
    </div>
</div>

<script lang="typescript">
  import { fade } from 'svelte/transition';
    import Comments from './Comments.svelte';
    import Modal from './Modal.svelte';
    import Share from './Share.svelte';
    import { likeCount } from '../store/store';

    export let username: string;
    export let location: string;
    export let photo: string;
    export let postComment: string;
    export let comments: any[];
    export let avatar: string;
    export let like: boolean;
    export let bookmark: boolean;

    let isModal = false;

    const handleModal = () => {
      isModal = !isModal;
    }

    const handleLike = () => {
      if (like) {
        likeCount.update((current) => current - 1)
      } else {
        likeCount.update((current) => current + 1)
      }
      like = !like;
    }
</script>

<style>
  .Card {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    margin: 0 0 2em 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .user img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .user h2 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 0 1em;
    color: black;
  }
  .user h2 span {
    display: block;
    font-size: 12px;
    font-weight: normal;
    color: rgba(38, 38, 38, 0.7);
  }
  .photo {
    padding: 0;
    margin: 0;
  }
  .photo img {
    width: 100%;
    height: auto;
  }
  .photo figure {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .settings i {
    cursor: pointer;
  }
  .icons {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icons i {
    margin: 0 1em 0 0;
    cursor: pointer;
    font-size: 20px;
  }
  .icons i:last-child {
    margin: 0;
  }
  .description {
    padding: 0 1em 1em 1em;
  }
  .description h3 {
    font-size: 14px;
    font-weight: bold;
    color: black;
  }
  .description span {
    font-size: 14px;
  }
  .active-like {
    color: #bc1888;
    animation: bounce linear 0.8s;
    animation-iteration-count: 1;
    transform-origin: 20% 20%;
  }
  .active-bookmark {
    color: #f09433;
  }
  @keyframes bounce {
    0% {
      transform: translate(0px, 0px);
    }
    15% {
      transform: translate(0px, -25px);
    }
    30% {
      transform: translate(0px, 0px);
    }
    45% {
      transform: translate(0px, -15px);
    }
    60% {
      transform: translate(0px, 0px);
    }
    75% {
      transform: translate(0px, -5px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
</style>

<div class="Card">
  {#if isModal}
    <div transition:fade>
      <Modal on:click={handleModal}>
        <Share on:click={handleModal} />
      </Modal>
    </div>
  {/if}
    <div class="container">
        <div class="header">
            <div class="user">
                <img src={avatar} alt={username}>
                <h2>
                    {username}
                    <span>{location}</span>
                </h2>
            </div>
            <div class="settings">
                <i class="fas fa-ellipsis-h" />
            </div>
        </div>
        <div class="photo">
            <figure on:dblclick="{handleLike}">
                <img src={photo} alt={username}>
            </figure>
        </div>
        <div class="icons">
            <div class="firts">
                <i
                  class="fas fa-heart"
                  on:click="{handleLike}"
                  class:active-like={like}
                />
                <i class="fas fa-paper-plane" on:click={handleModal} />
            </div>
            <div class="second">
                <i
                  class="fas fa-bookmark"
                  on:click="{() => (bookmark = !bookmark)}"
                  class:active-bookmark={bookmark}
                />
            </div>
        </div>
        <div class="description">
            <h3>{username}</h3>
            <span>{postComment}</span>
        </div>
        <Comments {comments} />
    </div>
</div>
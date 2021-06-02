<script lang="typescript">
  export let nickname: string;
  export let name: string;
</script>

<style>
  .content {
    display: flex;
    align-items: center;
  }
  .avatar img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .info {
    margin: 0 0 0 0.5em;
  }
  .info h2 {
    font-size: 14px;
    color: black;
    margin: 0;
    padding: 0;
  }
  .info span {
    font-size: 12px;
    font-weight: normal;
  }
</style>

<div class="Profile">
    <div class="content">
        <div class="avatar">
            <img src="https://arepa.s3.amazonaws.com/oscar.png" alt="Oscar Avatar" />
        </div>
        <div class="info">
            <h2>{nickname}</h2>
            <span>{name}</span>
        </div>
    </div>
</div>
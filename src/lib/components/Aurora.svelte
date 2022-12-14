<div class="aurora-outer">
  <div class="aurora-inner">
    <h1 class="title"><slot>Title goes in slot</slot></h1>
  </div>
</div>

<style>
  .aurora-outer {
    background: linear-gradient(
      45deg,
      var(--light) 0%,
      var(--medium) 49%,
      var(--dark) 82%
    );
    background-size: 200%;
    animation: aurora infinite;
    animation-duration: var(--duration, 16s);
  }

  .aurora-inner {
    background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15));
    background-size: 200%;
    animation: aurora infinite;
    animation-duration: var(--duration, 16s);
  }

  @keyframes aurora {
    0% {
      background-position: left top;
    }
    25% {
      background-position: right top;
    }
    50% {
      background-position: right bottom;
    }
    75% {
      background-position: left bottom;
    }
    100% {
      background-position: left top;
    }
  }

  div {
    display: grid;
    align-items: center;
  }

  .title {
    padding-block: var(--padding, var(--spacing));
    font-size: calc(var(--spacing) * 3);
    text-align: center;
    color: var(--color, var(--white));
  }
</style>

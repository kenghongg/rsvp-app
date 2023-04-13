<template>
  <v-container>
    <div class="prewed-container">
      <!-- <div class="prewed-imgs w-100">
        <div class="img-hori">
          <img src="../assets/img/prewed-img-01.png" alt="" />
        </div>
      </div> -->

      <div class="prewed-txt">
        <span class="txt-cn">伴你長久 長長久久</span>
        <div class="prewed-sub-txt">
          /&nbsp;&nbsp; Forever and always with my <br />favorite person by my
          side ❤️ &nbsp;&nbsp;/
        </div>
        <div class="prewed-rounded-icon">
          <v-icon>mdi-circle</v-icon>
        </div>
      </div>

      <!-- <div class="proposal-txt">
        <div class="d-flex align-center">
          <strong>2022・10・13</strong>
          <span class="ml-1"
            ><img
              src="../assets/img/ring-wedding.gif"
              alt=""
              style="width: 39px"
          /></span>
        </div>
        <div class="proposal-sub-txt txt-cn">
          <v-icon>mdi-calendar-month</v-icon>&nbsp;&nbsp;在一起的第 89 个月
        </div>
        <div class="proposal-sub-txt">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp; On the
          89<sup>th</sup> Monthsary
        </div>
      </div>
      <div class="w-100 d-flex mt-4 align-center">
        <v-divider :thickness="4" color="#784705"></v-divider>
        <div style="font-weight: 900; color: #efe9e2">
          &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <v-divider :thickness="4" color="#784705"></v-divider>
      </div> -->
    </div>
  </v-container>
</template>

<script setup>
//
</script>

<style lang="scss">
.proposal-txt {
  margin-top: -32px;
  color: #3b3b3b;

  .proposal-sub-txt {
    font-size: 0.85rem;
  }

  .proposal-sub-txt.txt-cn {
    font-size: 1rem;
    margin-bottom: 8px;
    margin-top: 4px;
  }
}

.prewed-imgs {
  padding-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  .img-hori {
    width: 100%;
  }

  .img-ver {
    width: calc(50% - 6px);
  }

  img {
    display: block;
    width: 100%;
    /* padding: 12px; */
  }
}
.prewed-container {
  width: 100%;
  max-width: 400px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;

  .prewed-txt {
    text-align: left;
    font-size: 1.2rem;
    padding-left: 30px;
    position: relative;
    /* font-weight: bold; */
  }

  .prewed-sub-txt {
    font-size: 0.8rem;
    text-align: left;
    margin-top: 8px;
  }

  .prewed-rounded-icon {
    /* color: #d2cabf; */
    color: #cba58e;
    font-size: 50px;
    position: absolute;
    top: -24px;
    left: -12px;
    opacity: 0.4;
  }
}
</style>

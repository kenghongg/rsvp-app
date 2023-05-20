<template>
  <v-container>
    <div class="couple-container">
      <div class="couple-content">
        <div class="couple-img">
          <img
            src="../assets/img/couple-groom-img.png"
            style="background: #2d2d2d; border-radius: 50%"
          />
        </div>
        <div class="couple-details">
          <div class="txt-cn"><i>新郎</i> | 景航</div>
          <div class="txt-en"><i>The Groom</i> - Keng Hong</div>
        </div>
        <div class="couple-contact">
          <v-btn
            rounded="pill"
            color="#b0764f"
            prepend-icon="mdi-whatsapp"
            style="color: white"
            href="https://wa.me/6582275922"
            target="_blank"
            size="small"
            >/ Contact Him</v-btn
          >
        </div>
      </div>
      <div class="couple-content">
        <div class="couple-img">
          <img
            src="../assets/img/couple-bride-img.png"
            style="background: #2d2d2d; border-radius: 50%"
          />
        </div>
        <div class="couple-details">
          <div class="txt-cn"><i>新娘</i> | 祖儿</div>
          <div class="txt-en"><i>The Bride</i> - Joey</div>
        </div>
        <div class="couple-contact">
          <v-btn
            rounded="pill"
            color="#b0764f"
            prepend-icon="mdi-whatsapp"
            style="color: white"
            href="https://wa.me/6582275922"
            target="_blank"
            size="small"
            >/ Contact Her</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss">
.couple-container {
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 400px;
  margin: auto;
}

.couple-contact {
  margin-top: 16px;
}

.couple-img {
  padding: 6px;
  background: rgba(175, 117, 79, 0.5);
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  img {
    display: block;
    width: 100%;
  }
}

.couple-details {
  text-align: center;
  margin-top: 8px;

  i {
    font-size: 80%;
  }

  .txt-cn {
    font-size: 1.35rem;
    font-weight: 400;
  }

  .txt-en {
    margin-top: 8px;
    font-size: 0.8rem;
  }
}

.couple-contact {
  text-align: center;
}
</style>

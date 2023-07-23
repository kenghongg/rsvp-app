<template>
  <v-container>
    <div class="form-wrap">
      <v-container>
        <!-- <v-snackbar
            v-model="snackbar.show"
            :position="snackbar.position"
            :color="snackbar.color"
            >{{ snackbar.text }}</v-snackbar
          > -->
        <v-responsive class="d-flex align-center">
          <form v-if="formVisible" @submit.prevent="submit" class="rsvp-form">
            <v-text-field
              v-model="registeredBy.value.value"
              :error-messages="registeredBy.errorMessage.value"
              label="姓名 | Name"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              color="#b0764f"
            ></v-text-field>

            <v-text-field
              v-model="phone.value.value"
              :error-messages="phone.errorMessage.value"
              label="电话号码 | Phone Number"
              prepend-inner-icon="mdi-phone"
              variant="outlined"
              color="#b0764f"
            ></v-text-field>

            <v-radio-group
              v-model="radioAttend.value"
              :error-messages="radioAttend.errorMessage.value"
              style="margin-bottom: -12px"
            >
              <v-radio
                label="出席 | Attending"
                value="yes"
                color="#b0764f"
              ></v-radio>
              <v-radio
                label="无法出席 | Not Attending"
                value="no"
                color="#b0764f"
              ></v-radio>
            </v-radio-group>

            <div v-if="radioAttend.value === 'yes'">
              <div v-if="guestList.length > 0" class="guest-list-container">
                <div class="added-guest-title">嘉宾 | Guest(s)</div>
                <v-divider></v-divider>
                <v-list>
                  <v-list-item v-for="(guest, index) in guestList" :key="index">
                    <v-list-item-content class="d-flex align-content-center">
                      <span class="mr-2 w-25">#{{ index + 1 }}</span>
                      <v-avatar color="brown-darken-4">
                        <!-- <span>{{ guest.slice(0, 2) }}</span> -->
                        <span>{{
                          guest
                            .split(" ")
                            .map((word) => word.charAt(0))
                            .join("")
                            .slice(0, 2)
                        }}</span>
                      </v-avatar>
                      <span class="w-100 pl-2 align-self-center">{{
                        guest
                      }}</span>

                      <v-list-item-action>
                        <v-icon @click="deleteGuest(index)">mdi-close</v-icon>
                      </v-list-item-action>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </div>

              <v-dialog v-model="dialog" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-if="radioAttend.value === 'yes'"
                    prepend-icon="mdi-plus"
                    v-bind="props"
                    variant="outlined"
                    color="#b0764f"
                    class="text-right"
                    size="large"
                    style="border-radius: 60px"
                    >添加嘉宾 | Add Guest</v-btn
                  >
                </template>

                <v-card>
                  <v-container>
                    <v-card-text>
                      <v-text-field
                        label="嘉賓姓名 | Guest Name"
                        v-model="newGuestName"
                        required
                        prepend-inner-icon="mdi-account"
                        variant="outlined"
                        color="#b0764f"
                      ></v-text-field>
                    </v-card-text>
                    <div style="margin-top: -12px">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="grey-darken-1"
                          variant="text"
                          @click="dialog = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          color="brown-darken-4"
                          variant="flat"
                          style="border-radius: 60px"
                          @click="addGuest"
                        >
                          确定 | Conlanfirm
                        </v-btn>
                      </v-card-actions>
                    </div>
                  </v-container>
                </v-card>
              </v-dialog>
            </div>

            <!-- <div style="padding: 12px"></div> -->
            <!-- <v-btn @click="handleReset"> clear </v-btn> -->

            <v-btn
              variant="flat"
              color="#b0764f"
              text-color="white"
              :style="{ color: 'white', borderRadius: '80px' }"
              append-icon="mdi-send"
              size="x-large"
              class="d-flex justify-content-end w-100 mt-3"
              type="submit"
            >
              提交 | Submit
            </v-btn>
            <!-- <div style="height: 56px"></div> -->
          </form>

          <!-- <div class="success-msg" v-else>success message</div> -->
          <div class="success-msg" v-else>
            <div class="thankyou-msg">
              <div class="txt-cn thank">感</div>
              <div class="txt-en thank">THANK YOU</div>
              <div class="txt-cn thank">谢</div>
            </div>

            <div v-if="formAttending" class="message-point">
              <v-divider
                :thickness="6"
                color="#784705"
                style="margin: 12px 0"
              ></v-divider>
              <div class="txt-cn">開開心心地來赴約吧～</div>
              <div class="txt-cn">期待和你見面！</div>

              <div class="txt-en mt-2">
                We are so excited &amp; can't wait to see you!
              </div>

              <v-btn
                @click.prevent="addToCalendar"
                variant="flat"
                color="#b0764f"
                text-color="white"
                :style="{ color: 'white', borderRadius: '80px' }"
                append-icon="mdi-calendar-plus"
                class="d-flex justify-content-center mt-3 w-100"
              >
                加入日曆 | Add to Calendar
              </v-btn>
            </div>

            <div v-else class="message-point">
              <v-divider
                :thickness="6"
                color="#784705"
                style="margin: 12px 0"
              ></v-divider>
              <div class="txt-cn">你的㊗️福，我們已經收到啦～</div>
              <div class="txt-cn">我們會想念你的 ❤️</div>

              <div class="txt-en mt-2">
                We have received your blessings <br />&amp; we will miss you! <br/>Take care!
              </div>
            </div>
          </div>
          <v-snackbar
            v-model="snackbar.show"
            :position="snackbar.position"
            :color="snackbar.color"
            >{{ snackbar.text }}</v-snackbar
          >
        </v-responsive>
      </v-container>
    </div>
  </v-container>

  <v-divider></v-divider>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import db from "@/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const guestList = ref([]);

export default {
  data() {
    return {
      dialog: false,
      newGuestName: "",
      guestList: guestList,
      isAttending: "",
      showSuccessMsg: false,
    };
  },
  methods: {
    addGuest() {
      if (this.newGuestName) {
        this.guestList.push(this.newGuestName);
        this.newGuestName = "";
        this.dialog = false;
      }
    },
    deleteGuest(index) {
      this.guestList.splice(index, 1);
    },
    notAttending() {
      this.guestList = [];
    },
    resetForm() {
      // Reset form fields here
      this.registeredBy.value.value = "";
      this.phone.value.value = "";
      this.radioAttend.value = "";
      this.guestList = [];
    },
    addToCalendar() {
      const startDate = new Date("2023-04-01T18:00:00"); // Replace with your start date and time
      const endDate = new Date("2023-04-01T22:30:00"); // Replace with your end date and time
      const title = "Keng Hong and Joey | Wedding at OUG Jade Restaurant"; // Replace with your event title
      const description =
        "Join us for a night of celebration at our wedding dinner! We can't wait to share this special moment with you and honor our families and heritage!"; // Replace with your event description
      const location =
        "OUG Jade Restaurant, 2, Jalan Hujan Rahmat, Taman Overseas Union, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia"; // Replace with your event location
      const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${startDate.toISOString()}/${endDate.toISOString()}&location=${encodeURIComponent(
        location
      )}&text=${encodeURIComponent(title)}&details=${encodeURIComponent(
        description
      )}`;

      // Detect the user's operating system
      const userAgent = window.navigator.userAgent;
      const isMac = /Macintosh/.test(userAgent);
      const isWindows = /Windows/.test(userAgent);

      // Open the appropriate calendar application
      if (isMac) {
        window.location.href = `ical://event?start=${startDate.toISOString()}&end=${endDate.toISOString()}&location=${encodeURIComponent(
          location
        )}&summary=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`;
      } else if (isWindows) {
        window.open(
          `outlookcal:${startDate.toISOString()} /${endDate.toISOString()} /${title} /${description} /${location}`
        );
      } else {
        window.open(calendarUrl, "_blank");
      }
    },
  },
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        registeredBy(value) {
          if (value?.length >= 2) return true;
          return "Name needs to be at least 2 characters.";
        },
        phone(value) {
          if (value?.length > 7 && /[0-9-]+/.test(value)) return true;
          return "Phone number needs to be at least 8 digits.";
        },
        radioAttend(value) {
          if (value) return true;
          return "Select whether you are attending.";
        },
      },
    });

    const registeredBy = useField("registeredBy");
    const phone = useField("phone");
    const radioAttend = useField("radioAttend");
    const formVisible = ref(true);
    const formAttending = ref(false);

    const snackbar = ref({
      show: false,
      color: "",
      text: "",
    });

    const showSnackbar = (text, color) => {
      snackbar.value.text = text;
      snackbar.value.color = color;
      snackbar.value.show = true;
      snackbar.value.position = "top-center";
    };

    const submit = handleSubmit(async (values) => {
      const now = new Date();
      values.submissionTime = now.toISOString();

      // Split the guestList string into an array of guests
      const allGuests = guestList.value.join(", ");
      const guests = allGuests.split(",").map((guest) => guest.trim());

      if (allGuests.length > 0) {
        // Create a separate submission for each guest
        // console.log("guestmore than 0")
        for (let guest of guests) {
          const submission = { ...values };
          submission.name = guest;
          submission.tableNo = 0;
          await addSubmission(submission);
        }

        const submission = { ...values };
        submission.name = submission.registeredBy;
        submission.tableNo = 0;
        await addSubmission(submission);
      } else {
        // console.log("guest nononononono more than 0")
        // No guests specified, use the name as the guest
        const submission = { ...values };
        submission.name = submission.registeredBy;
        submission.tableNo = 0;
        await addSubmission(submission);
      }

      handleReset();
      if (values.radioAttend === "yes") {
        formAttending.value = true;
      }
      formVisible.value = false;
    });

    async function addSubmission(submission) {
      try {
        await addDoc(collection(db, "submissions"), submission);
        console.log(submission);
        console.log("Submission added to Firebase!");
        showSnackbar("Form submitted successfully", "success");
      } catch (error) {
        console.error("Error adding submission to Firebase: ", error);
        showSnackbar(error, "error");
      }
    }

    // const submit = handleSubmit(async (values) => {
    //   const now = new Date();
    //   values.submissionTime = now.toISOString();
    //   values.guestList = guestList.value.join(", ");

    //   try {
    //     await addDoc(collection(db, "submissions"), values);
    //     console.log("Submission added to Firebase!");
    //     showSnackbar("Form submitted successfully", "success");
    //     handleReset();
    //     if (values.radioAttend == "yes") {
    //       formAttending.value = true;
    //     }
    //     // console.log(values.radioAttend);

    //     formVisible.value = false;
    //   } catch (error) {
    //     console.error("Error adding submission to Firebase: ", error);
    //     showSnackbar("Form submission failed", "error");
    //   }
    // });

    return {
      registeredBy,
      phone,
      radioAttend,
      formVisible,
      formAttending,
      snackbar,
      showSnackbar,
      // formSnackbar,

      submit,
      handleReset,
    };
  },
};
</script>

<style lang="scss">
body {
  background: linear-gradient(180deg, #ffffff 100%, #eaf1f9 0%);
}

.form-wrap {
  max-width: 400px;
  margin: auto;
}

.rsvp-form {
  padding-top: 16px;

  .v-field__outline__start.v-locale--is-ltr,
  .v-field__outline__start {
    border-radius: 120px 0 0 120px !important;
    padding-right: 40px;
  }

  .v-field__outline__end.v-locale--is-ltr,
  .v-field__outline__end {
    border-radius: 0 120px 120px 0 !important;
  }

  .guest-list-container {
    // background: salmon;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 1px solid #cdcdcd;
    padding: 4px 0px;

    .v-list {
      background: transparent;
    }
  }

  .added-guest-title {
    padding: 8px 16px;
    font-weight: 600;
  }

  .v-input__control {
    border-radius: 12px;
  }

  .v-field__outline {
    border: 0;
  }

  .v-field__overlay {
    background: #ffffff !important;
  }

  .btn-submit .v-btn__content {
    color: #ffffff;
  }

  .attendance-radio-group {
    // background: salmon;
    .attendance-radio {
      width: 50%;
      padding-right: 12px;

      .v-selection-control__input {
        // opacity: 0;
        // position: absolute;
      }

      .v-label {
        width: 100% !important;
      }

      &__yes {
        background: rgb(205, 255, 205);

        &.v-selection-control--dirty {
          background: green;
        }
      }

      &__no {
        background: rgb(241, 207, 203);

        &.v-selection-control--dirty {
          background: salmon;
        }
      }
    }
  }
}

.success-msg {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #784704;
  align-items: center;
  text-align: center;

  /* width: 350px;
  height: 350px;
  background: #efe9e2;
  border-radius: 50%;
  padding: 8% 12% 10%; */
  /* line-height:1.5; */

  .thankyou-msg {
    width: 130px;
    height: 130px;
    display: flex;
    /* background: rgba(203, 165, 142, 1); */
    /* background: rgb(176, 118, 79); */
    /* color: #f5f5f5; */
    border: 2px solid rgb(176, 118, 79);
    font-weight: 600;
    border-radius: 50%;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    /* box-shadow: 0px 4px 12px #000000; */
  }

  .txt-en.thank {
    font-size: 1rem;
    line-height: 1;
    margin-top: 4px;
  }

  .txt-cn.thank {
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 1;
  }

  .message-point {
    .txt-en {
      font-size: 0.8rem;
    }

    .txt-cn {
      font-size: 1rem;
      font-weight: 400;
    }
  }
}

.form-wrap {
  // border: 2px solid #999999;
  margin-bottom: 60px;
  // border-radius: 24px;
  // padding:24px;
}

/* .top-snackbar {
  top: 0;
} */
</style>

<template>
  <v-container>
    <v-responsive class="d-flex align-center fill-height">
      <form @submit.prevent="submit" class="rsvp-form">
        <v-text-field
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
          label="姓名 | Name"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          color="#043b85"
        ></v-text-field>

        <v-text-field
          v-model="phone.value.value"
          :error-messages="phone.errorMessage.value"
          label="电话号码 | Phone Number"
          prepend-inner-icon="mdi-phone"
          variant="outlined"
          color="#043b85"
        ></v-text-field>

        <!-- <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="电邮 | E-mail"
        ></v-text-field> -->

        <!-- <v-radio-group
          class="attendance-radio-group"
          inline
          v-model="attendance.value.value"
          :error-messages="attendance.errorMessage.value"
        >
          <v-radio
            label="出席 | Attending"
            value="Attending"
            class="attendance-radio attendance-radio__yes"
          ></v-radio>
          <v-radio
            label="缺席 | Not attending"
            value="Not attending"
            class="attendance-radio attendance-radio__no"
            @click="notAttending"
          ></v-radio>
        </v-radio-group> -->

        <div>
          <div v-if="guestList.length > 0" class="guest-list-container">
            <div class="added-guest-title">嘉宾 | Guest(s)</div>
            <v-divider></v-divider>
            <v-list>
              <v-list-item v-for="(guest, index) in guestList" :key="index">
                <v-list-item-content class="d-flex align-content-center">
                  <!-- <span class="mr-2">#{{index + 1}}</span> -->
                  <v-avatar color="blue">
                    <span>{{ guest.slice(0, 2) }}</span>
                  </v-avatar>
                  <span class="w-100 pl-2 align-self-center">{{ guest }}</span>

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
                prepend-icon="mdi-plus"
                v-bind="props"
                variant="outlined"
                color="#043b85"
                class="text-right"
                size="large"
                >添加嘉宾 | Add Guest</v-btn
              >
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="嘉賓姓名 | Guest Name"
                        v-model="newGuestName"
                        required
                        prepend-inner-icon="mdi-account"
                        variant="outlined"
                        color="#043b85"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="grey-darken-1"
                  variant="text"
                  @click="dialog = false"
                >
                  Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="flat" @click="addGuest">
                  确定 | Conlanfirm
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <!-- <template v-if="attendance.value.value === 'Attending'">
          <div
            class="d-flex mb-2"
            v-for="(guest, index) in guestList"
            :key="index"
            :rules="[(v) => !!v || 'Guest name is required']"
          >
            <v-text-field
              v-model="guest.guestName"
              :label="`#${index + 1} 嘉賓姓名 | Guest Name`"
            ></v-text-field>
            <v-btn
              class="ml-4 mt-2 mr-1"
              icon="mdi-close"
              size="x-small"
              @click="removeGuestList(index)"
            ></v-btn>
          </div>

          <v-btn prepend-icon="mdi-plus" @click="addGuestList"
            >添加嘉宾 | Add Guest</v-btn
          >
        </template> -->

        <div style="padding: 10px"></div>

        <v-btn
          variant="flat"
          color="#043b85"
          type="submit"
          text-color="white"
          :style="{ color: 'white' }"
          append-icon="mdi-send"
          size="x-large"
          class="d-flex justify-content-end w-100"
        >
          提交 | Submit
        </v-btn>

        <!-- <v-btn @click="handleReset"> clear </v-btn> -->
      </form>
    </v-responsive>
  </v-container>

  <v-divider></v-divider>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { ref } from "vue";

export const guestList = ref([]);

export default {
  data() {
    return {
      dialog: false,
      newGuestName: "",
      guestList: guestList,
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
  },
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;
          return "Name needs to be at least 2 characters.";
        },
        phone(value) {
          if (value?.length > 7 && /[0-9-]+/.test(value)) return true;
          return "Phone number needs to be at least 8 digits.";
        },
        // email(value) {
        //   if (/^[a-zA-Z0-9.-]+@[a-zA-Z.-]+\.[a-zA-Z]+$/.test(value))
        //     return true;
        //   return "Must be a valid e-mail.";
        // },
        attendance(value) {
          if (value) return true;
          return "Select attendance.";
        },
      },
    });

    const name = useField("name");
    const phone = useField("phone");
    // const email = useField("email");
    const attendance = useField("attendance");

    // const guestList = ref([]);

    // const submit = handleSubmit((values) => {
    //   if (attendance.value.value === "Attending") {
    //     const guestNames = guestList.value.map((guest) => guest.name);
    //     values.guestNames = guestNames;
    //   }
    //   alert(JSON.stringify(values, null, 2));
    // });

    const submit = handleSubmit((values) => {
      const now = new Date();
      values.submissionTime = now.toISOString();
      alert(JSON.stringify({ ...values, guestList: guestList.value }, null, 2));
    });

    return {
      name,
      phone,
      // email,
      attendance,
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

.rsvp-form {
  padding-top: 16px;

  .guest-list-container {
    // background: salmon;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 1px solid #999999;
    padding: 4px 0px;
  }

  .added-guest-title {
    // background: #eaf1f9;
    padding: 8px 16px;
    font-weight: 600;
  }

  .v-input__control {
    // background: #eaf1f9;
    border-radius: 12px;
  }

  // .v-text-field--outlined > fieldset {
  //   border-color: rgba(192, 0, 250, 0.986) !important;
  // }

  .v-field__outline {
    // background:salmon;
    // border-bottom: 0;
    border: 0;
  }

  .v-field__overlay {
    // opacity: 0.5 !important;
    background: #ffffff !important;
  }

  .btn-submit .v-btn__content {
    color: #ffffff;
  }

  .v-field--focused {
    // background: #e9ffff;
  }
  .v-input__details {
    // margin-bottom:24px;
  }

  .v-text-field {
  }

  .v-field__field {
    // background: salmon;
    // border-radius: 12px;
    // background: #EAF1F9;
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
        // background: blue !important;
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
</style>

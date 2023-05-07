<template>
  <v-container>
    <div class="form-wrap">
      <v-container>
        <v-responsive class="d-flex align-center">
          <form @submit.prevent="submit" class="rsvp-form">
            <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value" label="姓名 | Name"
              prepend-inner-icon="mdi-account" variant="outlined" color="#784705"></v-text-field>

            <v-text-field v-model="phone.value.value" :error-messages="phone.errorMessage.value"
              label="电话号码 | Phone Number" prepend-inner-icon="mdi-phone" variant="outlined"
              color="#784705"></v-text-field>

            <v-radio-group v-model="radioAttend.value" :error-messages="radioAttend.errorMessage.value"
              style="margin-bottom: -12px">
              <v-radio label="出席 | Attending" value="yes" color="#784705"></v-radio>
              <v-radio label="无法出席 | Not Attending" value="no" color="#784705"></v-radio>
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
                  <v-btn v-if="radioAttend.value === 'yes'" prepend-icon="mdi-plus" v-bind="props" variant="outlined"
                    color="#784705" class="text-right" size="large">添加嘉宾 | Add Guest</v-btn>
                </template>

                <v-card>
                  <v-container>
                    <v-card-text>
                      <v-text-field label="嘉賓姓名 | Guest Name" v-model="newGuestName" required
                        prepend-inner-icon="mdi-account" variant="outlined" color="#784705"></v-text-field>
                    </v-card-text>
                    <div style="margin-top: -12px">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="grey-darken-1" variant="text" @click="dialog = false">
                          Close
                        </v-btn>
                        <v-btn color="brown-darken-4" variant="flat" @click="addGuest">
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

            <v-btn variant="flat" color="#784705" text-color="white" :style="{ color: 'white' }" append-icon="mdi-send"
              size="x-large" class="d-flex justify-content-end w-100 mt-3" type="submit">
              提交 | Submit
            </v-btn>
            <!-- <div style="height: 56px"></div> -->
          </form>

          <v-snackbar v-model="snackbar.show" position="top" :color="snackbar.color">{{ snackbar.text }}</v-snackbar>

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
import { collection, addDoc, getDocs } from 'firebase/firestore'

export const guestList = ref([]);

export default {
  data() {
    return {
      dialog: false,
      newGuestName: "",
      guestList: guestList,
      isAttending: "",
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
      this.name.value.value = '';
      this.phone.value.value = '';
      this.radioAttend.value = '';
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
        radioAttend(value) {
          if (value) return true;
          return "Select whether you are attending.";
        },
      },
    });

    const name = useField("name");
    const phone = useField("phone");
    const radioAttend = useField("radioAttend");

    const snackbar = ref({
      show: false,
      color: '',
      text: ''
    });

    const showSnackbar = (text, color) => {
      snackbar.value.text = text;
      snackbar.value.color = color;
      snackbar.value.show = true;
    };

    const submit = handleSubmit(async (values) => {
      const now = new Date();
      values.submissionTime = now.toISOString();
      values.guestList = guestList.value.join(', ');

      try {
        await addDoc(collection(db, "submissions"), values);
        console.log("Submission added to Firebase!");
        showSnackbar('Form submitted successfully', 'success');
        handleReset();
      } catch (error) {
        console.error("Error adding submission to Firebase: ", error);
        showSnackbar('Form submission failed', 'error');
      }
    });

    return {
      name,
      phone,
      radioAttend,
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

.rsvp-form {
  padding-top: 16px;

  .guest-list-container {
    // background: salmon;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 1px solid #999999;
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

.form-wrap {
  // border: 2px solid #999999;
  margin-bottom: 60px;
  // border-radius: 24px;
  // padding:24px;
}
</style>

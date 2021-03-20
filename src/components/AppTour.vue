<template></template>
<script>
export default {
  data() {
    return {
      steps: [
        {
          attachTo: {
            element: '[data-v-step="1"]',
            on: "bottom",
          },
          title: "This is a title",
          text: "Test",
        },
        {
          attachTo: {
            element: '[data-v-step="2"]',
            on: "bottom",
          },
          title: "This is a title 2",
          text: "Test",
        },
        {
          attachTo: {
            element: '[data-v-step="3"]',
            on: "bottom",
          },
          title: "This is a title 3",
          text: "Test",
          buttons: [
            { 
              label: "Next", 
              text: "Next", 
              action() { 
                if (!document.querySelector('[data-v-step="4"]')) {
                  document.querySelector('[data-v-step="3"]').click()
                  setTimeout(()=>{
                    this.next()
                  }, 100)
                } else {
                  this.next()
                }
              } 
            }
          ]
        },
        {
          attachTo: {
            element: '[data-v-step="4"]',
            on: "left",
          },
          title: "This is a title 4",
          text: "Test",
        },
        {
          attachTo: {
            element: '[data-v-step="5"]',
            on: "left",
          },
          title: "This is a title 5",
          text: "Test",
        },
        {
          text: "Completed",
        },
      ],
    };
  },

  computed: {
    compSteps() {
      let buttons = [];
      const next_btn = { label: "Next", text: "Next", action() { return this.next() } };
      const pre_btn = { label: "Previous", text: "Previous", action() { return this.back() } };
      const skip_btn = { label: "Skip Tour", text: "Skip Tour", action() { return this.cancel() } };
      const finish_btn = { label: "Finish", text: "Finish", action() { return this.cancel() } };

      return this.steps.map((val, i) => {
        // if (val.buttons?.length > 0) return val
        if (i === 0) {
          buttons.push(...[skip_btn, next_btn])
        } else if (i === this.steps.length - 1) {
          buttons.push(...[finish_btn, pre_btn])
        } else {
          buttons.push(...[skip_btn, pre_btn, next_btn])
        }
        
        if (val.buttons?.length > 0) {
          val.buttons.forEach((val2) => {
            const idx = buttons.findIndex(item => item.text === val2.text);
            val.buttons = [...buttons.slice(0, idx), val2, ...buttons.slice(idx + 1)];
          })
          buttons = [];
          return val;
        }

        val.buttons = buttons;
        buttons = [];
        return val;
      })
    },
  },

  created() {
    this.$nextTick(() => {
      const tour = this.$shepherd({
        useModalOverlay: true,
      });

      tour.addSteps(this.compSteps).on('before-show', ()=>{
        if(typeof Shepherd.activeTour.next() !== 'undefined') {
          this.next()
        }
      })
      tour.start();
    });
  },
};
</script>
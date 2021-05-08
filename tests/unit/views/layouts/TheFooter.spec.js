import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TheFooter from '@/views/layouts/TheFooter.vue';

// describe("Form.test.js", () => {
//   let cmp;

//   beforeEach(() => {
//     cmp = shallowMount(Form);
//   });
// });

describe('The Footer', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('Renders "2021"', () => {
    const wrapper = mount(TheFooter, {
      vuetify,

      // propsData: {
      //   copyright: 2021,
      // },
    });

    expect(wrapper.vm.copyright).toBe('2021 - PRESENT');
    // expect(wrapper).toMatchSnapshot();
  });
});

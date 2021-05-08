import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import ErrorNotification from '@/views/layouts/ErrorNotification.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Error Noification', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('It displays "" for errorInfo and "Error message expected Here." for errorMessage.', () => {
    const $store = {
      getters: {
        errorInfo: () => '',
        errorMessage: () => 'Error message expected Here.',
      },
    };

    const wrapper = mount(ErrorNotification, {
      localVue,
      vuetify,
      mocks: {
        $store,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});

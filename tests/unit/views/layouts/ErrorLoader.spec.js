import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import ErrorLoader from '@/views/layouts/ErrorLoader.vue';

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
        isErrorLoading: () => false,
      },
    };

    const wrapper = mount(ErrorLoader, {
      localVue,
      vuetify,
      mocks: {
        $store,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});

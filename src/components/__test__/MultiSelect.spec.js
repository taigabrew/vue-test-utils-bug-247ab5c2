/// <reference types="Jest" />

import { mount } from '@vue/test-utils';
import MultiSelect from '../MultiSelect.vue';

describe(`MultiSelect`, () => {
  it(`emits 'update'`, async () => {
    const options = [
      { id: 'a', name: 'AAA' },
      { id: 'b', name: 'BBB' },
    ];

    const wrapper = mount(MultiSelect, {
      props: { options },
    });

    await wrapper.findAll('input')[0].setValue(true);

    expect(wrapper.emitted()['update:modelValue'][0][0]).toEqual(['a']);

    await wrapper.findAll('input')[1].setValue(true);

    expect(wrapper.emitted()['update:modelValue'][1][0]).toEqual(['a', 'b']);
  });
});

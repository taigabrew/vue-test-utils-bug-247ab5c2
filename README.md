# Vue test utils bug
Sequence of `.setValue(true)` on multiple `input[type="checkbox"]`
is not stacking inputs checked state. It works like inputs are of `type="radio"`

**vue-jest**: 5.0.0-alpha.6
**@vue/test-utils**: 2.0.0-beta.10

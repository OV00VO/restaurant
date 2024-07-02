# patches.py
from allauth.account.forms import SignupForm

class PatchedSignupForm(SignupForm):
    class Meta(SignupForm.Meta):
        private_fields = []

import allauth.account.forms
allauth.account.forms.SignupForm = PatchedSignupForm
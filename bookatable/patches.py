# patches.py
import allauth.account.forms
from allauth.account.forms import SignupForm


class PatchedSignupForm(SignupForm):
    class Meta(SignupForm.Meta):
        private_fields = []


allauth.account.forms.SignupForm = PatchedSignupForm

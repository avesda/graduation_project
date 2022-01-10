from django.shortcuts import render, HttpResponseRedirect
from django import forms

class connectForm(forms.Form):
    address = forms.CharField(min_length=26, max_length=34, label="Address")
    #pwd = forms.CharField(widget=forms.PasswordInput(), label="Password")

globalAddress = "0x000"
globalPwd = "nth"
f = {}
# python manage.py runserver to run django project from cmd

# functions to render the templates in browser
def index(request):
    return render(request, "aggr/index.html", {
        "form": connectForm()
    })

def museum(request):
    return render(request, "aggr/museum.html")

def test(request):
    return render(request, "aggr/test.html")


from django.shortcuts import render
from django import forms

class connectForm(forms.Form):
    address = forms.CharField(min_length=26, max_length=34, label="Address")
    pwd = forms.CharField(widget=forms.PasswordInput(), label="Password")

# python manage.py runserver
def index(request):
    return render(request, "aggr/index.html", {
        "form": connectForm()
    })

def logged(request, address):
    return render(request, 'aggr/logged.html', {
        "address": address
    })

def test(request):
    return render(request, "aggr/test.html")


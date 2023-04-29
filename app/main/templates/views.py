from django.http import HttpResponse, request
from django.contrib import messages, auth
from django.shortcuts import redirect, render 
from django.contrib.auth.models import User
from datetime import date, datetime
from authPage.models import Register
from rest_framework.decorators import api_view
from rest_framework.response import Response



today = datetime.today()

@api_view(['POST'])
def send_otp(request):
    data = request.data

    if data.get('phone_number') is None:
        pass


# check duplicate data (PAN, GST, phone, email)
def duplicate(number, email):
    if(Register.objects.filter(Contact=number).exists() or Register.objects.filter(Email=email).exists()):
        print('email taken')
        # messages.info(request,'email taken')
    else:
        register.save()


# Create your views here.
def register(request):
        # only accept POST request.
    if request.method == "POST":
        try:
           
            # get the required parameters from post request.
            registerUsername = request.POST.get('registerUsername')
            registerEmail = request.POST.get('registerEmail')
            contact = request.POST.get('contact')
            registerConfirmPassword = request.POST.get('registerConfirmPassword')
            order = request.POST.get("order")

            print(order)

            register = Register()

            register.BusinessName = registerUsername
            register.Email = registerEmail
            register.Contact = contact
            register.Password = registerConfirmPassword
            register.Order = order

            duplicate(contact, registerEmail, )




        #     if(Register.objects.filter(Contact=contact).exists() & Register.objects.filter(Email=registerEmail).exists()):
        #         # messages.info(request,'email taken')
        #         print('email taken')
        #         return redirect('register')
            
        #     else:
                
        #         # user = Register.objects(first_name=first_name, last_name=last_name, email=email, password=password1, username=username)
        #         # user.save();
        #         # print('user created')
        #         # return redirect('login')
        #         # return redirect('/')
        #         pass

        except:
            pass
    return render(request, 'auth-register.html')
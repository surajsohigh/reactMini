from django.contrib import admin
# from .models import Address, Product, 
from .models import *

# Register your models here.
admin.site.register(Address)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Shipment)
admin.site.register(Register)
admin.site.register(PickAddress)




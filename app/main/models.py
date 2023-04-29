from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Address(models.Model):
	name=models.CharField(max_length=50)
	address=models.TextField()
	country=models.CharField(max_length=30)
	state=models.CharField(max_length=30)
	city=models.CharField(max_length=30)
	pincode=models.IntegerField()
	phone=models.CharField(max_length=10)
	email=models.EmailField()
	created_by=models.ForeignKey(User, null=True, related_name='address', on_delete=models.CASCADE)
	is_saved=models.BooleanField(default=False)

class PickAddress(models.Model):
	name=models.CharField(max_length=50)
	address=models.TextField()
	country=models.CharField(max_length=30)
	state=models.CharField(max_length=30)
	city=models.CharField(max_length=30)
	pincode=models.IntegerField()
	phone=models.CharField(max_length=10)
	email=models.EmailField()
	created_by=models.ForeignKey(User, null=True, related_name='pickaddress', on_delete=models.CASCADE)
	is_saved=models.BooleanField(default=False)

class Register(models.Model):
	id=models.AutoField(primary_key=True)
	BusinessName=models.CharField(max_length=50)
	FullName=models.CharField(max_length=50)
	UserName=models.CharField(max_length=50, null = True)
	PhoneNumber=models.IntegerField(max_length=10)
	Email=models.EmailField()
	GST=models.CharField(max_length=25)
	PAN=models.CharField(max_length=15)
	Password=models.TextField()

class Product(models.Model):
	name=models.CharField(max_length=30)
	price=models.IntegerField()
	sku=models.CharField(max_length=20)
	hsn=models.CharField(max_length=20)
	weight=models.DecimalField(max_digits=10,decimal_places=2)
	length=models.IntegerField()
	breadth=models.IntegerField()
	height=models.IntegerField()
	created_by=models.ForeignKey(User, related_name='product', on_delete=models.CASCADE)
	is_saved=models.BooleanField(default=False)

class Order(models.Model):
	pickup=models.ForeignKey(Address,on_delete=models.PROTECT,related_name='pickup')
	delivery=models.ForeignKey(Address,on_delete=models.PROTECT,related_name='delivery')
	product=models.ForeignKey(Product,on_delete=models.PROTECT)
	payment_mode=models.CharField(max_length=40)
	amount=models.IntegerField()
	datetime=models.DateTimeField()
	created_by=models.ForeignKey(User, related_name='order', on_delete=models.CASCADE)
	is_pending = models.BooleanField(default = True)

class Shipment(models.Model):
	order=models.ForeignKey(Order,on_delete=models.PROTECT)
	awb=models.CharField(max_length=30)
	courier=models.CharField(max_length=40)
	UserName=models.CharField(max_length=50, null = True)
	pdf = models.FileField(upload_to='labels/', null=True, blank=True)
	created_by=models.ForeignKey(User, related_name='shipment', on_delete=models.CASCADE)

	
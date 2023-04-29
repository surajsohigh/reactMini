# Generated by Django 4.1.7 on 2023-04-18 17:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('address', models.TextField()),
                ('country', models.CharField(max_length=30)),
                ('state', models.CharField(max_length=30)),
                ('city', models.CharField(max_length=30)),
                ('pincode', models.IntegerField()),
                ('phone', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=254)),
                ('is_saved', models.BooleanField(default=False)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='address', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_mode', models.CharField(max_length=40)),
                ('amount', models.IntegerField()),
                ('datetime', models.DateTimeField()),
                ('is_pending', models.BooleanField(default=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order', to=settings.AUTH_USER_MODEL)),
                ('delivery', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='delivery', to='main.address')),
                ('pickup', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='pickup', to='main.address')),
            ],
        ),
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('BusinessName', models.CharField(max_length=50)),
                ('FullName', models.CharField(max_length=50)),
                ('UserName', models.CharField(max_length=50, null=True)),
                ('PhoneNumber', models.IntegerField(max_length=10)),
                ('Email', models.EmailField(max_length=254)),
                ('GST', models.CharField(max_length=25)),
                ('PAN', models.CharField(max_length=15)),
                ('Password', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Shipment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('awb', models.CharField(max_length=30)),
                ('courier', models.CharField(max_length=40)),
                ('UserName', models.CharField(max_length=50, null=True)),
                ('pdf', models.FileField(blank=True, null=True, upload_to='labels/')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shipment', to=settings.AUTH_USER_MODEL)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main.order')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('price', models.IntegerField()),
                ('sku', models.CharField(max_length=20)),
                ('hsn', models.CharField(max_length=20)),
                ('weight', models.DecimalField(decimal_places=2, max_digits=10)),
                ('length', models.IntegerField()),
                ('breadth', models.IntegerField()),
                ('height', models.IntegerField()),
                ('is_saved', models.BooleanField(default=False)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main.product'),
        ),
    ]
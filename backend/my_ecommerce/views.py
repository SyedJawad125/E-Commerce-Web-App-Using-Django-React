from django.shortcuts import render
from . models import Product
from django.shortcuts import render,HttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
#from .blog_serializer import BlogSerializer
from utils.base_authentication import JWTAuthentication
from .my_ecommerce_controller import CategoryController, ContactController, ProductController, OrderController
# from rest_framework.permissions import IsAdminUser
# Create your views here.

product_controller = ProductController()
category_controller = CategoryController()
order_controller = OrderController()
contact_controller = ContactController()


class ProductViews(ModelViewSet):
    authentication_classes = [JWTAuthentication]

    def post_product(self, request):
        return product_controller.create(request)

    def get_product(self, request):
        return product_controller.get_product(request)

    def update_product(self, request):
        return product_controller.update_product(request)

    def delete_product(self, request):
        return product_controller.delete_product(request)


class CategoryViews(ModelViewSet):
    authentication_classes = [JWTAuthentication]

    def post_category(self, request):
        return category_controller.create(request)

    def get_category(self, request):
        return category_controller.get_category(request)

    def update_category(self, request):
        return category_controller.update_category(request)

    def delete_category(self, request):
        return category_controller.delete_category(request)

class OrderViews(ModelViewSet):
    authentication_classes = [JWTAuthentication]

    def post_order(self, request):
        return order_controller.create(request)

    def get_order(self, request):
        return order_controller.get_order(request)

    def update_order(self, request):
        return order_controller.update_order(request)

    def delete_order(self, request):
        return order_controller.delete_order(request)
    


class ContactViews(ModelViewSet):
    # authentication_classes = [JWTAuthentication]

    def post_contact(self, request):
        return contact_controller.create(request)

    def get_contact(self, request):
        return contact_controller.get_contact(request)

    def update_contact(self, request):
        return contact_controller.update_contact(request)

    def delete_contact(self, request):
        return contact_controller.delete_contact(request)
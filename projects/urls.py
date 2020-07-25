from django.urls import path
from . import views

app_name='projects'

urlpatterns =[
    path('',views.home,name='home'),
    path('<int:project_id>/',views.details,name='detail'),
]
from django.shortcuts import render , get_object_or_404
from.models import Project


def home(request):
    projects=Project.objects.all()
    return render(request,'projects/index.html',  { 'projects':projects } )

def details(request,project_id):
    detail=get_object_or_404(Project, pk=project_id)
    return render(request,'projects/detail.html',{'detail':detail})
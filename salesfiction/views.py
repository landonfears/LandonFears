from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import permissions, viewsets, status, views
from salesfiction.models import Script, Story
from salesfiction.serializers import ScriptSerializer, StorySerializer
from django.views.generic.base import TemplateView
from django.views.generic import View
from django.utils.decorators import method_decorator
from django.core.mail import send_mail
from django.conf import settings

class IndexView(TemplateView):
	template_name = 'index.html'
	
	@method_decorator(ensure_csrf_cookie)
	def dispatch(self, *args, **kwargs):
		return super(IndexView, self).dispatch(*args, **kwargs)

class ContactView(views.APIView):
	def post(self, request, *args, **kwargs):
		try:
			send_mail(
				"Landon's Site: " + request.data['subject'],
				"From: " + request.data['email'] + "\r\n" + request.data['message'],
				request.data['email'],
				[settings.DEFAULT_FROM_EMAIL],
			)
		except:
			return JSONResponse({message: 'Oops, there was an error.'})
		return JSONResponse({'message': 'Thanks for the message!'})
		
class JSONResponse(HttpResponse):
	"""
	An HttpResponse that renders its content into JSON.
	"""
	def __init__(self, data, **kwargs):
		content = JSONRenderer().render(data)
		kwargs['content_type'] = 'application/json'
		super(JSONResponse, self).__init__(content, **kwargs)
		
@csrf_exempt
def latest_story(request):
	if request.method == 'GET':
		story = Story.objects.order_by('created_at')[:1]
		serializer = StorySerializer(story, many=True)
		return JSONResponse(serializer.data)

def script_list(request):
	"""
	List all scripts.
	"""
	if request.method == 'GET':
		scripts = Script.objects.all().order_by('created_at')
		serializer = ScriptSerializer(scripts, many=True)
		return JSONResponse(serializer.data)
		
def script_detail(request, pk):
	"""
	Retrieve, update or delete a code snippet.
	"""
	try:
		script = Script.objects.get(pk=pk)
	except Script.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = ScriptSerializer(script)
		return JSONResponse(serializer.data)


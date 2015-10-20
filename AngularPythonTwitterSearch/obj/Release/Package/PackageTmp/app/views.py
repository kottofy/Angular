"""
Definition of views.
"""

from django.shortcuts import render
from django.http import HttpRequest
from django.template import RequestContext
from datetime import datetime
from app.search_twitter import search_twitter
from app.watson import get_sentiment_analysis

def search(request):

    query = request.GET.get('query')  
    tweets = []

    if query:
        
        tweets = search_twitter(query)

        #TODO - edit get_sentiment_analysis
        tweets = get_sentiment_analysis(tweets)

    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        context_instance = RequestContext(request,
        {
            'query': query,
            'tweets': tweets
        })
    )

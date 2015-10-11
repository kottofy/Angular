from AngularPythonTwitterSearch.settings import *
import urllib
import json

def get_sentiment_analysis(text):

    scores = []
    
    api_key = watson_credentials['api_key']
    timeline_endpoint = "http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment"

    data_dictionary = {
        'apikey' : api_key,
        'outputMode' : 'json',
        'text' : 'banana apple yummy i love banana apple carrot mango',
        }

    #print("getting sentiment analysis on: " + text.encode(encoding='UTF-8',errors='strict'))

    try:
        # make a string with the request type in it:
        #method = "POST"
        # create a handler. you can specify different handlers here (file uploads etc)
        # but we go for the default
        #handler = urllib.HTTPHandler()
        ## create an openerdirector instance
        #opener = urllib.build_opener(handler)
        # build a request
        try:
            request = urllib.request.urlopen(timeline_endpoint, data = urllib.parse.urlencode(data_dictionary).encode("utf-8"))
            print('got request')    
        except urllib.error.ContentTooShortError as e:
            print(e)
            print('Content Too Short')
        except urllib.error.HTTPError as p:
            print(p)
            print('HTTP error')
        except urllib.error.URLError as q:
            print(q)
            print('url error')
        except Exception as m:
            print(m)
            print('caught exception!')
        # add any other information you want
        #request.add_header("Content-Type",'application/json')
        ## overload the get method function with a small anonymous function...
        #request.get_method = lambda: method
        # try it; don't forget to catch the result
        #try:
        #    connection = opener.open(request)
        #except urllib2.HTTPError as e:
        #    connection = e

        # check. Substitute with appropriate HTTP code.
        #if connection.code == 200:
        #    data = connection.read()
        #else:
        #    # handle the error case. connection.read() will still contain data
        #    # if any was returned, but it probably won't be of any use
        #    pass

       
        #response, data = client.request(timeline_endpoint)
        #scores = json.loads(data.decode(encoding='UTF-8'))
    except:
        print("Something went wrong getting score")
        pass


    return scores
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
        # send POST request to url with encoded data
        response = urllib.request.urlopen(timeline_endpoint, data = urllib.parse.urlencode(data_dictionary).encode("utf-8"))

        # read the response - gets bytes
        response_info = response.read()

        #convert response to json
        readable_info_json = json.loads(response_info.decode(encoding='UTF-8'))

        #identify sentiment score!
        score = readable_info_json['docSentiment']['score']

        #big hurrah!
        print('got score:' + readable_info_json['docSentiment']['score'])
           
        scores.append(score)

    except Exception as m:
        print('Error in getting Sentient Analysis score!')
        print(m)      
        pass

    return scores